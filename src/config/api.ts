// Configuração da API
export const API_CONFIG = {
  // URL base da API - pode ser sobrescrita por variável de ambiente
  // Usando localhost em vez de 127.0.0.1 para evitar problemas de CORS
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",

  // Timeout padrão para requisições (em ms)
  timeout: 10000,

  // Configurações de retry
  retry: {
    attempts: 3,
    delay: 1000,
  },

  // Configurações de cache do TanStack Query
  cache: {
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos
  },

  // Configurações de CORS para desenvolvimento
  cors: {
    credentials: true,
    allowedOrigins: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:5173", // Vite default port
    ],
  },
};

// URLs de exemplo para diferentes backends
export const BACKEND_EXAMPLES = {
  drf: "http://localhost:8000/api",
  fastapi: "http://localhost:8000",
  express: "http://localhost:3000/api",
  rust_axum: "http://localhost:3001/api",
};

// Função para detectar o tipo de backend baseado na URL
export function detectBackendType(url: string): "drf" | "fastapi" | "generic" {
  // Lógica simples de detecção - pode ser expandida
  if (url.includes(":8000") && url.includes("/api")) {
    return "drf";
  }
  if (url.includes(":8000") && !url.includes("/api")) {
    return "fastapi";
  }
  return "generic";
}

// Função para normalizar URLs e evitar problemas de CORS
export function normalizeApiUrl(url: string): string {
  // Substitui 127.0.0.1 por localhost para consistência
  return url.replace("127.0.0.1", "localhost");
}
