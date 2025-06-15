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
import { Code, Filter, Heart, Search, Star } from "lucide-react";

export const Route = createFileRoute("/dashboard/playground/starred")({
  component: PlaygroundStarredPage,
});

function PlaygroundStarredPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Playground", href: "/dashboard/playground" },
    { title: "Starred" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Star className="h-8 w-8 text-yellow-500" />
              Starred Playgrounds
            </h1>
            <p className="text-muted-foreground">
              Your favorite experiments and code snippets for quick access.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">Sort by Date</Button>
          </div>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
              <Input
                placeholder="Search starred playgrounds..."
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Starred
              </CardTitle>
              <Star className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +3
                </Badge>{" "}
                this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Most Used</CardTitle>
              <Heart className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-muted-foreground text-xs">
                Accessed this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Languages</CardTitle>
              <Code className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-muted-foreground text-xs">
                Different languages
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Starred Items */}
        <Card>
          <CardHeader>
            <CardTitle>Your Starred Playgrounds</CardTitle>
            <CardDescription>
              Quick access to your favorite experiments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "React Hooks Playground",
                  description: "Testing custom hooks and state management",
                  language: "TypeScript",
                  lastAccessed: "2 hours ago",
                  stars: 5,
                  category: "Frontend",
                },
                {
                  name: "API Testing Suite",
                  description: "Complete API testing with mock data",
                  language: "JavaScript",
                  lastAccessed: "1 day ago",
                  stars: 4,
                  category: "Backend",
                },
                {
                  name: "CSS Grid Layouts",
                  description: "Advanced grid layouts and responsive design",
                  language: "CSS",
                  lastAccessed: "2 days ago",
                  stars: 5,
                  category: "Styling",
                },
                {
                  name: "Python Data Analysis",
                  description: "Data processing and visualization scripts",
                  language: "Python",
                  lastAccessed: "3 days ago",
                  stars: 4,
                  category: "Data Science",
                },
                {
                  name: "SQL Query Optimizer",
                  description: "Complex queries and performance testing",
                  language: "SQL",
                  lastAccessed: "1 week ago",
                  stars: 3,
                  category: "Database",
                },
                {
                  name: "Node.js Microservice",
                  description: "Microservice architecture patterns",
                  language: "JavaScript",
                  lastAccessed: "1 week ago",
                  stars: 5,
                  category: "Backend",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="cursor-pointer transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <Code className="text-primary h-5 w-5" />
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < item.stars ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="outline">{item.language}</Badge>
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                      <div className="text-muted-foreground flex items-center justify-between text-sm">
                        <span>Last accessed: {item.lastAccessed}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          Open
                        </Button>
                        <Button size="sm" variant="outline">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Browse by Category</CardTitle>
            <CardDescription>
              Find starred playgrounds by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Frontend", count: 8, color: "bg-blue-500" },
                { name: "Backend", count: 6, color: "bg-green-500" },
                { name: "Data Science", count: 4, color: "bg-purple-500" },
                { name: "Database", count: 3, color: "bg-orange-500" },
                { name: "Styling", count: 2, color: "bg-pink-500" },
                { name: "DevOps", count: 1, color: "bg-indigo-500" },
              ].map((category) => (
                <div
                  key={category.name}
                  className="hover:bg-muted/50 flex cursor-pointer items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`h-3 w-3 rounded-full ${category.color}`}
                    ></div>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <Badge variant="secondary">{category.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
