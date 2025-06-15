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
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  Plus,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/settings/billing")({
  component: BillingPage,
});

function BillingPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Settings", href: "/dashboard/settings" },
    { title: "Billing" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <CreditCard className="h-8 w-8 text-blue-500" />
              Billing & Subscription
            </h1>
            <p className="text-muted-foreground">
              Manage your subscription, billing information, and usage.
            </p>
          </div>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Invoice
          </Button>
        </div>

        {/* Current Plan */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>
                  You are currently on the Pro plan
                </CardDescription>
              </div>
              <Badge variant="default" className="px-3 py-1 text-sm">
                Pro Plan
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Monthly Cost</span>
                  <span className="text-2xl font-bold">$49/month</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Next Billing Date</span>
                  <span className="text-sm">January 15, 2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Payment Method</span>
                  <span className="text-sm">•••• •••• •••• 4242</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">API Calls Used</span>
                    <span className="text-sm">12,450 / 50,000</span>
                  </div>
                  <Progress value={24.9} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Storage Used</span>
                    <span className="text-sm">2.3 GB / 10 GB</span>
                  </div>
                  <Progress value={23} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Team Members</span>
                    <span className="text-sm">3 / 10</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex gap-4">
              <Button variant="outline">Change Plan</Button>
              <Button variant="outline">Update Payment Method</Button>
              <Button variant="destructive">Cancel Subscription</Button>
            </div>
          </CardContent>
        </Card>

        {/* Available Plans */}
        <Card>
          <CardHeader>
            <CardTitle>Available Plans</CardTitle>
            <CardDescription>
              Choose the plan that best fits your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Starter Plan */}
              <div className="space-y-4 rounded-lg border p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Starter</h3>
                  <div className="mt-2 text-3xl font-bold">
                    $19<span className="text-sm font-normal">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Perfect for individuals
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    10,000 API calls/month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />2 GB
                    storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />3 team
                    members
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Email support
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Downgrade
                </Button>
              </div>

              {/* Pro Plan - Current */}
              <div className="border-primary relative space-y-4 rounded-lg border-2 p-6">
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 transform">
                  Current Plan
                </Badge>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Pro</h3>
                  <div className="mt-2 text-3xl font-bold">
                    $49<span className="text-sm font-normal">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Great for growing teams
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    50,000 API calls/month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    10 GB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    10 team members
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Advanced analytics
                  </li>
                </ul>
                <Button className="w-full" disabled>
                  Current Plan
                </Button>
              </div>

              {/* Enterprise Plan */}
              <div className="space-y-4 rounded-lg border p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Enterprise</h3>
                  <div className="mt-2 text-3xl font-bold">
                    $199<span className="text-sm font-normal">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    For large organizations
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Unlimited API calls
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    100 GB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Unlimited team members
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    24/7 phone support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    SLA guarantee
                  </li>
                </ul>
                <Button variant="default" className="w-full">
                  Upgrade
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Statistics</CardTitle>
            <CardDescription>Your usage over the past 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">API Calls</span>
                </div>
                <div className="text-2xl font-bold">12,450</div>
                <p className="text-muted-foreground text-xs">
                  +15% from last month
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Current Bill</span>
                </div>
                <div className="text-2xl font-bold">$49.00</div>
                <p className="text-muted-foreground text-xs">
                  Due Jan 15, 2025
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Avg Response Time</span>
                </div>
                <div className="text-2xl font-bold">245ms</div>
                <p className="text-muted-foreground text-xs">
                  -12% from last month
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Success Rate</span>
                </div>
                <div className="text-2xl font-bold">99.8%</div>
                <p className="text-muted-foreground text-xs">
                  +0.2% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing History */}
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>Your recent invoices and payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "Dec 15, 2024",
                  amount: "$49.00",
                  status: "Paid",
                  invoice: "INV-2024-12-001",
                  description: "Pro Plan - Monthly Subscription",
                },
                {
                  date: "Nov 15, 2024",
                  amount: "$49.00",
                  status: "Paid",
                  invoice: "INV-2024-11-001",
                  description: "Pro Plan - Monthly Subscription",
                },
                {
                  date: "Oct 15, 2024",
                  amount: "$49.00",
                  status: "Paid",
                  invoice: "INV-2024-10-001",
                  description: "Pro Plan - Monthly Subscription",
                },
                {
                  date: "Sep 15, 2024",
                  amount: "$19.00",
                  status: "Paid",
                  invoice: "INV-2024-09-001",
                  description: "Starter Plan - Monthly Subscription",
                },
                {
                  date: "Aug 15, 2024",
                  amount: "$19.00",
                  status: "Failed",
                  invoice: "INV-2024-08-001",
                  description: "Starter Plan - Monthly Subscription",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <CreditCard className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{item.description}</p>
                      <div className="text-muted-foreground flex items-center space-x-2 text-sm">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.invoice}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium">{item.amount}</p>
                      <Badge
                        variant={
                          item.status === "Paid"
                            ? "secondary"
                            : item.status === "Failed"
                              ? "destructive"
                              : "default"
                        }
                        className="text-xs"
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Manage your payment information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-muted-foreground text-sm">
                    Expires 12/2027
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Default</Badge>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Billing Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Billing Alerts</CardTitle>
            <CardDescription>
              Get notified about important billing events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-medium">Usage Threshold Alert</p>
                    <p className="text-muted-foreground text-sm">
                      Get notified when you reach 80% of your plan limits
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Payment Reminder</p>
                    <p className="text-muted-foreground text-sm">
                      Receive reminders 3 days before payment is due
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium">Payment Failed Alert</p>
                    <p className="text-muted-foreground text-sm">
                      Get notified immediately if a payment fails
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
