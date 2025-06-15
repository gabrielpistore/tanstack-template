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
  DollarSign,
  Package,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/projects/e-commerce")({
  component: ECommerceProjectPage,
});

function ECommerceProjectPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Projects", href: "/dashboard/projects" },
    { title: "E-Commerce" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <ShoppingCart className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                E-Commerce Platform
              </h1>
              <p className="text-muted-foreground">
                Next-generation online marketplace with AI recommendations
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="default">Active</Badge>
            <Button>View Store</Button>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <DollarSign className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1.2M</div>
              <p className="text-muted-foreground text-xs">
                +32% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <ShoppingCart className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,847</div>
              <p className="text-muted-foreground text-xs">
                +28% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24,532</div>
              <p className="text-muted-foreground text-xs">
                +15% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,943</div>
              <p className="text-muted-foreground text-xs">+45 new this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Development Progress</CardTitle>
            <CardDescription>
              Current platform development status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-muted-foreground text-sm">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium text-green-600">
                    Completed Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Product catalog & search
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Shopping cart & checkout
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Payment processing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Order management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Customer reviews & ratings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Inventory management
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-orange-600">In Progress</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      AI recommendation engine
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Advanced analytics dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      Multi-vendor marketplace
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Mobile app optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card>
          <CardHeader>
            <CardTitle>Development Team</CardTitle>
            <CardDescription>
              Team members working on the e-commerce platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Jennifer Liu",
                  role: "Tech Lead",
                  avatar: "/avatars/jennifer.jpg",
                  status: "online",
                  tasks: 15,
                },
                {
                  name: "Robert Chen",
                  role: "Frontend Developer",
                  avatar: "/avatars/robert.jpg",
                  status: "online",
                  tasks: 11,
                },
                {
                  name: "Maria Garcia",
                  role: "Backend Developer",
                  avatar: "/avatars/maria.jpg",
                  status: "away",
                  tasks: 9,
                },
                {
                  name: "James Wilson",
                  role: "DevOps Engineer",
                  avatar: "/avatars/james.jpg",
                  status: "online",
                  tasks: 7,
                },
                {
                  name: "Anna Kowalski",
                  role: "UX/UI Designer",
                  avatar: "/avatars/anna.jpg",
                  status: "online",
                  tasks: 8,
                },
                {
                  name: "Michael Brown",
                  role: "QA Engineer",
                  avatar: "/avatars/michael.jpg",
                  status: "offline",
                  tasks: 5,
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

        {/* Key Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>
              Key performance indicators for the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Conversion Rate</span>
                </div>
                <div className="text-2xl font-bold">3.8%</div>
                <p className="text-muted-foreground text-xs">
                  +0.5% from last month
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">Avg Rating</span>
                </div>
                <div className="text-2xl font-bold">4.6</div>
                <p className="text-muted-foreground text-xs">
                  +0.1 from last month
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Cart Abandonment</span>
                </div>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-muted-foreground text-xs">
                  -3% from last month
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Return Customers</span>
                </div>
                <div className="text-2xl font-bold">42%</div>
                <p className="text-muted-foreground text-xs">
                  +8% from last month
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
              Latest platform updates and improvements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: "Jennifer Liu",
                  action: "deployed new recommendation algorithm",
                  time: "1 hour ago",
                  type: "deployment",
                },
                {
                  user: "Robert Chen",
                  action: "optimized product search performance",
                  time: "3 hours ago",
                  type: "optimization",
                },
                {
                  user: "Maria Garcia",
                  action: "implemented new payment gateway",
                  time: "5 hours ago",
                  type: "feature",
                },
                {
                  user: "Anna Kowalski",
                  action: "updated checkout flow design",
                  time: "8 hours ago",
                  type: "design",
                },
                {
                  user: "Michael Brown",
                  action: "completed mobile app testing",
                  time: "1 day ago",
                  type: "testing",
                },
                {
                  user: "James Wilson",
                  action: "scaled infrastructure for Black Friday",
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
