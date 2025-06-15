import { ThemeProvider } from "@/components/theme";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="tanstack-ui-theme">
      <div className="bg-background text-foreground min-h-screen">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
