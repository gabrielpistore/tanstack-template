import { API_CONFIG } from "@/config/api";
import {
  mapDjangoLoginResponse,
  mapDjangoUserToFrontend,
  mapDjangoValidationErrors,
} from "@/lib/api/mappers/django";
import type { ApiError, AuthTokens, BackendAdapter } from "@/lib/api/types";

export const drfAdapter: BackendAdapter = {
  name: "Django REST Framework",
  baseURL: API_CONFIG.baseURL,

  transformRequest: (data: any) => {
    // DRF expects standard JSON, no transformation needed
    return data;
  },

  transformResponse: (data: any) => {
    console.log("🔄 DRF Adapter: Transforming response", {
      data,
      dataType: typeof data,
    });

    // Handle login response specifically
    if (data.tokens && (data.email || data.tokens.user)) {
      console.log("✅ DRF Adapter: Detected login response");
      return mapDjangoLoginResponse(data);
    }

    // Handle user profile response (from /me endpoint)
    if (data.email && !data.tokens) {
      console.log("✅ DRF Adapter: Detected user profile response");
      return {
        data: mapDjangoUserToFrontend(data),
        success: true,
        status: 200,
      };
    }

    // Handle paginated responses
    if (data.results !== undefined) {
      console.log("✅ DRF Adapter: Detected paginated response", {
        resultsCount: data.results.length,
        totalCount: data.count,
        pageSize: data.page_size,
        hasNext: !!data.links?.next,
        hasPrev: !!data.links?.previous,
      });
      // Extract page info from links
      let currentPage = 1;
      if (data.links?.previous) {
        const prevMatch = data.links.previous.match(/page=(\d+)/);
        currentPage = prevMatch ? parseInt(prevMatch[1]) + 1 : 1;
      }

      const pageSize = data.page_size || data.results.length || 20;

      const transformedResponse = {
        data: data.results,
        success: true,
        status: 200,
        pagination: {
          page: currentPage,
          limit: pageSize,
          total: data.count,
          totalPages: Math.ceil(data.count / pageSize),
          hasNext: !!data.links?.next,
          hasPrev: !!data.links?.previous,
        },
      };

      console.log(
        "🎯 DRF Adapter: Paginated response transformed",
        transformedResponse
      );
      return transformedResponse;
    }

    // Handle single object responses
    if (typeof data === "object" && data !== null && !data.success) {
      return {
        data,
        success: true,
        status: 200,
      };
    }

    return data;
  },

  transformError: (error: any): ApiError => {
    if (error.response) {
      const { status, data } = error.response;

      // Handle DRF validation errors
      if (status === 400 && data) {
        let message = "Validation error";
        let details: Record<string, any> = {};

        if (typeof data === "object") {
          // Use Django mapper for validation errors
          details = mapDjangoValidationErrors(data);

          // Use first error as main message
          const firstError = Object.values(data)[0];
          if (Array.isArray(firstError) && firstError.length > 0) {
            message = firstError[0];
          } else if (typeof firstError === "string") {
            message = firstError;
          }

          // Handle non_field_errors specifically
          if (data.non_field_errors && Array.isArray(data.non_field_errors)) {
            message = data.non_field_errors[0];
          }
        }

        return {
          message,
          status,
          code: "VALIDATION_ERROR",
          details,
        };
      }

      // Handle authentication errors
      if (status === 401) {
        return {
          message: data?.detail || "Authentication required",
          status,
          code: "AUTHENTICATION_ERROR",
        };
      }

      // Handle permission errors
      if (status === 403) {
        return {
          message: data?.detail || "Permission denied",
          status,
          code: "PERMISSION_ERROR",
        };
      }

      // Handle not found errors
      if (status === 404) {
        return {
          message: data?.detail || "Resource not found",
          status,
          code: "NOT_FOUND",
        };
      }

      // Generic error handling
      return {
        message: data?.detail || data?.message || "An error occurred",
        status,
        details: data,
      };
    }

    return {
      message: error.message || "Network error",
      status: 0,
      code: "NETWORK_ERROR",
    };
  },

  getAuthHeaders: (tokens?: AuthTokens): Record<string, string> => {
    if (!tokens) return {};
    return {
      Authorization: `Bearer ${tokens.access}`,
    };
  },
};
