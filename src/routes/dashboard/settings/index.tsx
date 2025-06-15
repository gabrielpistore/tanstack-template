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
  Bell,
  CreditCard,
  Globe,
  Palette,
  Settings,
  Shield,
  User,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/settings/")({
  component: SettingsPage,
});

function SettingsPage() {
  const breadcrumbs = [{ title: "Platform", href: "/" }, { title: "Settings" }];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Settings className="h-8 w-8" />
              Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
        </div>

        {/* Quick Settings */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile</CardTitle>
              <User className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-xs">
                Personal information and preferences
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security</CardTitle>
              <Shield className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-xs">
                Password, 2FA, and security settings
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Billing</CardTitle>
              <CreditCard className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-xs">
                Subscription and payment methods
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usage</CardTitle>
              <Zap className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-xs">
                API limits and usage statistics
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Settings Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account and profile information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <User className="text-muted-foreground h-5 w-5" />
                  <div>
                    <p className="font-medium">Profile Information</p>
                    <p className="text-muted-foreground text-sm">
                      Update your personal details
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <Bell className="text-muted-foreground h-5 w-5" />
                  <div>
                    <p className="font-medium">Notifications</p>
                    <p className="text-muted-foreground text-sm">
                      Configure email and push notifications
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Configure
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <Globe className="text-muted-foreground h-5 w-5" />
                  <div>
                    <p className="font-medium">Language & Region</p>
                    <p className="text-muted-foreground text-sm">
                      Set your preferred language and timezone
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Change
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <Palette className="text-muted-foreground h-5 w-5" />
                  <div>
                    <p className="font-medium">Appearance</p>
                    <p className="text-muted-foreground text-sm">
                      Customize theme and display preferences
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Customize
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security & Privacy</CardTitle>
              <CardDescription>Protect your account and data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <Shield className="text-muted-foreground h-5 w-5" />
                  <div>
                    <p className="font-medium">Password</p>
                    <p className="text-muted-foreground text-sm">
                      Change your account password
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Update
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <Shield className="text-muted-foreground h-5 w-5" />
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-muted-foreground text-sm">
                      Add an extra layer of security
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Enabled</Badge>
                  <Button variant="ghost" size="sm">
                    Manage
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <Shield className="text-muted-foreground h-5 w-5" />
                  <div>
                    <p className="font-medium">API Keys</p>
                    <p className="text-muted-foreground text-sm">
                      Manage your API access keys
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center space-x-3">
                  <Shield className="text-muted-foreground h-5 w-5" />
                  <div>
                    <p className="font-medium">Privacy Settings</p>
                    <p className="text-muted-foreground text-sm">
                      Control your data and privacy preferences
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subscription Info */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription & Billing</CardTitle>
            <CardDescription>
              Manage your subscription and payment information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">Current Plan</p>
                <div className="flex items-center space-x-2">
                  <Badge variant="default">Pro Plan</Badge>
                  <span className="text-muted-foreground text-sm">
                    $29/month
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Next Billing Date</p>
                <p className="text-muted-foreground text-sm">
                  January 15, 2024
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Payment Method</p>
                <p className="text-muted-foreground text-sm">
                  •••• •••• •••• 4242
                </p>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button variant="outline">Change Plan</Button>
              <Button variant="outline">Update Payment</Button>
              <Button variant="outline">View Invoices</Button>
            </div>
          </CardContent>
        </Card>

        {/* Usage Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Statistics</CardTitle>
            <CardDescription>Monitor your API usage and limits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">API Calls This Month</p>
                <div className="text-2xl font-bold">12,847</div>
                <div className="bg-secondary h-2 w-full rounded-full">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "64%" }}
                  ></div>
                </div>
                <p className="text-muted-foreground text-xs">
                  64% of 20,000 limit
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Storage Used</p>
                <div className="text-2xl font-bold">2.4 GB</div>
                <div className="bg-secondary h-2 w-full rounded-full">
                  <div
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: "24%" }}
                  ></div>
                </div>
                <p className="text-muted-foreground text-xs">
                  24% of 10 GB limit
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Team Members</p>
                <div className="text-2xl font-bold">8</div>
                <div className="bg-secondary h-2 w-full rounded-full">
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p className="text-muted-foreground text-xs">
                  8 of 10 seats used
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Projects</p>
                <div className="text-2xl font-bold">15</div>
                <div className="bg-secondary h-2 w-full rounded-full">
                  <div
                    className="h-2 rounded-full bg-purple-500"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <p className="text-muted-foreground text-xs">
                  15 of 50 projects
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
