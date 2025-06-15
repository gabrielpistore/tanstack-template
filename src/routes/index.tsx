import { LandingLayout } from "@/components/layouts/landing-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <LandingLayout>
      <HomePage />
    </LandingLayout>
  ),
});

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center">
        <Badge variant="secondary" className="mb-4">
          🚀 New Release Available
        </Badge>
        <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Our Platform
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
          Build amazing applications with our modern stack. TanStack Router +
          React + TypeScript + Tailwind CSS + shadcn/ui components.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-foreground text-3xl font-bold">Features</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Everything you need to build modern web applications
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mx-auto h-12 w-12 rounded-md p-3">
                <svg
                  className="text-primary h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <CardTitle>Fast Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built with modern tools for optimal performance and user
                experience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-primary/10 mx-auto h-12 w-12 rounded-md p-3">
                <svg
                  className="text-primary h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <CardTitle>Type Safe</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Full TypeScript support with end-to-end type safety.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-primary/10 mx-auto h-12 w-12 rounded-md p-3">
                <svg
                  className="text-primary h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </div>
              <CardTitle>Modern Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Latest technologies and best practices for modern development.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to get started?</h2>
            <p className="mb-8 text-lg opacity-90">
              Join thousands of developers building amazing applications.
            </p>
            <Button variant="secondary" size="lg">
              Start Building Today
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
