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
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  AlertTriangle,
  Clock,
  Database,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/settings/limits")({
  component: LimitsPage,
});

function LimitsPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Settings", href: "/dashboard/settings" },
    { title: "Limits" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Shield className="h-8 w-8 text-orange-500" />
              Usage Limits & Quotas
            </h1>
            <p className="text-muted-foreground">
              Monitor and manage your resource usage limits and quotas.
            </p>
          </div>
          <Button variant="outline">
            <TrendingUp className="mr-2 h-4 w-4" />
            View Analytics
          </Button>
        </div>

        {/* Current Usage Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Current Usage Overview</CardTitle>
            <CardDescription>
              Your current resource consumption across all services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">API Calls</span>
                  </div>
                  <Badge variant="secondary">24.9%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>12,450 / 50,000</span>
                    <span className="text-muted-foreground">per month</span>
                  </div>
                  <Progress value={24.9} className="h-2" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Storage</span>
                  </div>
                  <Badge variant="secondary">23%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>2.3 GB / 10 GB</span>
                    <span className="text-muted-foreground">total</span>
                  </div>
                  <Progress value={23} className="h-2" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-medium">Team Members</span>
                  </div>
                  <Badge variant="secondary">30%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>3 / 10</span>
                    <span className="text-muted-foreground">members</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium">Compute Hours</span>
                  </div>
                  <Badge variant="secondary">45%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>45 / 100</span>
                    <span className="text-muted-foreground">hours/month</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rate Limits */}
        <Card>
          <CardHeader>
            <CardTitle>Rate Limits</CardTitle>
            <CardDescription>
              API request rate limits and current usage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Requests per Minute</h4>
                    <Badge variant="outline">1,000 RPM</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current: 245 RPM</span>
                      <span className="text-green-600">24.5%</span>
                    </div>
                    <Progress value={24.5} className="h-2" />
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Average over the last 5 minutes
                  </p>
                </div>

                <div className="space-y-4 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Requests per Hour</h4>
                    <Badge variant="outline">10,000 RPH</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current: 3,240 RPH</span>
                      <span className="text-green-600">32.4%</span>
                    </div>
                    <Progress value={32.4} className="h-2" />
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Average over the last hour
                  </p>
                </div>

                <div className="space-y-4 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Concurrent Requests</h4>
                    <Badge variant="outline">50 Max</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current: 12</span>
                      <span className="text-green-600">24%</span>
                    </div>
                    <Progress value={24} className="h-2" />
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Active connections right now
                  </p>
                </div>

                <div className="space-y-4 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Batch Size Limit</h4>
                    <Badge variant="outline">100 Items</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Avg Batch: 25 items</span>
                      <span className="text-green-600">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Maximum items per batch request
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resource Quotas */}
        <Card>
          <CardHeader>
            <CardTitle>Resource Quotas</CardTitle>
            <CardDescription>
              Monthly and daily resource allocation limits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  name: "API Calls",
                  monthly: { used: 12450, limit: 50000, unit: "calls" },
                  daily: { used: 420, limit: 1667, unit: "calls" },
                  icon: Zap,
                  color: "text-blue-500",
                },
                {
                  name: "Data Transfer",
                  monthly: { used: 15.2, limit: 100, unit: "GB" },
                  daily: { used: 0.8, limit: 3.3, unit: "GB" },
                  icon: Database,
                  color: "text-green-500",
                },
                {
                  name: "Compute Time",
                  monthly: { used: 45, limit: 100, unit: "hours" },
                  daily: { used: 1.5, limit: 3.3, unit: "hours" },
                  icon: Clock,
                  color: "text-orange-500",
                },
                {
                  name: "Model Training",
                  monthly: { used: 2, limit: 5, unit: "jobs" },
                  daily: { used: 0, limit: 1, unit: "jobs" },
                  icon: TrendingUp,
                  color: "text-purple-500",
                },
              ].map((resource, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <resource.icon className={`h-5 w-5 ${resource.color}`} />
                    <h4 className="font-medium">{resource.name}</h4>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Monthly Usage
                        </span>
                        <Badge variant="outline">
                          {Math.round(
                            (resource.monthly.used / resource.monthly.limit) *
                              100
                          )}
                          %
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>
                            {resource.monthly.used.toLocaleString()} /{" "}
                            {resource.monthly.limit.toLocaleString()}{" "}
                            {resource.monthly.unit}
                          </span>
                        </div>
                        <Progress
                          value={
                            (resource.monthly.used / resource.monthly.limit) *
                            100
                          }
                          className="h-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Daily Usage</span>
                        <Badge variant="outline">
                          {Math.round(
                            (resource.daily.used / resource.daily.limit) * 100
                          )}
                          %
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>
                            {resource.daily.used} / {resource.daily.limit}{" "}
                            {resource.daily.unit}
                          </span>
                        </div>
                        <Progress
                          value={
                            (resource.daily.used / resource.daily.limit) * 100
                          }
                          className="h-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Limit Alerts & Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Limit Alerts & Notifications</CardTitle>
            <CardDescription>
              Configure when to receive notifications about usage limits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  title: "API Rate Limit Warning",
                  description:
                    "Get notified when approaching rate limits (80% threshold)",
                  enabled: true,
                  critical: false,
                },
                {
                  title: "Monthly Quota Alert",
                  description: "Alert when monthly quotas reach 90% usage",
                  enabled: true,
                  critical: false,
                },
                {
                  title: "Storage Limit Warning",
                  description: "Notify when storage usage exceeds 85%",
                  enabled: false,
                  critical: false,
                },
                {
                  title: "Critical Limit Breach",
                  description:
                    "Immediate notification when any limit is exceeded",
                  enabled: true,
                  critical: true,
                },
                {
                  title: "Daily Usage Summary",
                  description: "Daily email with usage statistics and trends",
                  enabled: false,
                  critical: false,
                },
              ].map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center space-x-3">
                    {alert.critical ? (
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-blue-500" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{alert.title}</p>
                        {alert.critical && (
                          <Badge variant="destructive" className="text-xs">
                            Critical
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {alert.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor={`alert-${index}`} className="text-sm">
                      {alert.enabled ? "Enabled" : "Disabled"}
                    </Label>
                    <Switch id={`alert-${index}`} checked={alert.enabled} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upgrade Options */}
        <Card>
          <CardHeader>
            <CardTitle>Need Higher Limits?</CardTitle>
            <CardDescription>
              Upgrade your plan or request custom limits for your organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-lg border p-4">
                <h4 className="font-medium">Upgrade to Enterprise</h4>
                <p className="text-muted-foreground text-sm">
                  Get unlimited API calls, 100GB storage, and custom rate
                  limits.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Unlimited API calls</li>
                  <li>• 100GB storage</li>
                  <li>• Custom rate limits</li>
                  <li>• Priority support</li>
                </ul>
                <Button className="w-full">Upgrade to Enterprise</Button>
              </div>

              <div className="space-y-3 rounded-lg border p-4">
                <h4 className="font-medium">Request Custom Limits</h4>
                <p className="text-muted-foreground text-sm">
                  Need specific limits for your use case? Contact our team.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Custom API rate limits</li>
                  <li>• Dedicated resources</li>
                  <li>• SLA guarantees</li>
                  <li>• Enterprise support</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Limit Events */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Limit Events</CardTitle>
            <CardDescription>
              History of limit warnings and breaches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "warning",
                  message: "API rate limit reached 85% (850/1000 RPM)",
                  timestamp: "2 hours ago",
                  resolved: true,
                },
                {
                  type: "info",
                  message: "Monthly quota reached 75% for API calls",
                  timestamp: "1 day ago",
                  resolved: false,
                },
                {
                  type: "warning",
                  message: "Storage usage exceeded 80% threshold",
                  timestamp: "3 days ago",
                  resolved: true,
                },
                {
                  type: "error",
                  message: "Concurrent request limit briefly exceeded",
                  timestamp: "1 week ago",
                  resolved: true,
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center space-x-3">
                    {event.type === "error" && (
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    )}
                    {event.type === "warning" && (
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                    )}
                    {event.type === "info" && (
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{event.message}</p>
                      <p className="text-muted-foreground text-xs">
                        {event.timestamp}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={event.resolved ? "secondary" : "destructive"}
                    className="text-xs"
                  >
                    {event.resolved ? "Resolved" : "Active"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
