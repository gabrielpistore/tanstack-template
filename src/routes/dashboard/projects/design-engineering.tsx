"use client";

import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Layers,
  Palette,
  Target,
  Zap,
} from "lucide-react";
import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
} from "recharts";

import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Chart data for development velocity
const velocityData = [
  { week: "Week 1", features: 12, bugs: 8, refactor: 5 },
  { week: "Week 2", features: 15, bugs: 6, refactor: 8 },
  { week: "Week 3", features: 18, bugs: 4, refactor: 12 },
  { week: "Week 4", features: 22, bugs: 3, refactor: 15 },
  { week: "Week 5", features: 19, bugs: 5, refactor: 10 },
  { week: "Week 6", features: 25, bugs: 2, refactor: 18 },
];

const velocityConfig = {
  features: {
    label: "Features",
    color: "var(--chart-1)",
  },
  bugs: {
    label: "Bug Fixes",
    color: "var(--chart-2)",
  },
  refactor: {
    label: "Refactoring",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

// Chart data for code quality metrics
const qualityData = [
  { date: "2024-01-01", coverage: 78, complexity: 85, maintainability: 82 },
  { date: "2024-01-15", coverage: 81, complexity: 87, maintainability: 85 },
  { date: "2024-02-01", coverage: 83, complexity: 89, maintainability: 88 },
  { date: "2024-02-15", coverage: 86, complexity: 91, maintainability: 90 },
  { date: "2024-03-01", coverage: 88, complexity: 93, maintainability: 92 },
  { date: "2024-03-15", coverage: 91, complexity: 95, maintainability: 94 },
];

const qualityConfig = {
  coverage: {
    label: "Test Coverage",
    color: "var(--chart-1)",
  },
  complexity: {
    label: "Code Quality",
    color: "var(--chart-2)",
  },
  maintainability: {
    label: "Maintainability",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

// Performance metrics data
const performanceData = [
  { month: "Jan", loadTime: 1.2, bundleSize: 245 },
  { month: "Feb", loadTime: 1.1, bundleSize: 238 },
  { month: "Mar", loadTime: 0.9, bundleSize: 225 },
  { month: "Apr", loadTime: 0.8, bundleSize: 218 },
  { month: "May", loadTime: 0.7, bundleSize: 205 },
  { month: "Jun", loadTime: 0.6, bundleSize: 195 },
];

const performanceConfig = {
  loadTime: {
    label: "Load Time (s)",
    color: "var(--chart-1)",
  },
  bundleSize: {
    label: "Bundle Size (KB)",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    avatar: "/avatars/sarah.jpg",
    status: "online",
    contributions: 156,
  },
  {
    name: "Marcus Rodriguez",
    role: "Frontend Engineer",
    avatar: "/avatars/marcus.jpg",
    status: "online",
    contributions: 203,
  },
  {
    name: "Emily Watson",
    role: "UX Researcher",
    avatar: "/avatars/emily.jpg",
    status: "away",
    contributions: 89,
  },
  {
    name: "David Kim",
    role: "Design Systems",
    avatar: "/avatars/david.jpg",
    status: "online",
    contributions: 167,
  },
  {
    name: "Lisa Thompson",
    role: "Product Designer",
    avatar: "/avatars/lisa.jpg",
    status: "offline",
    contributions: 134,
  },
];

const recentTasks = [
  {
    id: 1,
    title: "Redesign user onboarding flow",
    status: "completed",
    assignee: "Sarah Chen",
    priority: "high",
    dueDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Implement dark mode toggle",
    status: "in-progress",
    assignee: "Marcus Rodriguez",
    priority: "medium",
    dueDate: "2024-01-20",
  },
  {
    id: 3,
    title: "Conduct usability testing",
    status: "pending",
    assignee: "Emily Watson",
    priority: "high",
    dueDate: "2024-01-25",
  },
  {
    id: 4,
    title: "Update design system tokens",
    status: "in-progress",
    assignee: "David Kim",
    priority: "low",
    dueDate: "2024-01-30",
  },
];

export const Route = createFileRoute("/dashboard/projects/design-engineering")({
  component: DesignEngineeringProject,
});

function DesignEngineeringProject() {
  const [timeRange, setTimeRange] = React.useState("6m");

  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Projects", href: "/dashboard/projects" },
    { title: "Design Engineering" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="flex-1 space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Design Engineering
            </h1>
            <p className="text-muted-foreground">
              Building beautiful and functional user experiences
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Active
            </Badge>
            <Button>View Repository</Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Components Built
              </CardTitle>
              <Layers className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-muted-foreground text-xs">
                +12 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Design Tokens
              </CardTitle>
              <Palette className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-muted-foreground text-xs">
                +5 new tokens added
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Test Coverage
              </CardTitle>
              <Target className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">91%</div>
              <p className="text-muted-foreground text-xs">
                +3% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Performance Score
              </CardTitle>
              <Zap className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94</div>
              <p className="text-muted-foreground text-xs">Lighthouse score</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Development Velocity Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Development Velocity</CardTitle>
                  <CardDescription>
                    Weekly development progress across different work types
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={velocityConfig}>
                    <BarChart accessibilityLayer data={velocityData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="week"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                      />
                      <Bar
                        dataKey="features"
                        fill="var(--color-features)"
                        radius={4}
                      />
                      <Bar dataKey="bugs" fill="var(--color-bugs)" radius={4} />
                      <Bar
                        dataKey="refactor"
                        fill="var(--color-refactor)"
                        radius={4}
                      />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>
                    Application performance over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={performanceConfig}>
                    <LineChart
                      accessibilityLayer
                      data={performanceData}
                      margin={{
                        left: 12,
                        right: 12,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                      />
                      <Line
                        dataKey="loadTime"
                        type="natural"
                        stroke="var(--color-loadTime)"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Project Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Project Milestones</CardTitle>
                <CardDescription>
                  Current progress on major project deliverables
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Design System v2.0
                    </span>
                    <span className="text-muted-foreground text-sm">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Component Library
                    </span>
                    <span className="text-muted-foreground text-sm">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Documentation Site
                    </span>
                    <span className="text-muted-foreground text-sm">67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Accessibility Audit
                    </span>
                    <span className="text-muted-foreground text-sm">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Code Quality Analytics</h3>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3m">Last 3 months</SelectItem>
                  <SelectItem value="6m">Last 6 months</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Code Quality Trends</CardTitle>
                <CardDescription>
                  Tracking test coverage, code quality, and maintainability
                  metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={qualityConfig} className="h-[400px]">
                  <AreaChart data={qualityData}>
                    <defs>
                      <linearGradient
                        id="fillCoverage"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="var(--color-coverage)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-coverage)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient
                        id="fillComplexity"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="var(--color-complexity)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-complexity)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient
                        id="fillMaintainability"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="var(--color-maintainability)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-maintainability)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => {
                        const date = new Date(value);
                        return date.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                      }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Area
                      dataKey="coverage"
                      type="natural"
                      fill="url(#fillCoverage)"
                      stroke="var(--color-coverage)"
                      stackId="a"
                    />
                    <Area
                      dataKey="complexity"
                      type="natural"
                      fill="url(#fillComplexity)"
                      stroke="var(--color-complexity)"
                      stackId="b"
                    />
                    <Area
                      dataKey="maintainability"
                      type="natural"
                      fill="url(#fillMaintainability)"
                      stroke="var(--color-maintainability)"
                      stackId="c"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Design engineering team and their contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{member.name}</p>
                          <p className="text-muted-foreground text-sm">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {member.contributions}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            contributions
                          </p>
                        </div>
                        <Badge
                          variant={
                            member.status === "online" ? "default" : "secondary"
                          }
                          className={
                            member.status === "online"
                              ? "bg-green-100 text-green-800"
                              : member.status === "away"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }
                        >
                          {member.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Tasks</CardTitle>
                <CardDescription>
                  Latest development tasks and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="flex items-center space-x-4">
                        {task.status === "completed" ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : task.status === "in-progress" ? (
                          <Clock className="h-5 w-5 text-blue-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-gray-400" />
                        )}
                        <div>
                          <p className="font-medium">{task.title}</p>
                          <p className="text-muted-foreground text-sm">
                            Assigned to {task.assignee}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            task.priority === "high"
                              ? "destructive"
                              : task.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {task.priority}
                        </Badge>
                        <span className="text-muted-foreground text-sm">
                          {task.dueDate}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
