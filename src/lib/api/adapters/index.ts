export { drfAdapter } from "./drf";
export { fastApiAdapter } from "./fastapi";

// Export a registry of available adapters
export const adapters = {
  drf: () => import("@/lib/api/adapters/drf").then((m) => m.drfAdapter),
  fastapi: () =>
    import("@/lib/api/adapters/fastapi").then((m) => m.fastApiAdapter),
} as const;

export type AdapterType = keyof typeof adapters;
