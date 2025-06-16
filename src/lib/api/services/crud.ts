import type { ApiClient } from "@/lib/api/client";
import type {
  ApiResponse,
  CreateRequest,
  DeleteRequest,
  ListRequest,
  PaginatedResponse,
  UpdateRequest,
} from "@/lib/api/types";

export class CrudService<T = any> {
  constructor(
    private client: ApiClient,
    private endpoint: string
  ) {}

  async list(params?: ListRequest): Promise<PaginatedResponse<T>> {
    console.log(`🔍 CrudService: Starting list request for ${this.endpoint}`, {
      params,
    });

    const queryParams = new URLSearchParams();

    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.limit) queryParams.append("limit", params.limit.toString());
    if (params?.search) queryParams.append("search", params.search);
    if (params?.sort) queryParams.append("sort", params.sort);
    if (params?.order) queryParams.append("order", params.order);

    // Handle filters
    if (params?.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, value.toString());
        }
      });
    }

    const url = queryParams.toString()
      ? `${this.endpoint}?${queryParams.toString()}`
      : this.endpoint;

    console.log(`📤 CrudService: Making request to ${url}`);

    try {
      const response = await this.client.get<PaginatedResponse<T>>(url);
      console.log(
        `📥 CrudService: Raw response received for ${this.endpoint}`,
        {
          status: response.status,
          success: response.success,
          dataType: typeof response.data,
          dataIsArray: Array.isArray(response.data),
          dataLength: Array.isArray(response.data)
            ? response.data.length
            : "not array",
          pagination: (response as any).pagination,
          fullResponse: response,
        }
      );

      // The adapter transforms the response to include pagination at the root level
      // Check if pagination exists at root level (from adapter transformation)
      if ("pagination" in response) {
        return response as unknown as PaginatedResponse<T>;
      }

      // Fallback: if no pagination, wrap the data
      const dataArray = Array.isArray(response.data) ? response.data : [];
      return {
        data: dataArray as T[],
        status: response.status,
        success: response.success,
        pagination: {
          page: 1,
          limit: dataArray.length,
          total: dataArray.length,
          totalPages: 1,
          hasNext: false,
          hasPrev: false,
        },
      } as PaginatedResponse<T>;
    } catch (error) {
      console.error(
        `❌ CrudService: Request failed for ${this.endpoint}`,
        error
      );
      throw error;
    }
  }

  async get(id: string | number): Promise<ApiResponse<T>> {
    return this.client.get<T>(`${this.endpoint}/${id}`);
  }

  async create(data: CreateRequest<T>): Promise<ApiResponse<T>> {
    return this.client.post<T>(this.endpoint, data.data);
  }

  async update(request: UpdateRequest<T>): Promise<ApiResponse<T>> {
    return this.client.patch<T>(`${this.endpoint}/${request.id}`, request.data);
  }

  async replace(request: UpdateRequest<T>): Promise<ApiResponse<T>> {
    return this.client.put<T>(`${this.endpoint}/${request.id}`, request.data);
  }

  async delete(request: DeleteRequest): Promise<ApiResponse<void>> {
    return this.client.delete(`${this.endpoint}/${request.id}`);
  }

  // Bulk operations
  async bulkCreate(items: CreateRequest<T>[]): Promise<ApiResponse<T[]>> {
    const data = items.map((item) => item.data);
    return this.client.post<T[]>(`${this.endpoint}/bulk`, data);
  }

  async bulkUpdate(items: UpdateRequest<T>[]): Promise<ApiResponse<T[]>> {
    return this.client.patch<T[]>(`${this.endpoint}/bulk`, items);
  }

  async bulkDelete(ids: (string | number)[]): Promise<ApiResponse<void>> {
    return this.client.delete(`${this.endpoint}/bulk`, { data: { ids } });
  }

  // Custom endpoint methods
  async customGet<R = any>(
    path: string,
    params?: Record<string, any>
  ): Promise<ApiResponse<R>> {
    const queryParams = params ? new URLSearchParams(params).toString() : "";
    const url = queryParams
      ? `${this.endpoint}/${path}?${queryParams}`
      : `${this.endpoint}/${path}`;
    return this.client.get<R>(url);
  }

  async customPost<R = any>(path: string, data?: any): Promise<ApiResponse<R>> {
    return this.client.post<R>(`${this.endpoint}/${path}`, data);
  }

  async customPatch<R = any>(
    path: string,
    data?: any
  ): Promise<ApiResponse<R>> {
    return this.client.patch<R>(`${this.endpoint}/${path}`, data);
  }

  async customDelete<R = any>(path: string): Promise<ApiResponse<R>> {
    return this.client.delete<R>(`${this.endpoint}/${path}`);
  }
}
