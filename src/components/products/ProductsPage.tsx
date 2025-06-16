import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useCrud } from "@/hooks/useCrud";
import type { Product, ProductFilters } from "@/types/product";
import {
  DollarSign,
  Loader2,
  LogOut,
  Package,
  Search,
  TrendingUp,
  Warehouse,
} from "lucide-react";
import React, { useState } from "react";

export function ProductsPage() {
  const { user, isAuthenticated, logout, isLoading: authLoading } = useAuth();
  const [filters, setFilters] = useState<ProductFilters>({});
  const [searchTerm, setSearchTerm] = useState("");

  // Hook CRUD para produtos
  const { useList } = useCrud<Product>("/products");

  // Query para listar produtos
  const {
    data: productsResponse,
    isLoading: productsLoading,
    error: productsError,
  } = useList({
    search: searchTerm,
    ...filters,
    page: 1,
    limit: 20,
  });

  const products = productsResponse?.data || [];
  const pagination = productsResponse?.pagination;

  // Debug logs
  console.log("🔍 ProductsPage: Debug info", {
    productsResponse,
    products,
    pagination,
    productsLoading,
    productsError,
    isAuthenticated,
    user,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // A busca já é reativa através do searchTerm
  };

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseFloat(price));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  // Se ainda está carregando a autenticação
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Se não estiver autenticado
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Package className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
            <CardTitle>Acesso Restrito</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Você precisa estar autenticado para acessar a página de produtos.
            </p>
            <Button asChild>
              <a href="/auth/login">Fazer Login</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  console.log(products);

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold">
            <Package className="h-8 w-8" />
            Produtos
          </h1>
          <p className="text-muted-foreground">
            Bem-vindo, {user?.firstName} {user?.lastName}!
          </p>
        </div>
        <Button variant="outline" onClick={() => logout()}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      {/* Busca */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Loading */}
      {productsLoading && (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}

      {/* Error */}
      {productsError && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>
            Erro ao carregar produtos:{" "}
            {(productsError as any)?.message || "Erro desconhecido"}
          </AlertDescription>
        </Alert>
      )}

      {/* Lista de produtos */}
      {!productsLoading && products.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="py-8 text-center">
              <Package className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
              <p className="text-muted-foreground">
                {searchTerm
                  ? "Nenhum produto encontrado para sua busca."
                  : "Nenhum produto cadastrado."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {product.additional_info.description}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    ID: {product.id}
                  </p>
                </div>
                <Badge variant={product.is_active ? "default" : "secondary"}>
                  {product.is_active ? "Ativo" : "Inativo"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Preço */}
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="text-lg font-semibold text-green-600">
                    {formatPrice(product.price)}
                  </span>
                </div>

                {/* Estoque */}
                <div className="flex items-center gap-2">
                  <Warehouse className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">
                    Estoque: {product.additional_info.total_stock_quantity}{" "}
                    unidades
                  </span>
                </div>

                {/* Vendas */}
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">
                    Vendido: {product.additional_info.total_sold_quantity}{" "}
                    unidades
                  </span>
                </div>

                {/* Detalhes do produto */}
                <div className="border-t pt-2">
                  <div className="text-muted-foreground grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="font-medium">Grupo:</span>{" "}
                      {product.additional_info.group}
                    </div>
                    <div>
                      <span className="font-medium">Categoria:</span>{" "}
                      {product.additional_info.category}
                    </div>
                    <div>
                      <span className="font-medium">Marca:</span>{" "}
                      {product.additional_info.brand}
                    </div>
                    <div>
                      <span className="font-medium">Cor:</span>{" "}
                      {product.additional_info.color}
                    </div>
                  </div>
                </div>

                {/* Data de criação */}
                <div className="text-muted-foreground text-xs">
                  Criado em: {formatDate(product.created_at)}
                </div>

                {/* Estatísticas de vendas */}
                {product.additional_info.daily_sales_average_last_30_days >
                  0 && (
                  <div className="bg-muted rounded p-2 text-xs">
                    <div className="font-medium">Últimos 30 dias:</div>
                    <div>
                      Média diária:{" "}
                      {product.additional_info.daily_sales_average_last_30_days.toFixed(
                        1
                      )}{" "}
                      un/dia
                    </div>
                    <div>
                      Total vendido:{" "}
                      {formatPrice(
                        product.additional_info.total_sold_value.toString()
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Paginação */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" disabled={!pagination.hasPrev} size="sm">
              Anterior
            </Button>
            <span className="text-muted-foreground px-4 text-sm">
              Página {pagination.page} de {pagination.totalPages}
            </span>
            <Button variant="outline" disabled={!pagination.hasNext} size="sm">
              Próxima
            </Button>
          </div>
        </div>
      )}

      {/* Resumo */}
      {products.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Package className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                <div className="text-2xl font-bold">{products.length}</div>
                <div className="text-muted-foreground text-sm">Produtos</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Warehouse className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <div className="text-2xl font-bold">
                  {products.reduce(
                    (sum, p) => sum + p.additional_info.total_stock_quantity,
                    0
                  )}
                </div>
                <div className="text-muted-foreground text-sm">
                  Total em Estoque
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <TrendingUp className="mx-auto mb-2 h-8 w-8 text-purple-600" />
                <div className="text-2xl font-bold">
                  {products.reduce(
                    (sum, p) => sum + p.additional_info.total_sold_quantity,
                    0
                  )}
                </div>
                <div className="text-muted-foreground text-sm">
                  Total Vendido
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <DollarSign className="mx-auto mb-2 h-8 w-8 text-orange-600" />
                <div className="text-2xl font-bold">
                  {formatPrice(
                    products
                      .reduce(
                        (sum, p) => sum + p.additional_info.total_sold_value,
                        0
                      )
                      .toString()
                  )}
                </div>
                <div className="text-muted-foreground text-sm">
                  Valor Total Vendido
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
