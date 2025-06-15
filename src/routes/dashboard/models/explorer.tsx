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
  Cpu,
  Database,
  Play,
  Search,
  Settings,
  TrendingUp,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/models/explorer")({
  component: ExplorerModelPage,
});

function ExplorerModelPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Models", href: "/dashboard/models" },
    { title: "Explorer" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Cpu className="h-8 w-8 text-green-500" />
              Explorer Model
            </h1>
            <p className="text-muted-foreground">
              Specialized model for data exploration and pattern recognition
              with advanced analytics capabilities.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Configure
            </Button>
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Run Analysis
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
                <span className="text-lg font-bold">Active</span>
              </div>
              <p className="text-muted-foreground text-xs">
                Running since 5 days ago
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Analyses Today
              </CardTitle>
              <Search className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,523</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +24.1%
                </Badge>{" "}
                from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Processing Time
              </CardTitle>
              <Zap className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342ms</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="outline" className="text-xs">
                  -28ms
                </Badge>{" "}
                from last hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pattern Detection
              </CardTitle>
              <TrendingUp className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">91.8%</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +1.2%
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
                Core features and specializations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Data Pattern Recognition",
                    level: 95,
                    color: "bg-green-500",
                  },
                  {
                    name: "Anomaly Detection",
                    level: 88,
                    color: "bg-blue-500",
                  },
                  { name: "Trend Analysis", level: 92, color: "bg-purple-500" },
                  { name: "Classification", level: 85, color: "bg-orange-500" },
                  { name: "Clustering", level: 90, color: "bg-pink-500" },
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
                Model configuration and parameters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version:</span>
                  <span className="font-medium">v1.8.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Model Type:</span>
                  <span className="font-medium">Pattern Recognition</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Parameters:</span>
                  <span className="font-medium">45B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Training Data:</span>
                  <span className="font-medium">850GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Specialization:</span>
                  <span className="font-medium">Data Exploration</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deployment:</span>
                  <Badge variant="secondary">Production</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Analyses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Data Analyses</CardTitle>
            <CardDescription>
              Latest pattern recognition and exploration tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "1",
                  dataset: "Customer Behavior Dataset",
                  type: "Pattern Recognition",
                  status: "Completed",
                  patterns: 23,
                  confidence: "94.2%",
                  duration: "2.1s",
                  timestamp: "5 min ago",
                },
                {
                  id: "2",
                  dataset: "Sales Performance Data",
                  type: "Trend Analysis",
                  status: "Completed",
                  patterns: 18,
                  confidence: "91.7%",
                  duration: "1.8s",
                  timestamp: "12 min ago",
                },
                {
                  id: "3",
                  dataset: "User Engagement Metrics",
                  type: "Anomaly Detection",
                  status: "Processing",
                  patterns: 15,
                  confidence: "88.9%",
                  duration: "3.2s",
                  timestamp: "18 min ago",
                },
                {
                  id: "4",
                  dataset: "Product Recommendation Data",
                  type: "Clustering",
                  status: "Completed",
                  patterns: 31,
                  confidence: "96.1%",
                  duration: "4.5s",
                  timestamp: "25 min ago",
                },
              ].map((analysis) => (
                <div
                  key={analysis.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                      <Database className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">{analysis.dataset}</p>
                      <div className="text-muted-foreground flex items-center space-x-4 text-sm">
                        <span>{analysis.type}</span>
                        <span>•</span>
                        <span>{analysis.patterns} patterns found</span>
                        <span>•</span>
                        <span>{analysis.confidence} confidence</span>
                        <span>•</span>
                        <span>{analysis.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        analysis.status === "Completed"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {analysis.status}
                    </Badge>
                    <span className="text-muted-foreground text-sm">
                      {analysis.timestamp}
                    </span>
                    <Button variant="ghost" size="sm">
                      View Results
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
            <CardDescription>
              Model performance metrics and optimization suggestions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-medium">Strengths</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm">
                      Excellent pattern recognition accuracy
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm">
                      Fast processing for large datasets
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm">Low false positive rate</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Optimization Opportunities</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm">
                      Memory usage could be optimized
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm">
                      Consider batch processing for efficiency
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm">
                      Update training data quarterly
                    </span>
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
