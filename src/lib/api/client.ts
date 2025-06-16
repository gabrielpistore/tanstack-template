import { normalizeApiUrl } from "@/config/api";
import type {
  ApiError,
  ApiResponse,
  AuthTokens,
  BackendAdapter,
} from "./types";

export class ApiClient {
  private adapter: BackendAdapter;
  private tokens: AuthTokens | null = null;

  constructor(adapter: BackendAdapter) {
    this.adapter = adapter;
    // Normalize the base URL to avoid CORS issues
    this.adapter.baseURL = normalizeApiUrl(this.adapter.baseURL);
  }

  private async request<T = any>(
    url: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const fullUrl = `${this.adapter.baseURL}${url}`;

    // Setup headers
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    // Add auth headers if tokens exist
    if (this.tokens && this.adapter.getAuthHeaders) {
      const authHeaders = this.adapter.getAuthHeaders(this.tokens);
      Object.assign(headers, authHeaders);
    }

    // Transform request data if adapter provides transformer
    let body = options.body;
    if (body && typeof body === "string" && this.adapter.transformRequest) {
      try {
        const parsedBody = JSON.parse(body);
        body = JSON.stringify(this.adapter.transformRequest(parsedBody));
      } catch {
        // If parsing fails, keep original body
      }
    }

    try {
      const response = await fetch(fullUrl, {
        ...options,
        headers,
        body,
        // Add credentials for CORS
        credentials: "include",
        // Add mode for CORS
        mode: "cors",
      });

      let data;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const textData = await response.text();
        data = textData || null;
      }

      if (!response.ok) {
        const error = this.adapter.transformError
          ? this.adapter.transformError({
              response: { status: response.status, data },
            })
          : this.defaultErrorTransform({
              response: { status: response.status, data },
            });

        throw error;
      }

      // Log raw response before transformation
      console.log(`🔍 ApiClient: Raw response from ${fullUrl}`, {
        status: response.status,
        contentType,
        rawData: data,
        dataType: typeof data,
        isArray: Array.isArray(data),
      });

      // Transform response data if adapter provides transformer
      if (this.adapter.transformResponse) {
        const transformedData = this.adapter.transformResponse(data);
        console.log(`🔄 ApiClient: Data transformed by adapter`, {
          before: data,
          after: transformedData,
        });
        data = transformedData;
      }

      // Ensure we return a proper ApiResponse structure
      if (data && typeof data === "object" && "data" in data) {
        console.log(`✅ ApiClient: Returning structured response`, data);
        return data;
      }

      const finalResponse = {
        data,
        success: true,
        status: response.status,
      };

      console.log(`✅ ApiClient: Returning wrapped response`, finalResponse);
      return finalResponse;
    } catch (error: any) {
      if (error.status) {
        // Already transformed error
        throw error;
      }

      // Enhanced error handling for CORS and network issues
      const apiError = this.adapter.transformError
        ? this.adapter.transformError(error)
        : this.defaultErrorTransform(error);

      throw apiError;
    }
  }

  private defaultErrorTransform(error: any): ApiError {
    if (error.response) {
      return {
        message:
          error.response.data?.message || error.message || "An error occurred",
        status: error.response.status,
        code: error.response.data?.code,
        details: error.response.data?.details,
      };
    }

    // Enhanced error messages for common CORS/network issues
    if (error.message === "Failed to fetch") {
      return {
        message:
          "Network error: Unable to connect to the server. Please check if the backend is running and CORS is properly configured.",
        status: 0,
        code: "NETWORK_ERROR",
        details: {
          originalError: error.message,
          suggestion:
            "Ensure your backend server is running and has CORS configured for your frontend origin.",
        },
      };
    }

    return {
      message: error.message || "Network error",
      status: 0,
      code: "UNKNOWN_ERROR",
    };
  }

  setTokens(tokens: AuthTokens | null) {
    this.tokens = tokens;
  }

  getTokens(): AuthTokens | null {
    return this.tokens;
  }

  async get<T = any>(
    url: string,
    config?: { params?: Record<string, string> }
  ): Promise<ApiResponse<T>> {
    let finalUrl = url;

    // Handle query parameters
    if (config?.params) {
      const searchParams = new URLSearchParams(config.params);
      finalUrl = `${url}${url.includes("?") ? "&" : "?"}${searchParams.toString()}`;
    }

    console.log(`🌐 ApiClient: GET request to ${finalUrl}`);

    try {
      const result = await this.request<T>(finalUrl, { method: "GET" });
      console.log(`📥 ApiClient: GET response from ${finalUrl}`, {
        status: result.status,
        success: result.success,
        dataType: typeof result.data,
        dataPreview: result.data,
      });
      return result;
    } catch (error) {
      console.error(`❌ ApiClient: GET request failed for ${finalUrl}`, error);
      throw error;
    }
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });
  }

  async put<T = any>(
    url: string,
    data?: any,
    config?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });
  }

  async patch<T = any>(
    url: string,
    data?: any,
    config?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });
  }

  async delete<T = any>(
    url: string,
    config?: RequestInit & { data?: any }
  ): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      method: "DELETE",
      body: config?.data ? JSON.stringify(config.data) : undefined,
      ...config,
    });
  }

  // Raw fetch access for custom requests
  getRawFetch(): typeof fetch {
    return fetch;
  }
}
