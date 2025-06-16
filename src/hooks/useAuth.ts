import { useDataProvider } from "@/lib/api/context";
import type { LoginCredentials, RegisterData, User } from "@/lib/api/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useAuth() {
  const { auth, user, isAuthenticated, isLoading } = useDataProvider();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => auth.login(credentials),
    onSuccess: (data) => {
      // Update user in cache
      queryClient.setQueryData(["auth", "user"], data.data);
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterData) => auth.register(data),
    onSuccess: (data) => {
      // Update user in cache if auto-login after registration
      if (data.tokens) {
        queryClient.setQueryData(["auth", "user"], data.data);
        queryClient.invalidateQueries({ queryKey: ["auth"] });
      }
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => auth.logout(),
    onSuccess: () => {
      // Clear all cached data
      queryClient.clear();
    },
    onError: (error) => {
      console.error("Logout failed:", error);
      // Still clear cache even if logout API call failed
      queryClient.clear();
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: (data: Partial<User>) => auth.updateProfile(data),
    onSuccess: (updatedUser) => {
      // Update user in cache
      queryClient.setQueryData(["auth", "user"], updatedUser);
      queryClient.invalidateQueries({ queryKey: ["auth", "user"] });
    },
    onError: (error) => {
      console.error("Profile update failed:", error);
    },
  });

  const changePasswordMutation = useMutation({
    mutationFn: ({
      currentPassword,
      newPassword,
    }: {
      currentPassword: string;
      newPassword: string;
    }) => auth.changePassword(currentPassword, newPassword),
    onError: (error) => {
      console.error("Password change failed:", error);
    },
  });

  const requestPasswordResetMutation = useMutation({
    mutationFn: (email: string) => auth.requestPasswordReset(email),
    onError: (error) => {
      console.error("Password reset request failed:", error);
    },
  });

  const confirmPasswordResetMutation = useMutation({
    mutationFn: ({
      token,
      newPassword,
    }: {
      token: string;
      newPassword: string;
    }) => auth.confirmPasswordReset(token, newPassword),
    onError: (error) => {
      console.error("Password reset confirmation failed:", error);
    },
  });

  return {
    // State
    user,
    isAuthenticated,
    isLoading,

    // Mutations
    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,

    register: registerMutation.mutate,
    registerAsync: registerMutation.mutateAsync,
    isRegistering: registerMutation.isPending,
    registerError: registerMutation.error,

    logout: logoutMutation.mutate,
    logoutAsync: logoutMutation.mutateAsync,
    isLoggingOut: logoutMutation.isPending,
    logoutError: logoutMutation.error,

    updateProfile: updateProfileMutation.mutate,
    updateProfileAsync: updateProfileMutation.mutateAsync,
    isUpdatingProfile: updateProfileMutation.isPending,
    updateProfileError: updateProfileMutation.error,

    changePassword: changePasswordMutation.mutate,
    changePasswordAsync: changePasswordMutation.mutateAsync,
    isChangingPassword: changePasswordMutation.isPending,
    changePasswordError: changePasswordMutation.error,

    requestPasswordReset: requestPasswordResetMutation.mutate,
    requestPasswordResetAsync: requestPasswordResetMutation.mutateAsync,
    isRequestingPasswordReset: requestPasswordResetMutation.isPending,
    requestPasswordResetError: requestPasswordResetMutation.error,

    confirmPasswordReset: confirmPasswordResetMutation.mutate,
    confirmPasswordResetAsync: confirmPasswordResetMutation.mutateAsync,
    isConfirmingPasswordReset: confirmPasswordResetMutation.isPending,
    confirmPasswordResetError: confirmPasswordResetMutation.error,
  };
}

// Hook for getting current user with query
export function useCurrentUser() {
  const { auth, isAuthenticated } = useDataProvider();

  return useQuery({
    queryKey: ["auth", "user"],
    queryFn: () => auth.getCurrentUser(),
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error: any) => {
      // Don't retry on auth errors
      if (error?.status === 401 || error?.status === 403) {
        return false;
      }
      return failureCount < 2;
    },
  });
}
