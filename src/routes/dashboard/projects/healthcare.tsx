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
  Activity,
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/projects/healthcare")({
  component: HealthcareProjectPage,
});

function HealthcareProjectPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Projects", href: "/dashboard/projects" },
    { title: "Healthcare" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Healthcare Platform
              </h1>
              <p className="text-muted-foreground">
                Digital health management and telemedicine platform
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">Beta</Badge>
            <Button>View Portal</Button>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Patients</CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34,521</div>
              <p className="text-muted-foreground text-xs">
                +8% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Consultations
              </CardTitle>
              <Stethoscope className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,847</div>
              <p className="text-muted-foreground text-xs">
                +24% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Appointments
              </CardTitle>
              <Calendar className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,432</div>
              <p className="text-muted-foreground text-xs">
                +16% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Satisfaction
              </CardTitle>
              <Heart className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9</div>
              <p className="text-muted-foreground text-xs">
                +0.1 from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Development</CardTitle>
            <CardDescription>
              Current development status and healthcare features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-muted-foreground text-sm">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium text-green-600">
                    Completed Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Patient registration & profiles
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Appointment scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Video consultations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Electronic health records
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Prescription management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      HIPAA compliance
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-orange-600">In Progress</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      AI symptom checker
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Wearable device integration
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      Insurance claim processing
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Mental health module
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance & Security */}
        <Card>
          <CardHeader>
            <CardTitle>Healthcare Compliance</CardTitle>
            <CardDescription>
              Regulatory compliance and security standards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "HIPAA",
                  status: "Compliant",
                  description:
                    "Health Insurance Portability and Accountability Act",
                  icon: Shield,
                  color: "text-green-500",
                },
                {
                  title: "FDA 21 CFR Part 11",
                  status: "Compliant",
                  description: "Electronic Records and Signatures",
                  icon: CheckCircle,
                  color: "text-green-500",
                },
                {
                  title: "SOC 2 Type II",
                  status: "Certified",
                  description: "Service Organization Control 2 certification",
                  icon: Shield,
                  color: "text-green-500",
                },
                {
                  title: "HL7 FHIR",
                  status: "Implemented",
                  description: "Healthcare data interoperability standard",
                  icon: Activity,
                  color: "text-blue-500",
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
                            item.status === "Implemented"
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
            <CardTitle>Healthcare Team</CardTitle>
            <CardDescription>
              Medical professionals and developers working on the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Chief Medical Officer",
                  avatar: "/avatars/dr-sarah.jpg",
                  status: "online",
                  tasks: 16,
                },
                {
                  name: "Michael Chen",
                  role: "Healthcare IT Lead",
                  avatar: "/avatars/michael-chen.jpg",
                  status: "online",
                  tasks: 13,
                },
                {
                  name: "Dr. Emily Rodriguez",
                  role: "Clinical Advisor",
                  avatar: "/avatars/dr-emily.jpg",
                  status: "away",
                  tasks: 9,
                },
                {
                  name: "David Thompson",
                  role: "Backend Developer",
                  avatar: "/avatars/david-thompson.jpg",
                  status: "online",
                  tasks: 11,
                },
                {
                  name: "Lisa Wang",
                  role: "UX Designer",
                  avatar: "/avatars/lisa-wang.jpg",
                  status: "online",
                  tasks: 8,
                },
                {
                  name: "James Miller",
                  role: "Security Engineer",
                  avatar: "/avatars/james-miller.jpg",
                  status: "offline",
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

        {/* Health Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Health Metrics</CardTitle>
            <CardDescription>
              Key performance indicators for healthcare delivery
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">System Uptime</span>
                </div>
                <div className="text-2xl font-bold">99.97%</div>
                <p className="text-muted-foreground text-xs">Last 30 days</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Avg Wait Time</span>
                </div>
                <div className="text-2xl font-bold">8 min</div>
                <p className="text-muted-foreground text-xs">
                  For appointments
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Consultation Rate</span>
                </div>
                <div className="text-2xl font-bold">94%</div>
                <p className="text-muted-foreground text-xs">
                  Successful consultations
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium">Patient Retention</span>
                </div>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-muted-foreground text-xs">Return patients</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>
              Latest platform updates and medical improvements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: "Dr. Sarah Johnson",
                  action: "approved new telemedicine protocols",
                  time: "1 hour ago",
                  type: "medical",
                },
                {
                  user: "Michael Chen",
                  action: "deployed FHIR integration update",
                  time: "3 hours ago",
                  type: "integration",
                },
                {
                  user: "Dr. Emily Rodriguez",
                  action: "reviewed AI symptom checker accuracy",
                  time: "5 hours ago",
                  type: "review",
                },
                {
                  user: "David Thompson",
                  action: "optimized patient data queries",
                  time: "8 hours ago",
                  type: "optimization",
                },
                {
                  user: "Lisa Wang",
                  action: "updated patient portal interface",
                  time: "1 day ago",
                  type: "design",
                },
                {
                  user: "James Miller",
                  action: "completed security audit for PHI data",
                  time: "2 days ago",
                  type: "security",
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
