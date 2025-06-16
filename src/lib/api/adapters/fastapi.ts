import type { ApiError, AuthTokens, BackendAdapter } from "../types";

export const fastApiAdapter: BackendAdapter = {
  name: "FastAPI",
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",

  transformRequest: (data: any) => {
    // FastAPI expects standard JSON, no transformation needed
    return data;
  },

  transformResponse: (data: any) => {
    // FastAPI responses might need normalization
    if (data.items !== undefined && data.total !== undefined) {
      // Handle paginated responses (FastAPI common pattern)
      return {
        data: data.items,
        success: true,
        status: 200,
        pagination: {
          page: data.page || 1,
          limit: data.size || data.items.length,
          total: data.total,
          totalPages: Math.ceil(data.total / (data.size || data.items.length)),
          hasNext: data.page * data.size < data.total,
          hasPrev: data.page > 1,
        },
      };
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

      // Handle FastAPI validation errors (422)
      if (status === 422 && data?.detail) {
        const details: Record<string, any> = {};
        let message = "Validation error";

        if (Array.isArray(data.detail)) {
          // Handle Pydantic validation errors
          data.detail.forEach((err: any) => {
            const field = err.loc?.join(".") || "unknown";
            if (!details[field]) details[field] = [];
            details[field].push(err.msg);
          });

          // Use first error as main message
          if (data.detail.length > 0) {
            message = data.detail[0].msg;
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
