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
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Code,
  ExternalLink,
  FileText,
  Search,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/documentation/")({
  component: DocumentationPage,
});

function DocumentationPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Documentation" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <BookOpen className="h-8 w-8 text-blue-500" />
              Documentation
            </h1>
            <p className="text-muted-foreground">
              Comprehensive guides, API references, and tutorials to help you
              get started.
            </p>
          </div>
          <Button>
            <ExternalLink className="mr-2 h-4 w-4" />
            View Full Docs
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
              <Input
                placeholder="Search documentation..."
                className="h-12 pl-10 text-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Get up and running in minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Introduction",
                  description: "Learn the basics and core concepts",
                  icon: BookOpen,
                  color: "text-blue-500",
                  href: "/documentation/introduction",
                },
                {
                  title: "Get Started",
                  description: "Step-by-step setup guide",
                  icon: Code,
                  color: "text-green-500",
                  href: "/documentation/get-started",
                },
                {
                  title: "Tutorials",
                  description: "Hands-on learning experiences",
                  icon: Video,
                  color: "text-purple-500",
                  href: "/documentation/tutorials",
                },
                {
                  title: "Changelog",
                  description: "Latest updates and releases",
                  icon: FileText,
                  color: "text-orange-500",
                  href: "/documentation/changelog",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="cursor-pointer transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Articles */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Articles</CardTitle>
            <CardDescription>Most viewed documentation pages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Authentication & Authorization",
                  description:
                    "Learn how to implement secure authentication in your applications",
                  category: "Security",
                  readTime: "8 min read",
                  views: "12.5K",
                  updated: "2 days ago",
                },
                {
                  title: "API Rate Limiting",
                  description:
                    "Understanding and implementing rate limiting for your APIs",
                  category: "API",
                  readTime: "5 min read",
                  views: "8.2K",
                  updated: "1 week ago",
                },
                {
                  title: "Database Optimization",
                  description:
                    "Best practices for optimizing database performance",
                  category: "Database",
                  readTime: "12 min read",
                  views: "6.8K",
                  updated: "3 days ago",
                },
                {
                  title: "Deployment Strategies",
                  description:
                    "Different approaches to deploying your applications",
                  category: "DevOps",
                  readTime: "10 min read",
                  views: "5.4K",
                  updated: "1 day ago",
                },
                {
                  title: "Error Handling Best Practices",
                  description:
                    "How to handle errors gracefully in your applications",
                  category: "Development",
                  readTime: "7 min read",
                  views: "4.9K",
                  updated: "5 days ago",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="hover:bg-muted/50 flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors"
                >
                  <div className="flex-1">
                    <div className="mb-1 flex items-center space-x-2">
                      <h3 className="font-medium">{article.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2 text-sm">
                      {article.description}
                    </p>
                    <div className="text-muted-foreground flex items-center space-x-4 text-xs">
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.views} views</span>
                      <span>•</span>
                      <span>Updated {article.updated}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>
                Complete API documentation and examples
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Authentication", endpoints: 8 },
                  { name: "Users", endpoints: 12 },
                  { name: "Projects", endpoints: 15 },
                  { name: "Models", endpoints: 10 },
                  { name: "Webhooks", endpoints: 6 },
                ].map((api) => (
                  <div
                    key={api.name}
                    className="hover:bg-muted/50 flex cursor-pointer items-center justify-between rounded p-2"
                  >
                    <span className="font-medium">{api.name}</span>
                    <Badge variant="secondary">{api.endpoints} endpoints</Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                View Full API Reference
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SDK & Libraries</CardTitle>
              <CardDescription>
                Official SDKs and community libraries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    name: "JavaScript SDK",
                    version: "v2.1.0",
                    downloads: "45K",
                  },
                  { name: "Python SDK", version: "v1.8.2", downloads: "32K" },
                  {
                    name: "React Components",
                    version: "v3.0.1",
                    downloads: "28K",
                  },
                  {
                    name: "Vue.js Plugin",
                    version: "v1.5.0",
                    downloads: "15K",
                  },
                  { name: "CLI Tools", version: "v2.3.1", downloads: "12K" },
                ].map((sdk) => (
                  <div
                    key={sdk.name}
                    className="hover:bg-muted/50 flex cursor-pointer items-center justify-between rounded p-2"
                  >
                    <div>
                      <span className="font-medium">{sdk.name}</span>
                      <p className="text-muted-foreground text-xs">
                        {sdk.version}
                      </p>
                    </div>
                    <Badge variant="secondary">{sdk.downloads}</Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Browse All SDKs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Help & Support */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Get support from our community and team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border p-4 text-center">
                <BookOpen className="mx-auto mb-2 h-8 w-8 text-blue-500" />
                <h3 className="mb-1 font-medium">Documentation</h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Comprehensive guides and tutorials
                </p>
                <Button variant="outline" size="sm">
                  Browse Docs
                </Button>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <Video className="mx-auto mb-2 h-8 w-8 text-green-500" />
                <h3 className="mb-1 font-medium">Video Tutorials</h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Step-by-step video guides
                </p>
                <Button variant="outline" size="sm">
                  Watch Videos
                </Button>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <ExternalLink className="mx-auto mb-2 h-8 w-8 text-purple-500" />
                <h3 className="mb-1 font-medium">Community</h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Join our developer community
                </p>
                <Button variant="outline" size="sm">
                  Join Discord
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
