import type { ApiClient } from "@/lib/api/client";
import type {
  AuthResponse,
  AuthTokens,
  LoginCredentials,
  RegisterData,
  User,
} from "@/lib/api/types";
import {
  mapFrontendUserToDjango,
  mapRegisterDataToDjango,
} from "../mappers/django";

export class AuthService {
  constructor(private client: ApiClient) {}

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    console.log("🔐 AuthService: Starting login...", credentials.email);

    const response = await this.client.post<AuthResponse>(
      "/accounts/login/",
      credentials
    );

    console.log("📥 AuthService: Login response received:", response);

    // Store tokens in the client - tokens can be in response.tokens or response.data.tokens
    const tokens = (response as any).tokens || response.data.tokens;
    if (tokens) {
      console.log("💾 AuthService: Storing tokens...", tokens);
      this.client.setTokens(tokens);
      // Store in localStorage for persistence
      localStorage.setItem("auth_tokens", JSON.stringify(tokens));
      console.log("✅ AuthService: Tokens stored successfully");
    } else {
      console.warn("⚠️ AuthService: No tokens in response");
    }

    return response.data;
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    // Transform frontend data to Django format using mapper
    const djangoData = mapRegisterDataToDjango(data);

    const response = await this.client.post<AuthResponse>(
      "/accounts/register/",
      djangoData
    );

    // Store tokens in the client if auto-login after registration
    if (response.data.tokens) {
      this.client.setTokens(response.data.tokens);
      localStorage.setItem("auth_tokens", JSON.stringify(response.data.tokens));
    }

    return response.data;
  }

  async logout(): Promise<void> {
    try {
      const tokens = this.client.getTokens();
      if (tokens?.refresh) {
        await this.client.post("/accounts/logout/", {
          refresh: tokens.refresh,
        });
      }
    } catch (error) {
      // Continue with logout even if API call fails
      console.warn("Logout API call failed:", error);
    } finally {
      // Always clear local tokens
      this.client.setTokens(null);
      localStorage.removeItem("auth_tokens");
    }
  }

  async refreshToken(): Promise<AuthTokens> {
    const currentTokens = this.client.getTokens();
    if (!currentTokens?.refresh) {
      throw new Error("No refresh token available");
    }

    const response = await this.client.post<{
      access: string;
      refresh?: string;
    }>("/accounts/token/refresh/", {
      refresh: currentTokens.refresh,
    });

    // Django JWT returns new access token and optionally new refresh token
    const newTokens: AuthTokens = {
      access: response.data.access,
      refresh: response.data.refresh || currentTokens.refresh,
    };

    this.client.setTokens(newTokens);
    localStorage.setItem("auth_tokens", JSON.stringify(newTokens));

    return newTokens;
  }

  async getCurrentUser(): Promise<User> {
    const response = await this.client.get<User>("/accounts/me/");
    return response.data;
  }

  async updateProfile(data: Partial<User>): Promise<User> {
    // Transform frontend data to Django format using mapper
    const djangoData = mapFrontendUserToDjango(data);

    const response = await this.client.patch<User>("/accounts/me/", djangoData);
    return response.data;
  }

  async changePassword(
    currentPassword: string,
    newPassword: string
  ): Promise<void> {
    await this.client.post("/accounts/change-password/", {
      current_password: currentPassword,
      new_password: newPassword,
    });
  }

  async requestPasswordReset(email: string): Promise<void> {
    await this.client.post("/accounts/password-reset/", { email });
  }

  async confirmPasswordReset(
    token: string,
    newPassword: string
  ): Promise<void> {
    await this.client.post("/accounts/password-reset/confirm/", {
      token,
      new_password: newPassword,
    });
  }

  // Utility methods
  isAuthenticated(): boolean {
    const tokens = this.client.getTokens();
    return !!tokens?.access;
  }

  getStoredTokens(): AuthTokens | null {
    try {
      const stored = localStorage.getItem("auth_tokens");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  initializeFromStorage(): void {
    const storedTokens = this.getStoredTokens();
    if (storedTokens) {
      this.client.setTokens(storedTokens);
    }
  }

  // Token validation (basic check)
  isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Date.now() / 1000;
      return payload.exp < currentTime;
    } catch {
      return true;
    }
  }

  shouldRefreshToken(): boolean {
    const tokens = this.client.getTokens();
    if (!tokens?.access || !tokens?.refresh) return false;

    // Check if access token is expired or will expire in the next 5 minutes
    try {
      const payload = JSON.parse(atob(tokens.access.split(".")[1]));
      const currentTime = Date.now() / 1000;
      const fiveMinutesFromNow = currentTime + 300; // 5 minutes
      return payload.exp < fiveMinutesFromNow;
    } catch {
      return true;
    }
  }
}
