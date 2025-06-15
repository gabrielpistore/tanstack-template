import { ThemeToggle } from "@/components/theme";
import { Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children?: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* Theme toggle in top right corner */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <main className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 p-6">
          {children || <Outlet />}
        </div>
      </main>
    </div>
  );
}
