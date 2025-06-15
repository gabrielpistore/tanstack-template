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
  Activity,
  Brain,
  MessageSquare,
  Settings,
  TrendingUp,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/models/genesis")({
  component: GenesisModelPage,
});

function GenesisModelPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Models", href: "/dashboard/models" },
    { title: "Genesis" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Brain className="h-8 w-8 text-blue-500" />
              Genesis Model
            </h1>
            <p className="text-muted-foreground">
              Our flagship conversational AI model with advanced reasoning and
              creative capabilities.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Configure
            </Button>
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" />
              Start Chat
            </Button>
          </div>
        </div>

        {/* Model Status */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status</CardTitle>
              <Activity className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-lg font-bold">Online</span>
              </div>
              <p className="text-muted-foreground text-xs">
                99.9% uptime this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Requests Today
              </CardTitle>
              <MessageSquare className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +15.3%
                </Badge>{" "}
                from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Response Time
              </CardTitle>
              <Zap className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2s</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="outline" className="text-xs">
                  -0.3s
                </Badge>{" "}
                faster than average
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Satisfaction Rate
              </CardTitle>
              <TrendingUp className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96.8%</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +2.1%
                </Badge>{" "}
                this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Model Capabilities */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Model Capabilities</CardTitle>
              <CardDescription>
                Core AI capabilities and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Natural Language Understanding",
                    level: 98,
                    color: "bg-blue-500",
                  },
                  {
                    name: "Creative Writing",
                    level: 95,
                    color: "bg-purple-500",
                  },
                  { name: "Code Generation", level: 92, color: "bg-green-500" },
                  {
                    name: "Logical Reasoning",
                    level: 94,
                    color: "bg-orange-500",
                  },
                  {
                    name: "Multilingual Support",
                    level: 89,
                    color: "bg-pink-500",
                  },
                ].map((capability) => (
                  <div key={capability.name}>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium">
                        {capability.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {capability.level}%
                      </span>
                    </div>
                    <div className="bg-secondary h-2 w-full rounded-full">
                      <div
                        className={`${capability.color} h-2 rounded-full transition-all`}
                        style={{ width: `${capability.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
              <CardDescription>
                Model architecture and configuration details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version:</span>
                  <span className="font-medium">v3.2.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Architecture:</span>
                  <span className="font-medium">Transformer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Parameters:</span>
                  <span className="font-medium">175B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Context Length:</span>
                  <span className="font-medium">32K tokens</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Training Data:</span>
                  <span className="font-medium">2.5TB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deployment:</span>
                  <Badge variant="secondary">Production</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Conversations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent API Requests</CardTitle>
            <CardDescription>
              Latest interactions and model responses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "1",
                  type: "Chat Completion",
                  user: "Developer API",
                  status: "Success",
                  tokens: 1247,
                  duration: "1.1s",
                  timestamp: "2 min ago",
                  topic: "Code explanation and debugging",
                },
                {
                  id: "2",
                  type: "Text Generation",
                  user: "Content Team",
                  status: "Success",
                  tokens: 892,
                  duration: "0.8s",
                  timestamp: "5 min ago",
                  topic: "Marketing copy generation",
                },
                {
                  id: "3",
                  type: "Code Generation",
                  user: "Engineering",
                  status: "Success",
                  tokens: 2156,
                  duration: "1.9s",
                  timestamp: "8 min ago",
                  topic: "React component creation",
                },
                {
                  id: "4",
                  type: "Translation",
                  user: "Localization",
                  status: "Success",
                  tokens: 634,
                  duration: "0.6s",
                  timestamp: "12 min ago",
                  topic: "Multi-language content translation",
                },
              ].map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <Brain className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">{request.type}</p>
                      <div className="text-muted-foreground flex items-center space-x-4 text-sm">
                        <span>{request.user}</span>
                        <span>•</span>
                        <span>{request.tokens} tokens</span>
                        <span>•</span>
                        <span>{request.duration}</span>
                      </div>
                      <p className="text-muted-foreground mt-1 text-xs">
                        {request.topic}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{request.status}</Badge>
                    <span className="text-muted-foreground text-sm">
                      {request.timestamp}
                    </span>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Analytics</CardTitle>
            <CardDescription>
              Model usage patterns and popular features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-medium">Top Use Cases</h4>
                <div className="space-y-3">
                  {[
                    {
                      name: "Code Generation",
                      percentage: 35,
                      count: "1,247 requests",
                    },
                    {
                      name: "Text Completion",
                      percentage: 28,
                      count: "998 requests",
                    },
                    {
                      name: "Question Answering",
                      percentage: 22,
                      count: "784 requests",
                    },
                    {
                      name: "Translation",
                      percentage: 15,
                      count: "536 requests",
                    },
                  ].map((useCase) => (
                    <div
                      key={useCase.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <div className="mb-1 flex justify-between">
                          <span className="text-sm font-medium">
                            {useCase.name}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {useCase.percentage}%
                          </span>
                        </div>
                        <div className="bg-secondary h-2 w-full rounded-full">
                          <div
                            className="h-2 rounded-full bg-blue-500 transition-all"
                            style={{ width: `${useCase.percentage}%` }}
                          ></div>
                        </div>
                        <p className="text-muted-foreground mt-1 text-xs">
                          {useCase.count}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Average Response Quality:
                    </span>
                    <span className="font-medium">9.2/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Error Rate:</span>
                    <span className="font-medium">0.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Peak Concurrent Users:
                    </span>
                    <span className="font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Total Conversations:
                    </span>
                    <span className="font-medium">45,892</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
