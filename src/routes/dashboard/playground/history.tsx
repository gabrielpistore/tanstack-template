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
  Clock,
  Code,
  Filter,
  History,
  Play,
  Search,
  Trash2,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/playground/history")({
  component: PlaygroundHistoryPage,
});

function PlaygroundHistoryPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Playground", href: "/dashboard/playground" },
    { title: "History" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <History className="h-8 w-8 text-purple-500" />
              Execution History
            </h1>
            <p className="text-muted-foreground">
              View and manage your playground execution history and past
              experiments.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear History
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                <Input
                  placeholder="Search execution history..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  All Languages
                </Button>
                <Button variant="outline" size="sm">
                  Last 7 Days
                </Button>
                <Button variant="outline" size="sm">
                  Successful Only
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Executions
              </CardTitle>
              <Play className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +89
                </Badge>{" "}
                this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>
              <Clock className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +2.1%
                </Badge>{" "}
                improvement
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Duration
              </CardTitle>
              <Clock className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4s</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="outline" className="text-xs">
                  -0.3s
                </Badge>{" "}
                faster
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Languages Used
              </CardTitle>
              <Code className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-muted-foreground text-xs">
                Different languages
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Execution History */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Executions</CardTitle>
            <CardDescription>
              Your latest playground runs and experiments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "exec_001",
                  name: "React Component Test",
                  language: "TypeScript",
                  status: "Success",
                  duration: "1.2s",
                  timestamp: "2 minutes ago",
                  output: "Component rendered successfully",
                  lines: 45,
                },
                {
                  id: "exec_002",
                  name: "API Integration Test",
                  language: "JavaScript",
                  status: "Success",
                  duration: "3.8s",
                  timestamp: "15 minutes ago",
                  output: "API response: 200 OK",
                  lines: 78,
                },
                {
                  id: "exec_003",
                  name: "Database Query",
                  language: "SQL",
                  status: "Error",
                  duration: "0.5s",
                  timestamp: "32 minutes ago",
                  output: "Syntax error: missing semicolon",
                  lines: 12,
                },
                {
                  id: "exec_004",
                  name: "Python Data Analysis",
                  language: "Python",
                  status: "Success",
                  duration: "5.2s",
                  timestamp: "1 hour ago",
                  output: "Analysis complete: 1000 records processed",
                  lines: 156,
                },
                {
                  id: "exec_005",
                  name: "CSS Animation Demo",
                  language: "CSS",
                  status: "Success",
                  duration: "0.8s",
                  timestamp: "2 hours ago",
                  output: "Animation compiled successfully",
                  lines: 34,
                },
                {
                  id: "exec_006",
                  name: "Node.js Server Test",
                  language: "JavaScript",
                  status: "Success",
                  duration: "2.1s",
                  timestamp: "3 hours ago",
                  output: "Server started on port 3000",
                  lines: 89,
                },
              ].map((execution) => (
                <div
                  key={execution.id}
                  className="hover:bg-muted/50 flex items-center justify-between rounded-lg border p-4 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        execution.status === "Success"
                          ? "bg-green-500/10"
                          : "bg-red-500/10"
                      }`}
                    >
                      <Code
                        className={`h-5 w-5 ${
                          execution.status === "Success"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{execution.name}</p>
                      <div className="text-muted-foreground flex items-center space-x-4 text-sm">
                        <span>{execution.language}</span>
                        <span>•</span>
                        <span>{execution.lines} lines</span>
                        <span>•</span>
                        <span>{execution.duration}</span>
                        <span>•</span>
                        <span>{execution.timestamp}</span>
                      </div>
                      <p className="text-muted-foreground mt-1 text-xs">
                        {execution.output}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        execution.status === "Success"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {execution.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Code
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Language Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Language Usage</CardTitle>
            <CardDescription>
              Distribution of programming languages in your history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  language: "JavaScript",
                  count: 342,
                  percentage: 35,
                  color: "bg-yellow-500",
                },
                {
                  language: "TypeScript",
                  count: 289,
                  percentage: 28,
                  color: "bg-blue-500",
                },
                {
                  language: "Python",
                  count: 156,
                  percentage: 18,
                  color: "bg-green-500",
                },
                {
                  language: "SQL",
                  count: 98,
                  percentage: 12,
                  color: "bg-purple-500",
                },
                {
                  language: "CSS",
                  count: 45,
                  percentage: 5,
                  color: "bg-pink-500",
                },
                {
                  language: "Other",
                  count: 23,
                  percentage: 2,
                  color: "bg-gray-500",
                },
              ].map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center space-x-4"
                >
                  <div className="w-16 text-sm font-medium">
                    {lang.language}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">
                        {lang.count} executions
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className="bg-secondary h-2 w-full rounded-full">
                      <div
                        className={`${lang.color} h-2 rounded-full transition-all`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
