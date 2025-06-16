// Core exports
export { ApiClient } from "./client";
export { DataProvider, useDataProvider } from "./context";

// Services
export { AuthService } from "./services/auth";
export { CrudService } from "./services/crud";

// Adapters
export * from "./adapters";

// Types
export type * from "./types";

// Hooks
export { useAuth, useCurrentUser } from "@/hooks/useAuth";
export {
  useCrud,
  useInfiniteList,
  useListWithPagination,
} from "@/hooks/useCrud";

// Utility function to create a configured data provider
export function createDataProvider(adapterType: "drf" | "fastapi" = "drf") {
  return async () => {
    const { adapters } = await import("./adapters");
    const adapter = await adapters[adapterType]();
    return adapter;
  };
}
