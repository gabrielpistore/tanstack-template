"use client";

import { createFileRoute } from "@tanstack/react-router";
import {
  DollarSign,
  MousePointer,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart as RechartsPieChart,
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
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Revenue data
const revenueData = [
  { month: "Jan", revenue: 45000, leads: 320, conversions: 48 },
  { month: "Feb", revenue: 52000, leads: 380, conversions: 62 },
  { month: "Mar", revenue: 48000, leads: 350, conversions: 55 },
  { month: "Apr", revenue: 61000, leads: 420, conversions: 73 },
  { month: "May", revenue: 58000, leads: 390, conversions: 68 },
  { month: "Jun", revenue: 67000, leads: 450, conversions: 82 },
];

const revenueConfig = {
  revenue: {
    label: "Revenue ($)",
    color: "var(--chart-1)",
  },
  leads: {
    label: "Leads",
    color: "var(--chart-2)",
  },
  conversions: {
    label: "Conversions",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

// Campaign performance data
const campaignData = [
  {
    campaign: "Social Media",
    impressions: 125000,
    clicks: 3200,
    conversions: 156,
    cost: 8500,
  },
  {
    campaign: "Google Ads",
    impressions: 89000,
    clicks: 2800,
    conversions: 198,
    cost: 12000,
  },
  {
    campaign: "Email Marketing",
    impressions: 45000,
    clicks: 1800,
    conversions: 89,
    cost: 2500,
  },
  {
    campaign: "Content Marketing",
    impressions: 67000,
    clicks: 2100,
    conversions: 134,
    cost: 4200,
  },
  {
    campaign: "Influencer",
    impressions: 34000,
    clicks: 980,
    conversions: 67,
    cost: 6800,
  },
];

const campaignConfig = {
  impressions: {
    label: "Impressions",
    color: "var(--chart-1)",
  },
  clicks: {
    label: "Clicks",
    color: "var(--chart-2)",
  },
  conversions: {
    label: "Conversions",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

// Lead source distribution
const leadSourceData = [
  { source: "Organic Search", leads: 285, fill: "var(--color-organic)" },
  { source: "Paid Ads", leads: 198, fill: "var(--color-paid)" },
  { source: "Social Media", leads: 156, fill: "var(--color-social)" },
  { source: "Email", leads: 89, fill: "var(--color-email)" },
  { source: "Referral", leads: 67, fill: "var(--color-referral)" },
  { source: "Direct", leads: 45, fill: "var(--color-direct)" },
];

const leadSourceConfig = {
  leads: {
    label: "Leads",
  },
  organic: {
    label: "Organic Search",
    color: "var(--chart-1)",
  },
  paid: {
    label: "Paid Ads",
    color: "var(--chart-2)",
  },
  social: {
    label: "Social Media",
    color: "var(--chart-3)",
  },
  email: {
    label: "Email",
    color: "var(--chart-4)",
  },
  referral: {
    label: "Referral",
    color: "var(--chart-5)",
  },
  direct: {
    label: "Direct",
    color: "var(--color-chart-6)",
  },
} satisfies ChartConfig;

// Conversion funnel data
const funnelData = [
  { stage: "Visitors", count: 12500, percentage: 100 },
  { stage: "Leads", count: 1875, percentage: 15 },
  { stage: "Qualified", count: 750, percentage: 6 },
  { stage: "Opportunities", count: 375, percentage: 3 },
  { stage: "Customers", count: 94, percentage: 0.75 },
];

const teamMembers = [
  {
    name: "Jennifer Martinez",
    role: "Marketing Director",
    avatar: "/avatars/jennifer.jpg",
    campaigns: 12,
    revenue: 245000,
  },
  {
    name: "Robert Johnson",
    role: "Sales Manager",
    avatar: "/avatars/robert.jpg",
    campaigns: 8,
    revenue: 189000,
  },
  {
    name: "Amanda Foster",
    role: "Content Strategist",
    avatar: "/avatars/amanda.jpg",
    campaigns: 15,
    revenue: 156000,
  },
  {
    name: "Michael Chang",
    role: "PPC Specialist",
    avatar: "/avatars/michael.jpg",
    campaigns: 10,
    revenue: 198000,
  },
  {
    name: "Sarah Williams",
    role: "Social Media Manager",
    avatar: "/avatars/sarah-w.jpg",
    campaigns: 18,
    revenue: 134000,
  },
];

const activeCampaigns = [
  {
    id: 1,
    name: "Summer Product Launch",
    type: "Multi-channel",
    status: "active",
    budget: 25000,
    spent: 18500,
    leads: 156,
    conversions: 23,
  },
  {
    id: 2,
    name: "B2B Lead Generation",
    type: "LinkedIn Ads",
    status: "active",
    budget: 15000,
    spent: 12800,
    leads: 89,
    conversions: 18,
  },
  {
    id: 3,
    name: "Retargeting Campaign",
    type: "Google Ads",
    status: "paused",
    budget: 8000,
    spent: 6200,
    leads: 67,
    conversions: 12,
  },
  {
    id: 4,
    name: "Email Nurture Series",
    type: "Email Marketing",
    status: "active",
    budget: 3000,
    spent: 1800,
    leads: 234,
    conversions: 45,
  },
];

export const Route = createFileRoute("/dashboard/projects/sales-marketing")({
  component: SalesMarketingProject,
});

function SalesMarketingProject() {
  const [timeRange, setTimeRange] = React.useState("6m");

  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Projects", href: "/dashboard/projects" },
    { title: "Sales & Marketing" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="flex-1 space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Sales & Marketing
            </h1>
            <p className="text-muted-foreground">
              Driving growth through strategic campaigns and sales excellence
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              4 Active Campaigns
            </Badge>
            <Button>Create Campaign</Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Revenue
              </CardTitle>
              <DollarSign className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$67,000</div>
              <p className="text-muted-foreground text-xs">
                +15.5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-muted-foreground text-xs">
                +8.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Conversion Rate
              </CardTitle>
              <Target className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6.8%</div>
              <p className="text-muted-foreground text-xs">
                +0.4% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Cost per Lead
              </CardTitle>
              <MousePointer className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24</div>
              <p className="text-muted-foreground text-xs">
                -12% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Revenue Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue & Lead Trends</CardTitle>
                  <CardDescription>
                    Monthly performance tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={revenueConfig}>
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient
                          id="fillRevenue"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--color-revenue)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-revenue)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                      />
                      <Area
                        dataKey="revenue"
                        type="natural"
                        fill="url(#fillRevenue)"
                        stroke="var(--color-revenue)"
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                  <div className="flex gap-2 leading-none font-medium">
                    Revenue trending up by 15.5% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-muted-foreground leading-none">
                    Showing revenue data for the last 6 months
                  </div>
                </CardFooter>
              </Card>

              {/* Lead Sources */}
              <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                  <CardTitle>Lead Sources</CardTitle>
                  <CardDescription>
                    Distribution of lead generation channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                  <ChartContainer
                    config={leadSourceConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                  >
                    <RechartsPieChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={leadSourceData}
                        dataKey="leads"
                        nameKey="source"
                        innerRadius={60}
                      />
                    </RechartsPieChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 leading-none font-medium">
                    Organic search leading with 285 leads{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-muted-foreground leading-none">
                    Total leads: 840 this month
                  </div>
                </CardFooter>
              </Card>
            </div>

            {/* Conversion Funnel */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>
                  Sales funnel performance and conversion rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {funnelData.map((stage, _index) => (
                    <div key={stage.stage} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {stage.stage}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold">
                            {stage.count.toLocaleString()}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            ({stage.percentage}%)
                          </span>
                        </div>
                      </div>
                      <Progress value={stage.percentage} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Active Campaigns</h3>
              <Button>New Campaign</Button>
            </div>

            <div className="grid gap-4">
              {activeCampaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {campaign.name}
                        </CardTitle>
                        <CardDescription>{campaign.type}</CardDescription>
                      </div>
                      <Badge
                        variant={
                          campaign.status === "active" ? "default" : "secondary"
                        }
                        className={
                          campaign.status === "active"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div>
                        <p className="text-muted-foreground text-sm">Budget</p>
                        <p className="text-lg font-bold">
                          ${campaign.budget.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Spent</p>
                        <p className="text-lg font-bold">
                          ${campaign.spent.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Leads</p>
                        <p className="text-lg font-bold">{campaign.leads}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">
                          Conversions
                        </p>
                        <p className="text-lg font-bold">
                          {campaign.conversions}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm">Budget Usage</span>
                        <span className="text-sm">
                          {Math.round((campaign.spent / campaign.budget) * 100)}
                          %
                        </span>
                      </div>
                      <Progress
                        value={(campaign.spent / campaign.budget) * 100}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">
                Campaign Performance Analytics
              </h3>
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
                <CardTitle>Campaign Performance Comparison</CardTitle>
                <CardDescription>
                  Comparing impressions, clicks, and conversions across
                  campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={campaignConfig} className="h-[400px]">
                  <BarChart
                    data={campaignData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="campaign"
                      tickLine={false}
                      axisLine={false}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="impressions"
                      fill="var(--color-impressions)"
                      name="Impressions"
                    />
                    <Bar
                      dataKey="clicks"
                      fill="var(--color-clicks)"
                      name="Clicks"
                    />
                    <Bar
                      dataKey="conversions"
                      fill="var(--color-conversions)"
                      name="Conversions"
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Best Performing Campaign
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Google Ads</p>
                    <p className="text-2xl font-bold">198 conversions</p>
                    <p className="text-muted-foreground text-sm">
                      7.1% conversion rate
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Lowest Cost per Lead
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Email Marketing</p>
                    <p className="text-2xl font-bold">$28</p>
                    <p className="text-muted-foreground text-sm">
                      4.9% conversion rate
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Highest ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Content Marketing</p>
                    <p className="text-2xl font-bold">340%</p>
                    <p className="text-muted-foreground text-sm">
                      6.3% conversion rate
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sales & Marketing Team</CardTitle>
                <CardDescription>
                  Team performance and campaign contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      className="flex items-center justify-between rounded-lg border p-4"
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
                          <p className="font-medium">{member.name}</p>
                          <p className="text-muted-foreground text-sm">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-sm font-medium">
                            {member.campaigns}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            campaigns
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">
                            ${member.revenue.toLocaleString()}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            revenue generated
                          </p>
                        </div>
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
