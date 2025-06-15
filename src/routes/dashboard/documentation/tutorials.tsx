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
  Clock,
  Code,
  Database,
  Play,
  Search,
  Star,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/documentation/tutorials")({
  component: TutorialsPage,
});

function TutorialsPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Documentation", href: "/dashboard/documentation" },
    { title: "Tutorials" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <BookOpen className="h-8 w-8 text-blue-500" />
              Tutorials
            </h1>
            <p className="text-muted-foreground">
              Step-by-step guides to help you master our platform.
            </p>
          </div>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Start Learning Path
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
              <Input placeholder="Search tutorials..." className="pl-10" />
            </div>
          </CardContent>
        </Card>

        {/* Tutorial Categories */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Getting Started",
              count: 8,
              icon: Play,
              color: "bg-green-500",
            },
            {
              name: "API Integration",
              count: 12,
              icon: Code,
              color: "bg-blue-500",
            },
            {
              name: "Advanced Features",
              count: 6,
              icon: Zap,
              color: "bg-purple-500",
            },
            {
              name: "Team Collaboration",
              count: 4,
              icon: Users,
              color: "bg-orange-500",
            },
          ].map((category) => (
            <Card
              key={category.name}
              className="cursor-pointer transition-shadow hover:shadow-md"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {category.name}
                </CardTitle>
                <category.icon className="text-muted-foreground h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{category.count}</div>
                <p className="text-muted-foreground text-xs">
                  tutorials available
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Tutorials */}
        <Card>
          <CardHeader>
            <CardTitle>Featured Tutorials</CardTitle>
            <CardDescription>
              Popular and recommended tutorials to get you started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Building Your First AI App",
                  description:
                    "Complete guide to creating an AI-powered application from scratch",
                  duration: "45 min",
                  difficulty: "Beginner",
                  rating: 4.9,
                  students: 1247,
                  category: "Getting Started",
                },
                {
                  title: "Advanced API Authentication",
                  description:
                    "Secure your API calls with advanced authentication methods",
                  duration: "30 min",
                  difficulty: "Intermediate",
                  rating: 4.8,
                  students: 892,
                  category: "API Integration",
                },
                {
                  title: "Real-time Data Processing",
                  description: "Process and analyze data streams in real-time",
                  duration: "60 min",
                  difficulty: "Advanced",
                  rating: 4.7,
                  students: 634,
                  category: "Advanced Features",
                },
                {
                  title: "Team Workspace Setup",
                  description:
                    "Configure and manage team workspaces effectively",
                  duration: "25 min",
                  difficulty: "Beginner",
                  rating: 4.6,
                  students: 1156,
                  category: "Team Collaboration",
                },
                {
                  title: "Custom Model Training",
                  description: "Train and deploy your own custom AI models",
                  duration: "90 min",
                  difficulty: "Advanced",
                  rating: 4.9,
                  students: 423,
                  category: "Advanced Features",
                },
                {
                  title: "Playground Mastery",
                  description:
                    "Master the playground environment for rapid prototyping",
                  duration: "35 min",
                  difficulty: "Intermediate",
                  rating: 4.8,
                  students: 987,
                  category: "Getting Started",
                },
              ].map((tutorial, index) => (
                <Card
                  key={index}
                  className="cursor-pointer transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg leading-tight">
                          {tutorial.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {tutorial.category}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        <span className="text-xs font-medium">
                          {tutorial.rating}
                        </span>
                      </div>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {tutorial.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="text-muted-foreground h-3 w-3" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <Badge
                          variant={
                            tutorial.difficulty === "Beginner"
                              ? "secondary"
                              : tutorial.difficulty === "Intermediate"
                                ? "default"
                                : "destructive"
                          }
                          className="text-xs"
                        >
                          {tutorial.difficulty}
                        </Badge>
                      </div>
                      <div className="text-muted-foreground flex items-center justify-between text-xs">
                        <span>
                          {tutorial.students.toLocaleString()} students
                        </span>
                      </div>
                      <Button size="sm" className="w-full">
                        <Play className="mr-2 h-3 w-3" />
                        Start Tutorial
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Paths */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Paths</CardTitle>
            <CardDescription>
              Structured learning journeys for different skill levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Complete Beginner Path",
                  description:
                    "Start from zero and build your first AI application",
                  tutorials: 8,
                  duration: "4 hours",
                  level: "Beginner",
                  progress: 0,
                },
                {
                  title: "API Developer Path",
                  description: "Master API integration and advanced features",
                  tutorials: 12,
                  duration: "6 hours",
                  level: "Intermediate",
                  progress: 25,
                },
                {
                  title: "AI Engineer Path",
                  description:
                    "Advanced model training and deployment techniques",
                  tutorials: 15,
                  duration: "10 hours",
                  level: "Advanced",
                  progress: 60,
                },
                {
                  title: "Team Lead Path",
                  description: "Manage teams and collaborate effectively",
                  tutorials: 6,
                  duration: "3 hours",
                  level: "Intermediate",
                  progress: 0,
                },
              ].map((path, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                      <BookOpen className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">{path.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {path.description}
                      </p>
                      <div className="text-muted-foreground mt-1 flex items-center space-x-4 text-xs">
                        <span>{path.tutorials} tutorials</span>
                        <span>•</span>
                        <span>{path.duration}</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs">
                          {path.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {path.progress > 0 && (
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {path.progress}% complete
                        </p>
                        <div className="bg-secondary h-2 w-20 rounded-full">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${path.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    <Button variant={path.progress > 0 ? "default" : "outline"}>
                      {path.progress > 0 ? "Continue" : "Start Path"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Reference */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Reference</CardTitle>
            <CardDescription>Essential guides and cheat sheets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "API Endpoints",
                  icon: Code,
                  description: "Complete API reference",
                },
                {
                  title: "Error Codes",
                  icon: Zap,
                  description: "Common errors and solutions",
                },
                {
                  title: "Best Practices",
                  icon: Star,
                  description: "Recommended patterns",
                },
                {
                  title: "Troubleshooting",
                  icon: Database,
                  description: "Debug common issues",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="cursor-pointer transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <item.icon className="text-primary h-5 w-5" />
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" className="w-full">
                      View Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
