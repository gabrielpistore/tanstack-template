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
import { Activity, Bot, Brain, Cpu, TrendingUp, Zap } from "lucide-react";

export const Route = createFileRoute("/dashboard/models/")({
  component: ModelsPage,
});

function ModelsPage() {
  const breadcrumbs = [{ title: "Platform", href: "/" }, { title: "Models" }];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Bot className="h-8 w-8" />
              AI Models
            </h1>
            <p className="text-muted-foreground">
              Manage and deploy your AI models with advanced capabilities and
              performance monitoring.
            </p>
          </div>
          <Button>
            <Bot className="mr-2 h-4 w-4" />
            Deploy New Model
          </Button>
        </div>

        {/* Model Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Models
              </CardTitle>
              <Activity className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +1
                </Badge>{" "}
                this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Requests
              </CardTitle>
              <TrendingUp className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.2K</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +12.5%
                </Badge>{" "}
                from last week
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
              <div className="text-2xl font-bold">245ms</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="outline" className="text-xs">
                  -15ms
                </Badge>{" "}
                from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>
              <Brain className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.8%</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +0.2%
                </Badge>{" "}
                from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Available Models */}
        <Card>
          <CardHeader>
            <CardTitle>Available Models</CardTitle>
            <CardDescription>
              Choose from our collection of AI models for different use cases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Genesis",
                  description:
                    "Advanced language model for text generation and analysis",
                  version: "v2.1.0",
                  status: "Active",
                  requests: "18.5K",
                  accuracy: "94.2%",
                  icon: Brain,
                  color: "text-blue-500",
                },
                {
                  name: "Explorer",
                  description:
                    "Specialized model for data exploration and pattern recognition",
                  version: "v1.8.3",
                  status: "Active",
                  requests: "15.2K",
                  accuracy: "91.8%",
                  icon: Cpu,
                  color: "text-green-500",
                },
                {
                  name: "Quantum",
                  description:
                    "High-performance model for complex computational tasks",
                  version: "v3.0.1",
                  status: "Beta",
                  requests: "11.5K",
                  accuracy: "96.7%",
                  icon: Zap,
                  color: "text-purple-500",
                },
              ].map((model) => (
                <Card
                  key={model.name}
                  className="cursor-pointer transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <model.icon className={`h-6 w-6 ${model.color}`} />
                        <CardTitle className="text-lg">{model.name}</CardTitle>
                      </div>
                      <Badge
                        variant={
                          model.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {model.status}
                      </Badge>
                    </div>
                    <CardDescription>{model.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Version:</span>
                        <span className="font-medium">{model.version}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Requests:</span>
                        <span className="font-medium">{model.requests}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Accuracy:</span>
                        <span className="font-medium">{model.accuracy}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" className="flex-1">
                        Configure
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Model Activity</CardTitle>
            <CardDescription>
              Latest deployments and model updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  model: "Genesis",
                  action: "Model updated to v2.1.0",
                  time: "2 hours ago",
                  status: "Success",
                },
                {
                  model: "Quantum",
                  action: "Beta deployment completed",
                  time: "1 day ago",
                  status: "Success",
                },
                {
                  model: "Explorer",
                  action: "Performance optimization applied",
                  time: "2 days ago",
                  status: "Success",
                },
                {
                  model: "Genesis",
                  action: "Training data updated",
                  time: "1 week ago",
                  status: "Success",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                      <Bot className="text-primary h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">{activity.model}</p>
                      <p className="text-muted-foreground text-sm">
                        {activity.action}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground text-sm">
                      {activity.time}
                    </span>
                    <Badge variant="secondary">{activity.status}</Badge>
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
