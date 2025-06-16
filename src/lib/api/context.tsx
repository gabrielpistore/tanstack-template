import { ApiClient } from "@/lib/api/client";
import { AuthService } from "@/lib/api/services/auth";
import { CrudService } from "@/lib/api/services/crud";
import type { BackendAdapter, User } from "@/lib/api/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { createContext, useContext, useEffect, useState } from "react";

interface DataProviderContextType {
  client: ApiClient;
  auth: AuthService;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  createCrudService: <T = any>(endpoint: string) => CrudService<T>;
}

const DataProviderContext = createContext<DataProviderContextType | null>(null);

interface DataProviderProps {
  children: React.ReactNode;
  adapter: BackendAdapter;
  queryClient?: QueryClient;
}

export function DataProvider({
  children,
  adapter,
  queryClient,
}: DataProviderProps) {
  const [client] = useState(() => new ApiClient(adapter));
  const [auth] = useState(() => new AuthService(client));
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authState, setAuthState] = useState(false);

  const [defaultQueryClient] = useState(
    () =>
      queryClient ||
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
            retry: (failureCount, error: any) => {
              // Don't retry on 4xx errors except 408, 429
              if (error?.status >= 400 && error?.status < 500) {
                return error?.status === 408 || error?.status === 429
                  ? failureCount < 2
                  : false;
              }
              return failureCount < 3;
            },
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: (failureCount, error: any) => {
              // Don't retry mutations on client errors
              if (error?.status >= 400 && error?.status < 500) {
                return false;
              }
              return failureCount < 2;
            },
          },
        },
      })
  );

  const createCrudService = <T = any,>(endpoint: string) => {
    return new CrudService<T>(client, endpoint);
  };

  // Initialize authentication from storage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        auth.initializeFromStorage();

        if (auth.isAuthenticated()) {
          // Check if token needs refresh
          if (auth.shouldRefreshToken()) {
            try {
              await auth.refreshToken();
            } catch (error) {
              console.warn("Token refresh failed:", error);
              auth.logout();
              setUser(null);
              setIsLoading(false);
              return;
            }
          }

          // Get current user
          try {
            const currentUser = await auth.getCurrentUser();
            setUser(currentUser);
          } catch (error) {
            console.warn("Failed to get current user:", error);
            auth.logout();
            setUser(null);
          }
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, [auth]);

  // Set up automatic token refresh
  useEffect(() => {
    if (!auth.isAuthenticated()) return;

    const interval = setInterval(async () => {
      if (auth.shouldRefreshToken()) {
        try {
          await auth.refreshToken();
        } catch (error) {
          console.warn("Automatic token refresh failed:", error);
          auth.logout();
          setUser(null);
        }
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [auth, user]);

  // Update authentication state when tokens change
  useEffect(() => {
    const checkAuthState = async () => {
      const newIsAuthenticated = auth.isAuthenticated();

      if (newIsAuthenticated !== authState) {
        console.log("🔄 DataProvider: Auth state changed:", {
          from: authState,
          to: newIsAuthenticated,
          hasUser: !!user,
        });
        setAuthState(newIsAuthenticated);

        if (newIsAuthenticated && !user) {
          // User just logged in, fetch user data
          console.log("👤 DataProvider: Fetching user data after login...");
          try {
            const currentUser = await auth.getCurrentUser();
            console.log("✅ DataProvider: User data fetched:", currentUser);
            setUser(currentUser);
          } catch (error) {
            console.warn("Failed to get user after login:", error);
            auth.logout();
            setUser(null);
            setAuthState(false);
          }
        } else if (!newIsAuthenticated) {
          // User just logged out
          console.log("🚪 DataProvider: User logged out, clearing user data");
          setUser(null);
        }
      }
    };

    // Check immediately
    checkAuthState();

    // Set up interval to check for token changes
    const interval = setInterval(checkAuthState, 500); // Check more frequently
    return () => clearInterval(interval);
  }, [auth, user, authState]);

  const contextValue: DataProviderContextType = {
    client,
    auth,
    user,
    isAuthenticated: authState,
    isLoading,
    createCrudService,
  };

  return (
    <QueryClientProvider client={defaultQueryClient}>
      <DataProviderContext.Provider value={contextValue}>
        {children}
      </DataProviderContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export function useDataProvider() {
  const context = useContext(DataProviderContext);
  if (!context) {
    throw new Error("useDataProvider must be used within a DataProvider");
  }
  return context;
}
