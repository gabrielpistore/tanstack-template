// Base types for API responses and requests
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
  success: boolean;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: Record<string, any>;
}

// Authentication types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface User {
  id: string | number;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface AuthResponse extends ApiResponse<User> {
  tokens: AuthTokens;
}

// Generic CRUD types
export interface CreateRequest<T = any> {
  data: Partial<T>;
}

export interface UpdateRequest<T = any> {
  id: string | number;
  data: Partial<T>;
}

export interface DeleteRequest {
  id: string | number;
}

export interface ListRequest {
  page?: number;
  limit?: number;
  search?: string;
  filters?: Record<string, any>;
  sort?: string;
  order?: "asc" | "desc";
}

// Backend adapter interface
export interface BackendAdapter {
  name: string;
  baseURL: string;
  transformRequest?: (data: any) => any;
  transformResponse?: (data: any) => any;
  transformError?: (error: any) => ApiError;
  getAuthHeaders?: (tokens?: AuthTokens) => Record<string, string>;
}
