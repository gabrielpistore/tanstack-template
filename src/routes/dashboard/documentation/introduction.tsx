import { DashboardLayout } from "@/components/layouts/dashboard-layout";
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
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Code,
  Rocket,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/documentation/introduction")({
  component: DocumentationIntroductionPage,
});

function DocumentationIntroductionPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Documentation", href: "/dashboard/documentation" },
    { title: "Introduction" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <BookOpen className="h-8 w-8 text-blue-500" />
              Introduction
            </h1>
            <p className="text-muted-foreground">
              Welcome to our platform! Get started with the basics and learn how
              to make the most of our tools.
            </p>
          </div>
          <Button>
            <Rocket className="mr-2 h-4 w-4" />
            Quick Start Guide
          </Button>
        </div>

        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-blue-500" />
              Welcome to the Platform
            </CardTitle>
            <CardDescription>
              Your comprehensive solution for AI-powered development and data
              analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Our platform combines powerful AI models, intuitive development
              tools, and comprehensive analytics to help you build, test, and
              deploy intelligent applications with ease. Whether you're a
              developer, data scientist, or business analyst, we provide the
              tools you need to succeed.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start space-x-3 rounded-lg border p-4">
                <Code className="mt-1 h-6 w-6 text-green-500" />
                <div>
                  <h4 className="font-medium">Development Tools</h4>
                  <p className="text-muted-foreground text-sm">
                    Interactive playground, code editor, and testing environment
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 rounded-lg border p-4">
                <Zap className="mt-1 h-6 w-6 text-yellow-500" />
                <div>
                  <h4 className="font-medium">AI Models</h4>
                  <p className="text-muted-foreground text-sm">
                    Pre-trained models for various tasks and custom model
                    training
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 rounded-lg border p-4">
                <BookOpen className="mt-1 h-6 w-6 text-blue-500" />
                <div>
                  <h4 className="font-medium">Documentation</h4>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive guides, tutorials, and API reference
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Follow these steps to begin your journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Set up your account",
                  description:
                    "Complete your profile and configure your preferences",
                  completed: true,
                  action: "Go to Settings",
                },
                {
                  step: 2,
                  title: "Explore the Playground",
                  description:
                    "Try out our interactive development environment",
                  completed: false,
                  action: "Open Playground",
                },
                {
                  step: 3,
                  title: "Choose your first model",
                  description:
                    "Browse our collection of AI models and select one to start with",
                  completed: false,
                  action: "Browse Models",
                },
                {
                  step: 4,
                  title: "Create your first project",
                  description:
                    "Set up a project to organize your work and collaborate with others",
                  completed: false,
                  action: "Create Project",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center space-x-4 rounded-lg border p-4"
                >
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                    {item.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <span className="text-primary text-sm font-medium">
                        {item.step}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                  <Button
                    variant={item.completed ? "outline" : "default"}
                    size="sm"
                  >
                    {item.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>
              Discover what makes our platform powerful
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg font-medium">For Developers</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="font-medium">Interactive Playground</p>
                      <p className="text-muted-foreground text-sm">
                        Test code, experiment with APIs, and prototype quickly
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="font-medium">Version Control Integration</p>
                      <p className="text-muted-foreground text-sm">
                        Connect with Git repositories and manage code versions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="font-medium">Collaborative Development</p>
                      <p className="text-muted-foreground text-sm">
                        Work together with team members in real-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium">For Data Scientists</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-medium">Pre-trained Models</p>
                      <p className="text-muted-foreground text-sm">
                        Access state-of-the-art models for various tasks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-medium">Data Analysis Tools</p>
                      <p className="text-muted-foreground text-sm">
                        Visualize, analyze, and process your datasets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-medium">Model Training</p>
                      <p className="text-muted-foreground text-sm">
                        Train custom models with your own data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>
              Jump to the most important sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "API Reference",
                  description: "Complete API documentation",
                  badge: "Essential",
                },
                {
                  title: "Tutorials",
                  description: "Step-by-step guides",
                  badge: "Popular",
                },
                {
                  title: "Examples",
                  description: "Code samples and demos",
                  badge: "Helpful",
                },
                {
                  title: "FAQ",
                  description: "Frequently asked questions",
                  badge: "Support",
                },
              ].map((link) => (
                <Card
                  key={link.title}
                  className="cursor-pointer transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{link.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {link.badge}
                      </Badge>
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              We're here to support you every step of the way
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="outline" className="flex-1">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Documentation
              </Button>
              <Button variant="outline" className="flex-1">
                <Code className="mr-2 h-4 w-4" />
                View Examples
              </Button>
              <Button className="flex-1">Contact Support</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
