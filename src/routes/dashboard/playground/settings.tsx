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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { createFileRoute } from "@tanstack/react-router";
import { Bell, Code, Settings, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/dashboard/playground/settings")({
  component: PlaygroundSettingsPage,
});

function PlaygroundSettingsPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Playground", href: "/dashboard/playground" },
    { title: "Settings" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Settings className="h-8 w-8" />
              Playground Settings
            </h1>
            <p className="text-muted-foreground">
              Configure your playground environment and preferences.
            </p>
          </div>
          <Button>Save Changes</Button>
        </div>

        {/* Editor Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Editor Configuration
            </CardTitle>
            <CardDescription>
              Customize your code editor experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="theme">Editor Theme</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="monokai">Monokai</SelectItem>
                    <SelectItem value="github">GitHub</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12px</SelectItem>
                    <SelectItem value="14">14px</SelectItem>
                    <SelectItem value="16">16px</SelectItem>
                    <SelectItem value="18">18px</SelectItem>
                    <SelectItem value="20">20px</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tab-size">Tab Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tab size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 spaces</SelectItem>
                    <SelectItem value="4">4 spaces</SelectItem>
                    <SelectItem value="8">8 spaces</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Default Language</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="sql">SQL</SelectItem>
                    <SelectItem value="css">CSS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Line Numbers</Label>
                  <p className="text-muted-foreground text-sm">
                    Show line numbers in the editor
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Word Wrap</Label>
                  <p className="text-muted-foreground text-sm">
                    Wrap long lines automatically
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-completion</Label>
                  <p className="text-muted-foreground text-sm">
                    Enable intelligent code completion
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Syntax Highlighting</Label>
                  <p className="text-muted-foreground text-sm">
                    Highlight code syntax
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Execution Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Execution Settings
            </CardTitle>
            <CardDescription>Configure how your code runs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="timeout">Execution Timeout (seconds)</Label>
                <Input type="number" defaultValue="30" min="5" max="300" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="memory">Memory Limit (MB)</Label>
                <Input type="number" defaultValue="512" min="128" max="2048" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-run on Change</Label>
                  <p className="text-muted-foreground text-sm">
                    Automatically execute code when changes are made
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Clear Console on Run</Label>
                  <p className="text-muted-foreground text-sm">
                    Clear console output before each execution
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Execution Time</Label>
                  <p className="text-muted-foreground text-sm">
                    Display execution duration in console
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Control your playground privacy and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Private by Default</Label>
                <p className="text-muted-foreground text-sm">
                  Make new playgrounds private automatically
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Save History</Label>
                <p className="text-muted-foreground text-sm">
                  Keep execution history for analysis
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Share Analytics</Label>
                <p className="text-muted-foreground text-sm">
                  Help improve the platform by sharing usage data
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Manage your playground notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Execution Completed</Label>
                <p className="text-muted-foreground text-sm">
                  Notify when long-running code finishes
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Error Notifications</Label>
                <p className="text-muted-foreground text-sm">
                  Get notified about execution errors
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Weekly Summary</Label>
                <p className="text-muted-foreground text-sm">
                  Receive weekly usage statistics
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Keyboard Shortcuts */}
        <Card>
          <CardHeader>
            <CardTitle>Keyboard Shortcuts</CardTitle>
            <CardDescription>
              Learn and customize keyboard shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { action: "Run Code", shortcut: "Ctrl + Enter" },
                { action: "Save Playground", shortcut: "Ctrl + S" },
                { action: "New Playground", shortcut: "Ctrl + N" },
                { action: "Toggle Console", shortcut: "Ctrl + `" },
                { action: "Format Code", shortcut: "Shift + Alt + F" },
                { action: "Find & Replace", shortcut: "Ctrl + H" },
              ].map((shortcut) => (
                <div
                  key={shortcut.action}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <span className="font-medium">{shortcut.action}</span>
                  <Badge variant="outline">{shortcut.shortcut}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
