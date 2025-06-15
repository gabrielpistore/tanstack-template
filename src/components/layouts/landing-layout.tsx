import { ThemeToggle } from "@/components/theme";
import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface LandingLayoutProps {
  children?: ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* Header/Navbar */}
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[97%] items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-foreground text-xl font-bold">
              Logo
            </Link>
          </div>

          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              to="/"
              className="hover:text-primary text-foreground text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-primary text-foreground text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary text-foreground text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-primary text-foreground text-sm font-medium transition-colors"
            >
              Dashboard
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/auth/login"
              className="hover:text-primary text-foreground text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors"
            >
              Sign Up
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children || <Outlet />}</main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-foreground text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary text-muted-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-primary text-muted-foreground"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-foreground text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/features"
                    className="hover:text-primary text-muted-foreground"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-primary text-muted-foreground"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-foreground text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/help"
                    className="hover:text-primary text-muted-foreground"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary text-muted-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-foreground text-lg font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-primary text-muted-foreground"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-primary text-muted-foreground"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
