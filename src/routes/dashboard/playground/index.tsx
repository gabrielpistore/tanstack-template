"use client";

import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { createFileRoute } from "@tanstack/react-router";
import { Code, Play, Terminal, TrendingUp, Zap } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

// Usage statistics data
const usageData = [
  { day: "Mon", executions: 45, errors: 3 },
  { day: "Tue", executions: 52, errors: 1 },
  { day: "Wed", executions: 38, errors: 5 },
  { day: "Thu", executions: 67, errors: 2 },
  { day: "Fri", executions: 73, errors: 4 },
  { day: "Sat", executions: 29, errors: 1 },
  { day: "Sun", executions: 34, errors: 2 },
];

const usageConfig = {
  executions: {
    label: "Executions",
    color: "var(--chart-1)",
  },
  errors: {
    label: "Errors",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

// Language usage data
const languageData = [
  { language: "TypeScript", usage: 45 },
  { language: "JavaScript", usage: 32 },
  { language: "Python", usage: 28 },
  { language: "CSS", usage: 18 },
  { language: "SQL", usage: 12 },
  { language: "HTML", usage: 8 },
];

const languageConfig = {
  usage: {
    label: "Usage Count",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export const Route = createFileRoute("/dashboard/playground/")({
  component: PlaygroundPage,
});

function PlaygroundPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Playground" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Playground</h1>
            <p className="text-muted-foreground">
              Experiment with code, test ideas, and build prototypes in a safe
              environment.
            </p>
          </div>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            New Playground
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Code Editor</CardTitle>
              <Code className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-muted-foreground text-xs">Active sessions</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Terminal</CardTitle>
              <Terminal className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-muted-foreground text-xs">Running processes</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quick Tests</CardTitle>
              <Zap className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-muted-foreground text-xs">
                Tests executed today
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Experiments</CardTitle>
              <Play className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-muted-foreground text-xs">Total experiments</p>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Weekly Usage Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Usage Statistics</CardTitle>
              <CardDescription>
                Code executions and errors over the past week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={usageConfig}>
                <BarChart accessibilityLayer data={usageData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar
                    dataKey="executions"
                    fill="var(--color-executions)"
                    radius={4}
                  />
                  <Bar dataKey="errors" fill="var(--color-errors)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 leading-none font-medium">
                Peak usage on Friday with 73 executions{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground leading-none">
                Error rate decreased by 40% this week
              </div>
            </CardFooter>
          </Card>

          {/* Language Usage Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Language Usage</CardTitle>
              <CardDescription>
                Most popular programming languages in your playgrounds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={languageConfig}>
                <BarChart
                  accessibilityLayer
                  data={languageData}
                  layout="horizontal"
                  margin={{
                    left: 80,
                  }}
                >
                  <CartesianGrid horizontal={false} />
                  <XAxis type="number" dataKey="usage" hide />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="usage" fill="var(--color-usage)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 leading-none font-medium">
                TypeScript leads with 45 experiments{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground leading-none">
                Total of 143 experiments across all languages
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Recent Playgrounds */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Playgrounds</CardTitle>
            <CardDescription>
              Your latest experiments and code snippets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "React Component Test",
                  language: "TypeScript",
                  lastModified: "2 hours ago",
                  status: "Running",
                },
                {
                  name: "API Integration",
                  language: "JavaScript",
                  lastModified: "1 day ago",
                  status: "Stopped",
                },
                {
                  name: "CSS Animation Demo",
                  language: "CSS",
                  lastModified: "3 days ago",
                  status: "Completed",
                },
                {
                  name: "Database Query Test",
                  language: "SQL",
                  lastModified: "1 week ago",
                  status: "Error",
                },
              ].map((playground, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <Code className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{playground.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {playground.language} • {playground.lastModified}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        playground.status === "Running"
                          ? "default"
                          : playground.status === "Completed"
                            ? "secondary"
                            : playground.status === "Error"
                              ? "destructive"
                              : "outline"
                      }
                    >
                      {playground.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      Open
                    </Button>
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
