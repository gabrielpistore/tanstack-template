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
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { Crown, Mail, MoreHorizontal, UserPlus, Users } from "lucide-react";

export const Route = createFileRoute("/dashboard/settings/team")({
  component: TeamSettingsPage,
});

function TeamSettingsPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Settings", href: "/dashboard/settings" },
    { title: "Team" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Users className="h-8 w-8" />
              Team Management
            </h1>
            <p className="text-muted-foreground">
              Manage team members, roles, and permissions.
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        </div>

        {/* Team Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Members
              </CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-muted-foreground text-xs">
                <Badge variant="secondary" className="text-xs">
                  +2
                </Badge>{" "}
                this month
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
              <div className="text-2xl font-bold">6</div>
              <p className="text-muted-foreground text-xs">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Invites
              </CardTitle>
              <Mail className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-muted-foreground text-xs">Awaiting response</p>
            </CardContent>
          </Card>
        </div>

        {/* Invite New Member */}
        <Card>
          <CardHeader>
            <CardTitle>Invite Team Member</CardTitle>
            <CardDescription>
              Send an invitation to join your team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input placeholder="Enter email address" className="flex-1" />
              <select className="rounded-md border px-3 py-2">
                <option value="member">Member</option>
                <option value="admin">Admin</option>
                <option value="viewer">Viewer</option>
              </select>
              <Button>Send Invite</Button>
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Manage your team members and their roles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "John Doe",
                  email: "john.doe@example.com",
                  role: "Owner",
                  status: "Active",
                  avatar: "/avatars/john.jpg",
                  joinDate: "Jan 2024",
                  lastActive: "2 hours ago",
                },
                {
                  name: "Sarah Johnson",
                  email: "sarah.johnson@example.com",
                  role: "Admin",
                  status: "Active",
                  avatar: "/avatars/sarah.jpg",
                  joinDate: "Feb 2024",
                  lastActive: "1 day ago",
                },
                {
                  name: "Mike Chen",
                  email: "mike.chen@example.com",
                  role: "Member",
                  status: "Active",
                  avatar: "/avatars/mike.jpg",
                  joinDate: "Feb 2024",
                  lastActive: "3 hours ago",
                },
                {
                  name: "Emily Davis",
                  email: "emily.davis@example.com",
                  role: "Member",
                  status: "Active",
                  avatar: "/avatars/emily.jpg",
                  joinDate: "Mar 2024",
                  lastActive: "5 minutes ago",
                },
                {
                  name: "Alex Rodriguez",
                  email: "alex.rodriguez@example.com",
                  role: "Viewer",
                  status: "Inactive",
                  avatar: "/avatars/alex.jpg",
                  joinDate: "Mar 2024",
                  lastActive: "2 weeks ago",
                },
                {
                  name: "Lisa Wang",
                  email: "lisa.wang@example.com",
                  role: "Member",
                  status: "Pending",
                  avatar: "/avatars/lisa.jpg",
                  joinDate: "Invited",
                  lastActive: "Never",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">{member.name}</p>
                        {member.role === "Owner" && (
                          <Crown className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {member.email}
                      </p>
                      <div className="text-muted-foreground flex items-center space-x-4 text-xs">
                        <span>Joined: {member.joinDate}</span>
                        <span>•</span>
                        <span>Last active: {member.lastActive}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        member.status === "Active"
                          ? "secondary"
                          : member.status === "Pending"
                            ? "default"
                            : "outline"
                      }
                    >
                      {member.status}
                    </Badge>
                    <Badge variant="outline">{member.role}</Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Roles & Permissions */}
        <Card>
          <CardHeader>
            <CardTitle>Roles & Permissions</CardTitle>
            <CardDescription>Understand what each role can do</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  role: "Owner",
                  description: "Full access to all features and settings",
                  permissions: [
                    "Manage team",
                    "Billing access",
                    "Delete workspace",
                    "All model access",
                  ],
                },
                {
                  role: "Admin",
                  description: "Manage team members and most settings",
                  permissions: [
                    "Manage team",
                    "Project management",
                    "Model configuration",
                    "Usage analytics",
                  ],
                },
                {
                  role: "Member",
                  description: "Standard access to platform features",
                  permissions: [
                    "Use playground",
                    "Create projects",
                    "Basic model access",
                    "View analytics",
                  ],
                },
                {
                  role: "Viewer",
                  description: "Read-only access to projects and data",
                  permissions: [
                    "View projects",
                    "View analytics",
                    "Export data",
                    "Basic playground",
                  ],
                },
              ].map((roleInfo) => (
                <div key={roleInfo.role} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium">{roleInfo.role}</h4>
                    <Badge variant="outline">{roleInfo.role}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm">
                    {roleInfo.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {roleInfo.permissions.map((permission) => (
                      <Badge
                        key={permission}
                        variant="secondary"
                        className="text-xs"
                      >
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Team Settings</CardTitle>
            <CardDescription>Configure team-wide preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <h4 className="font-medium">Require 2FA for all members</h4>
                <p className="text-muted-foreground text-sm">
                  Enforce two-factor authentication for enhanced security
                </p>
              </div>
              <input type="checkbox" className="h-4 w-4" />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <h4 className="font-medium">Auto-approve domain invites</h4>
                <p className="text-muted-foreground text-sm">
                  Automatically approve invites from your company domain
                </p>
              </div>
              <input type="checkbox" className="h-4 w-4" defaultChecked />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <h4 className="font-medium">Allow external sharing</h4>
                <p className="text-muted-foreground text-sm">
                  Let team members share projects with external users
                </p>
              </div>
              <input type="checkbox" className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
