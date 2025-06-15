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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bug,
  Calendar,
  GitCommit,
  Plus,
  Search,
  Shield,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/documentation/changelog")({
  component: ChangelogPage,
});

function ChangelogPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Documentation", href: "/dashboard/documentation" },
    { title: "Changelog" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <GitCommit className="h-8 w-8 text-green-500" />
              Changelog
            </h1>
            <p className="text-muted-foreground">
              Stay up to date with the latest features, improvements, and bug
              fixes.
            </p>
          </div>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Subscribe to Updates
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                <Input placeholder="Search changelog..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                {[
                  "All",
                  "Features",
                  "Improvements",
                  "Bug Fixes",
                  "Security",
                ].map((filter) => (
                  <Button
                    key={filter}
                    variant={filter === "All" ? "default" : "outline"}
                    size="sm"
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changelog Entries */}
        <div className="space-y-8">
          {/* Version 2.4.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Badge variant="default" className="px-3 py-1 text-sm">
                    v2.4.0
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    December 15, 2024
                  </span>
                </div>
                <Badge variant="secondary">Latest</Badge>
              </div>
              <CardTitle className="text-xl">
                Major Performance Improvements
              </CardTitle>
              <CardDescription>
                This release focuses on significant performance enhancements and
                new AI model capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* New Features */}
                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-green-600">
                    <Plus className="h-4 w-4" />
                    New Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span>
                        Added Genesis AI model with 40% faster response times
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span>
                        New real-time collaboration features in Playground
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span>
                        Advanced team management with role-based permissions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span>
                        Custom model training with fine-tuning capabilities
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                {/* Improvements */}
                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-blue-600">
                    <Zap className="h-4 w-4" />
                    Improvements
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span>
                        Reduced API response time by 60% across all endpoints
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span>
                        Enhanced UI performance with lazy loading and caching
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span>Improved error handling and user feedback</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                {/* Bug Fixes */}
                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-orange-600">
                    <Bug className="h-4 w-4" />
                    Bug Fixes
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"></div>
                      <span>
                        Fixed memory leak in long-running playground sessions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"></div>
                      <span>
                        Resolved authentication issues with third-party
                        integrations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Version 2.3.2 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="px-3 py-1 text-sm">
                    v2.3.2
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    November 28, 2024
                  </span>
                </div>
              </div>
              <CardTitle className="text-xl">
                Security Updates & Bug Fixes
              </CardTitle>
              <CardDescription>
                Important security patches and stability improvements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-red-600">
                    <Shield className="h-4 w-4" />
                    Security
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></div>
                      <span>Enhanced API key encryption and rotation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></div>
                      <span>
                        Fixed potential XSS vulnerability in user inputs
                      </span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-orange-600">
                    <Bug className="h-4 w-4" />
                    Bug Fixes
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"></div>
                      <span>Fixed sidebar navigation state persistence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"></div>
                      <span>
                        Resolved timezone display issues in activity logs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"></div>
                      <span>Fixed export functionality for large datasets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Version 2.3.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="px-3 py-1 text-sm">
                    v2.3.0
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    November 10, 2024
                  </span>
                </div>
              </div>
              <CardTitle className="text-xl">
                Enhanced Analytics & Monitoring
              </CardTitle>
              <CardDescription>
                New analytics dashboard and improved monitoring capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-green-600">
                    <Plus className="h-4 w-4" />
                    New Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span>
                        Advanced analytics dashboard with custom metrics
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span>Real-time system health monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
                      <span>Automated alert system for critical events</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-blue-600">
                    <Zap className="h-4 w-4" />
                    Improvements
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span>
                        Improved data visualization with interactive charts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span>
                        Enhanced search functionality across all modules
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Version 2.2.1 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="px-3 py-1 text-sm">
                    v2.2.1
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    October 25, 2024
                  </span>
                </div>
              </div>
              <CardTitle className="text-xl">
                Mobile Experience Improvements
              </CardTitle>
              <CardDescription>
                Better mobile responsiveness and touch interactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-blue-600">
                    <Zap className="h-4 w-4" />
                    Improvements
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span>Optimized mobile layout for all screen sizes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span>Improved touch gestures and interactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span>Faster loading times on mobile devices</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-orange-600">
                    <Bug className="h-4 w-4" />
                    Bug Fixes
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"></div>
                      <span>
                        Fixed modal dialogs not displaying correctly on mobile
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500"></div>
                      <span>Resolved keyboard navigation issues</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline">Load More Versions</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
