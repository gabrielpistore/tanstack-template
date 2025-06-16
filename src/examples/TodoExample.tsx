import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useCrud } from "@/hooks/useCrud";
import { Loader2, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";

// Definindo o tipo Todo
interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export function TodoExample() {
  const { user, isAuthenticated, login, logout, isLoggingIn } = useAuth();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  // Usando o hook CRUD para todos
  const { useList, useCreate, useUpdate, useDelete } = useCrud<Todo>("/todos");

  // Queries e mutations
  const { data: todosResponse, isLoading, error } = useList();
  const createMutation = useCreate();
  const updateMutation = useUpdate();
  const deleteMutation = useDelete();

  const todos = todosResponse?.data || [];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(loginForm);
  };

  const handleCreateTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    createMutation.mutate(
      {
        data: {
          title: newTodo.title,
          description: newTodo.description,
          completed: false,
        },
      },
      {
        onSuccess: () => {
          setNewTodo({ title: "", description: "" });
        },
      }
    );
  };

  const handleToggleTodo = (todo: Todo) => {
    updateMutation.mutate({
      id: todo.id,
      data: { completed: !todo.completed },
    });
  };

  const handleDeleteTodo = (id: number) => {
    deleteMutation.mutate({ id });
  };

  // Se não estiver autenticado, mostrar form de login
  if (!isAuthenticated) {
    return (
      <div className="mx-auto mt-8 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                required
              />
              <Button type="submit" className="w-full" disabled={isLoggingIn}>
                {isLoggingIn && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Todo App</h1>
          <p className="text-muted-foreground">
            Bem-vindo, {user?.firstName} {user?.lastName}!
          </p>
        </div>
        <Button variant="outline" onClick={() => logout()}>
          Logout
        </Button>
      </div>

      {/* Criar novo todo */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Novo Todo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateTodo} className="space-y-4">
            <Input
              placeholder="Título do todo"
              value={newTodo.title}
              onChange={(e) =>
                setNewTodo((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />
            <Input
              placeholder="Descrição (opcional)"
              value={newTodo.description}
              onChange={(e) =>
                setNewTodo((prev) => ({ ...prev, description: e.target.value }))
              }
            />
            <Button
              type="submit"
              disabled={createMutation.isPending || !newTodo.title.trim()}
            >
              {createMutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Criar Todo
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Lista de todos */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Seus Todos</h2>

        {isLoading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        )}

        {error && (
          <Card className="border-red-200">
            <CardContent className="pt-6">
              <p className="text-red-600">
                Erro ao carregar todos:{" "}
                {(error as any)?.message || "Erro desconhecido"}
              </p>
            </CardContent>
          </Card>
        )}

        {todos.length === 0 && !isLoading && (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center">
                Nenhum todo encontrado. Crie seu primeiro todo acima!
              </p>
            </CardContent>
          </Card>
        )}

        {todos.map((todo) => (
          <Card key={todo.id} className={todo.completed ? "opacity-75" : ""}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3
                      className={`font-medium ${todo.completed ? "text-muted-foreground line-through" : ""}`}
                    >
                      {todo.title}
                    </h3>
                    <Badge variant={todo.completed ? "secondary" : "default"}>
                      {todo.completed ? "Concluído" : "Pendente"}
                    </Badge>
                  </div>
                  {todo.description && (
                    <p
                      className={`text-sm ${todo.completed ? "text-muted-foreground line-through" : "text-muted-foreground"}`}
                    >
                      {todo.description}
                    </p>
                  )}
                  <p className="text-muted-foreground mt-2 text-xs">
                    Criado em:{" "}
                    {new Date(todo.createdAt).toLocaleDateString("pt-BR")}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleTodo(todo)}
                    disabled={updateMutation.isPending}
                  >
                    {updateMutation.isPending && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {todo.completed ? "Reabrir" : "Concluir"}
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteTodo(todo.id)}
                    disabled={deleteMutation.isPending}
                  >
                    {deleteMutation.isPending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Paginação (se houver) */}
      {todosResponse?.pagination && (
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              disabled={!todosResponse.pagination.hasPrev}
            >
              Anterior
            </Button>
            <span className="text-muted-foreground text-sm">
              Página {todosResponse.pagination.page} de{" "}
              {todosResponse.pagination.totalPages}
            </span>
            <Button
              variant="outline"
              disabled={!todosResponse.pagination.hasNext}
            >
              Próxima
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
