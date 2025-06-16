import { useDataProvider } from "@/lib/api/context";
import type {
  CreateRequest,
  DeleteRequest,
  ListRequest,
  UpdateRequest,
} from "@/lib/api/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCrud<T = any>(endpoint: string) {
  const { createCrudService } = useDataProvider();
  const queryClient = useQueryClient();
  const service = createCrudService<T>(endpoint);

  // List query
  const useList = (params?: ListRequest) => {
    return useQuery({
      queryKey: [endpoint, "list", params],
      queryFn: async () => {
        console.log(`🔍 useCrud: Fetching list for ${endpoint}`, { params });
        try {
          const result = await service.list(params);
          console.log(`✅ useCrud: List fetched for ${endpoint}`, {
            data: result.data,
            pagination: result.pagination,
            total: Array.isArray(result.data)
              ? result.data.length
              : "not array",
          });
          return result;
        } catch (error) {
          console.error(`❌ useCrud: List fetch failed for ${endpoint}`, error);
          throw error;
        }
      },
      staleTime: 2 * 60 * 1000, // 2 minutes
    });
  };

  // Get single item query
  const useGet = (id: string | number, enabled = true) => {
    return useQuery({
      queryKey: [endpoint, "item", id],
      queryFn: () => service.get(id),
      enabled: enabled && !!id,
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  };

  // Create mutation
  const useCreate = () => {
    return useMutation({
      mutationFn: (data: CreateRequest<T>) => service.create(data),
      onSuccess: (response, variables) => {
        // Invalidate list queries
        queryClient.invalidateQueries({ queryKey: [endpoint, "list"] });

        // Add the new item to cache if it has an id
        if (
          response.data &&
          typeof response.data === "object" &&
          "id" in response.data
        ) {
          queryClient.setQueryData(
            [endpoint, "item", (response.data as any).id],
            response
          );
        }
      },
      onError: (error) => {
        console.error(`Create ${endpoint} failed:`, error);
      },
    });
  };

  // Update mutation
  const useUpdate = () => {
    return useMutation({
      mutationFn: (request: UpdateRequest<T>) => service.update(request),
      onSuccess: (response, variables) => {
        // Update the item in cache
        queryClient.setQueryData([endpoint, "item", variables.id], response);

        // Invalidate list queries to reflect changes
        queryClient.invalidateQueries({ queryKey: [endpoint, "list"] });
      },
      onError: (error) => {
        console.error(`Update ${endpoint} failed:`, error);
      },
    });
  };

  // Replace mutation (PUT)
  const useReplace = () => {
    return useMutation({
      mutationFn: (request: UpdateRequest<T>) => service.replace(request),
      onSuccess: (response, variables) => {
        // Update the item in cache
        queryClient.setQueryData([endpoint, "item", variables.id], response);

        // Invalidate list queries to reflect changes
        queryClient.invalidateQueries({ queryKey: [endpoint, "list"] });
      },
      onError: (error) => {
        console.error(`Replace ${endpoint} failed:`, error);
      },
    });
  };

  // Delete mutation
  const useDelete = () => {
    return useMutation({
      mutationFn: (request: DeleteRequest) => service.delete(request),
      onSuccess: (response, variables) => {
        // Remove the item from cache
        queryClient.removeQueries({
          queryKey: [endpoint, "item", variables.id],
        });

        // Invalidate list queries to reflect changes
        queryClient.invalidateQueries({ queryKey: [endpoint, "list"] });
      },
      onError: (error) => {
        console.error(`Delete ${endpoint} failed:`, error);
      },
    });
  };

  // Bulk operations
  const useBulkCreate = () => {
    return useMutation({
      mutationFn: (items: CreateRequest<T>[]) => service.bulkCreate(items),
      onSuccess: () => {
        // Invalidate all list queries
        queryClient.invalidateQueries({ queryKey: [endpoint, "list"] });
      },
      onError: (error) => {
        console.error(`Bulk create ${endpoint} failed:`, error);
      },
    });
  };

  const useBulkUpdate = () => {
    return useMutation({
      mutationFn: (items: UpdateRequest<T>[]) => service.bulkUpdate(items),
      onSuccess: (response, variables) => {
        // Invalidate affected items and lists
        variables.forEach((item) => {
          queryClient.invalidateQueries({
            queryKey: [endpoint, "item", item.id],
          });
        });
        queryClient.invalidateQueries({ queryKey: [endpoint, "list"] });
      },
      onError: (error) => {
        console.error(`Bulk update ${endpoint} failed:`, error);
      },
    });
  };

  const useBulkDelete = () => {
    return useMutation({
      mutationFn: (ids: (string | number)[]) => service.bulkDelete(ids),
      onSuccess: (response, variables) => {
        // Remove items from cache
        variables.forEach((id) => {
          queryClient.removeQueries({ queryKey: [endpoint, "item", id] });
        });

        // Invalidate list queries
        queryClient.invalidateQueries({ queryKey: [endpoint, "list"] });
      },
      onError: (error) => {
        console.error(`Bulk delete ${endpoint} failed:`, error);
      },
    });
  };

  // Custom endpoint queries and mutations
  const useCustomQuery = <R = any>(
    path: string,
    params?: Record<string, any>,
    options?: { enabled?: boolean; staleTime?: number }
  ) => {
    return useQuery({
      queryKey: [endpoint, "custom", path, params],
      queryFn: () => service.customGet<R>(path, params),
      enabled: options?.enabled ?? true,
      staleTime: options?.staleTime ?? 2 * 60 * 1000,
    });
  };

  const useCustomMutation = <R = any>(
    path: string,
    method: "POST" | "PATCH" | "DELETE" = "POST"
  ) => {
    return useMutation({
      mutationFn: (data?: any) => {
        switch (method) {
          case "POST":
            return service.customPost<R>(path, data);
          case "PATCH":
            return service.customPatch<R>(path, data);
          case "DELETE":
            return service.customDelete<R>(path);
          default:
            throw new Error(`Unsupported method: ${method}`);
        }
      },
      onSuccess: () => {
        // Invalidate related queries
        queryClient.invalidateQueries({ queryKey: [endpoint] });
      },
      onError: (error) => {
        console.error(`Custom ${method} ${endpoint}/${path} failed:`, error);
      },
    });
  };

  return {
    // Queries
    useList,
    useGet,
    useCustomQuery,

    // Mutations
    useCreate,
    useUpdate,
    useReplace,
    useDelete,
    useBulkCreate,
    useBulkUpdate,
    useBulkDelete,
    useCustomMutation,

    // Direct service access for advanced use cases
    service,
  };
}

// Convenience hook for common patterns
export function useListWithPagination<T = any>(
  endpoint: string,
  initialParams?: ListRequest
) {
  const { useList } = useCrud<T>(endpoint);

  return useList(initialParams);
}

// Hook for infinite queries (pagination)
export function useInfiniteList<T = any>(
  endpoint: string,
  baseParams?: Omit<ListRequest, "page">
) {
  const { createCrudService } = useDataProvider();
  const service = createCrudService<T>(endpoint);

  return useQuery({
    queryKey: [endpoint, "infinite", baseParams],
    queryFn: async () => {
      const params = { ...baseParams, page: 1 };
      return service.list(params);
    },
    // Note: useInfiniteQuery would be better here, but keeping it simple for now
    staleTime: 2 * 60 * 1000,
  });
}
