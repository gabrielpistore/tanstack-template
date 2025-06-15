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
import { Progress } from "@/components/ui/progress";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/projects/fintech")({
  component: FintechProjectPage,
});

function FintechProjectPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Projects", href: "/dashboard/projects" },
    { title: "Fintech" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Fintech Platform
              </h1>
              <p className="text-muted-foreground">
                Digital banking and financial services platform
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="default">Production</Badge>
            <Button>View Dashboard</Button>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Transactions
              </CardTitle>
              <DollarSign className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45.2M</div>
              <p className="text-muted-foreground text-xs">
                +22% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127K</div>
              <p className="text-muted-foreground text-xs">
                +18% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>
              <CheckCircle className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.8%</div>
              <p className="text-muted-foreground text-xs">
                +0.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Security Score
              </CardTitle>
              <Shield className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">A+</div>
              <p className="text-muted-foreground text-xs">
                Excellent security rating
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Development</CardTitle>
            <CardDescription>
              Current development status and security features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-muted-foreground text-sm">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium text-green-600">
                    Completed Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Core banking system
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Payment processing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      KYC/AML compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Multi-factor authentication
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Real-time fraud detection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Mobile banking app
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-orange-600">In Progress</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Cryptocurrency integration
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      AI-powered investment advisor
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      Cross-border payments
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Advanced analytics dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security & Compliance */}
        <Card>
          <CardHeader>
            <CardTitle>Security & Compliance</CardTitle>
            <CardDescription>
              Security measures and regulatory compliance status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "PCI DSS",
                  status: "Compliant",
                  description: "Payment Card Industry Data Security Standard",
                  icon: Shield,
                  color: "text-green-500",
                },
                {
                  title: "SOC 2 Type II",
                  status: "Certified",
                  description: "Service Organization Control 2 certification",
                  icon: CheckCircle,
                  color: "text-green-500",
                },
                {
                  title: "GDPR",
                  status: "Compliant",
                  description: "General Data Protection Regulation",
                  icon: Shield,
                  color: "text-green-500",
                },
                {
                  title: "ISO 27001",
                  status: "In Progress",
                  description: "Information Security Management System",
                  icon: Clock,
                  color: "text-orange-500",
                },
                {
                  title: "Open Banking",
                  status: "Compliant",
                  description: "Open Banking API standards",
                  icon: Zap,
                  color: "text-blue-500",
                },
                {
                  title: "AML/KYC",
                  status: "Active",
                  description: "Anti-Money Laundering & Know Your Customer",
                  icon: Shield,
                  color: "text-green-500",
                },
              ].map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h4 className="text-sm font-medium">{item.title}</h4>
                        <Badge
                          variant={
                            item.status === "Compliant" ||
                            item.status === "Certified" ||
                            item.status === "Active"
                              ? "secondary"
                              : item.status === "In Progress"
                                ? "default"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card>
          <CardHeader>
            <CardTitle>Development Team</CardTitle>
            <CardDescription>
              Team members working on the fintech platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alexandra Smith",
                  role: "Lead Architect",
                  avatar: "/avatars/alexandra.jpg",
                  status: "online",
                  tasks: 18,
                },
                {
                  name: "Daniel Park",
                  role: "Security Engineer",
                  avatar: "/avatars/daniel.jpg",
                  status: "online",
                  tasks: 14,
                },
                {
                  name: "Sophie Turner",
                  role: "Compliance Officer",
                  avatar: "/avatars/sophie.jpg",
                  status: "away",
                  tasks: 8,
                },
                {
                  name: "Ryan Mitchell",
                  role: "Backend Developer",
                  avatar: "/avatars/ryan.jpg",
                  status: "online",
                  tasks: 12,
                },
                {
                  name: "Emma Davis",
                  role: "Frontend Developer",
                  avatar: "/avatars/emma.jpg",
                  status: "online",
                  tasks: 10,
                },
                {
                  name: "Carlos Rodriguez",
                  role: "DevOps Engineer",
                  avatar: "/avatars/carlos.jpg",
                  status: "offline",
                  tasks: 6,
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 rounded-lg border p-3"
                >
                  <Avatar>
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">{member.name}</p>
                      <div
                        className={`h-2 w-2 rounded-full ${
                          member.status === "online"
                            ? "bg-green-500"
                            : member.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-400"
                        }`}
                      />
                    </div>
                    <p className="text-muted-foreground text-xs">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {member.tasks} active tasks
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Metrics</CardTitle>
            <CardDescription>
              Key performance indicators and system health
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Uptime</span>
                </div>
                <div className="text-2xl font-bold">99.99%</div>
                <p className="text-muted-foreground text-xs">Last 30 days</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">Avg Response</span>
                </div>
                <div className="text-2xl font-bold">120ms</div>
                <p className="text-muted-foreground text-xs">
                  API response time
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Fraud Detection</span>
                </div>
                <div className="text-2xl font-bold">99.7%</div>
                <p className="text-muted-foreground text-xs">Accuracy rate</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">
                    Daily Active Users
                  </span>
                </div>
                <div className="text-2xl font-bold">89K</div>
                <p className="text-muted-foreground text-xs">
                  +12% from yesterday
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>
              Latest platform updates and security enhancements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: "Alexandra Smith",
                  action: "deployed enhanced fraud detection system",
                  time: "30 minutes ago",
                  type: "security",
                },
                {
                  user: "Daniel Park",
                  action: "completed security audit for Q4",
                  time: "2 hours ago",
                  type: "audit",
                },
                {
                  user: "Sophie Turner",
                  action: "updated KYC compliance procedures",
                  time: "4 hours ago",
                  type: "compliance",
                },
                {
                  user: "Ryan Mitchell",
                  action: "optimized payment processing pipeline",
                  time: "6 hours ago",
                  type: "optimization",
                },
                {
                  user: "Emma Davis",
                  action: "released new mobile app version",
                  time: "1 day ago",
                  type: "release",
                },
                {
                  user: "Carlos Rodriguez",
                  action: "scaled infrastructure for peak load",
                  time: "2 days ago",
                  type: "infrastructure",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 rounded-lg border p-3"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {activity.time}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
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
