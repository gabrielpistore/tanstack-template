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
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  Plane,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/projects/travel")({
  component: TravelProjectPage,
});

function TravelProjectPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Projects", href: "/dashboard/projects" },
    { title: "Travel" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <Plane className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Travel Platform
              </h1>
              <p className="text-muted-foreground">
                AI-powered travel booking and recommendation system
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">In Progress</Badge>
            <Button>View Live Demo</Button>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Bookings
              </CardTitle>
              <Plane className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,847</div>
              <p className="text-muted-foreground text-xs">
                +18% from last month
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
              <div className="text-2xl font-bold">8,432</div>
              <p className="text-muted-foreground text-xs">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
              <Star className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-muted-foreground text-xs">
                +0.2 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TrendingUp className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$284K</div>
              <p className="text-muted-foreground text-xs">
                +25% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
            <CardDescription>
              Current development status and milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-muted-foreground text-sm">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium text-green-600">Completed</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      User authentication system
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Flight search & booking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Hotel recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Payment integration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Mobile app (iOS/Android)
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-orange-600">In Progress</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      AI travel assistant
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Real-time price tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      Group booking features
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Travel insurance integration
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
            <CardTitle>Team Members</CardTitle>
            <CardDescription>People working on this project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Chen",
                  role: "Product Manager",
                  avatar: "/avatars/sarah.jpg",
                  status: "online",
                  tasks: 12,
                },
                {
                  name: "Marcus Rodriguez",
                  role: "Lead Developer",
                  avatar: "/avatars/marcus.jpg",
                  status: "online",
                  tasks: 8,
                },
                {
                  name: "Emily Watson",
                  role: "UX Designer",
                  avatar: "/avatars/emily.jpg",
                  status: "away",
                  tasks: 6,
                },
                {
                  name: "David Kim",
                  role: "Backend Developer",
                  avatar: "/avatars/david.jpg",
                  status: "online",
                  tasks: 10,
                },
                {
                  name: "Lisa Thompson",
                  role: "QA Engineer",
                  avatar: "/avatars/lisa.jpg",
                  status: "offline",
                  tasks: 4,
                },
                {
                  name: "Alex Johnson",
                  role: "DevOps Engineer",
                  avatar: "/avatars/alex.jpg",
                  status: "online",
                  tasks: 7,
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

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: "Marcus Rodriguez",
                  action: "deployed new flight search algorithm",
                  time: "2 hours ago",
                  type: "deployment",
                },
                {
                  user: "Emily Watson",
                  action: "updated mobile app wireframes",
                  time: "4 hours ago",
                  type: "design",
                },
                {
                  user: "Sarah Chen",
                  action: "approved hotel booking feature requirements",
                  time: "6 hours ago",
                  type: "approval",
                },
                {
                  user: "David Kim",
                  action: "fixed payment gateway integration bug",
                  time: "8 hours ago",
                  type: "bugfix",
                },
                {
                  user: "Lisa Thompson",
                  action: "completed testing for user registration flow",
                  time: "1 day ago",
                  type: "testing",
                },
                {
                  user: "Alex Johnson",
                  action: "optimized database queries for search performance",
                  time: "1 day ago",
                  type: "optimization",
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

        {/* Key Features */}
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>
              Main capabilities of the travel platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Smart Search",
                  description:
                    "AI-powered flight and hotel search with personalized recommendations",
                  icon: MapPin,
                  status: "completed",
                },
                {
                  title: "Price Alerts",
                  description:
                    "Real-time price tracking and notifications for best deals",
                  icon: TrendingUp,
                  status: "in-progress",
                },
                {
                  title: "Trip Planning",
                  description:
                    "Comprehensive itinerary planning with local recommendations",
                  icon: Calendar,
                  status: "planned",
                },
                {
                  title: "Group Bookings",
                  description: "Coordinate and manage group travel bookings",
                  icon: Users,
                  status: "in-progress",
                },
                {
                  title: "Travel Assistant",
                  description: "24/7 AI-powered travel support and assistance",
                  icon: Star,
                  status: "in-progress",
                },
                {
                  title: "Mobile App",
                  description:
                    "Native iOS and Android apps with offline capabilities",
                  icon: Plane,
                  status: "completed",
                },
              ].map((feature, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <feature.icon className="text-primary h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h4 className="text-sm font-medium">{feature.title}</h4>
                        <Badge
                          variant={
                            feature.status === "completed"
                              ? "secondary"
                              : feature.status === "in-progress"
                                ? "default"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {feature.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
