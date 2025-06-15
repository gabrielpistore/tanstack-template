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
  ArrowRight,
  CheckCircle,
  Code,
  Copy,
  Play,
  Rocket,
  Terminal,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/documentation/get-started")({
  component: GetStartedPage,
});

function GetStartedPage() {
  const breadcrumbs = [
    { title: "Platform", href: "/" },
    { title: "Documentation", href: "/dashboard/documentation" },
    { title: "Get Started" },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
              <Rocket className="h-8 w-8 text-green-500" />
              Get Started
            </h1>
            <p className="text-muted-foreground">
              Quick start guide to begin using our platform effectively.
            </p>
          </div>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Try Interactive Demo
          </Button>
        </div>

        {/* Quick Start Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Start in 5 Minutes</CardTitle>
            <CardDescription>
              Follow these steps to get up and running quickly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Create Your Account",
                  description:
                    "Sign up for a free account to access all platform features",
                  completed: true,
                  time: "1 min",
                  action: "Already completed",
                },
                {
                  step: 2,
                  title: "Get Your API Key",
                  description:
                    "Generate your first API key to authenticate requests",
                  completed: false,
                  time: "30 sec",
                  action: "Generate API Key",
                },
                {
                  step: 3,
                  title: "Make Your First Request",
                  description:
                    "Test the API with a simple request to verify everything works",
                  completed: false,
                  time: "2 min",
                  action: "Try Example",
                },
                {
                  step: 4,
                  title: "Explore the Playground",
                  description:
                    "Use our interactive playground to experiment with different models",
                  completed: false,
                  time: "5 min",
                  action: "Open Playground",
                },
                {
                  step: 5,
                  title: "Build Your First App",
                  description:
                    "Follow our tutorial to create a simple application",
                  completed: false,
                  time: "15 min",
                  action: "Start Tutorial",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center space-x-4 rounded-lg border p-4"
                >
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                    {item.completed ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <span className="text-primary text-lg font-bold">
                        {item.step}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {item.time}
                    </Badge>
                  </div>
                  <Button
                    variant={item.completed ? "outline" : "default"}
                    size="sm"
                  >
                    {item.action}
                    {!item.completed && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* API Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              API Quick Start
            </CardTitle>
            <CardDescription>
              Make your first API call in minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium">1. Install the SDK</h4>
              <div className="bg-muted rounded-lg p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-sm">
                    npm install @platform/sdk
                  </span>
                  <Button variant="ghost" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">2. Initialize the Client</h4>
              <div className="bg-muted rounded-lg p-4">
                <pre className="text-sm">
                  {`import { PlatformClient } from '@platform/sdk';

const client = new PlatformClient({
  apiKey: 'your-api-key-here'
});`}
                </pre>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Code
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">3. Make Your First Request</h4>
              <div className="bg-muted rounded-lg p-4">
                <pre className="text-sm">
                  {`const response = await client.chat.completions.create({
  model: 'genesis',
  messages: [
    { role: 'user', content: 'Hello, world!' }
  ]
});

console.log(response.choices[0].message.content);`}
                </pre>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Code
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Language Examples</CardTitle>
            <CardDescription>
              Code examples in popular programming languages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  language: "Python",
                  code: `import requests

response = requests.post(
  'https://api.platform.com/v1/chat/completions',
  headers={'Authorization': 'Bearer YOUR_API_KEY'},
                  json={
    'model': 'genesis',
    'messages': [{'role': 'user', 'content': 'Hello!'}]
  }
)

print(response.json())`,
                },
                {
                  language: "JavaScript",
                  code: `fetch('https://api.platform.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'genesis',
    messages: [{role: 'user', content: 'Hello!'}]
  })
})
.then(response => response.json())
.then(data => console.log(data));`,
                },
                {
                  language: "cURL",
                  code: `curl -X POST https://api.platform.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "genesis",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`,
                },
                {
                  language: "Go",
                  code: `package main

import (
  "bytes"
  "encoding/json"
  "net/http"
)

func main() {
  payload := map[string]interface{}{
    "model": "genesis",
    "messages": []map[string]string{
      {"role": "user", "content": "Hello!"},
    },
  }
  
  // Make request...
}`,
                },
              ].map((example) => (
                <Card key={example.language} className="h-fit">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">
                        {example.language}
                      </CardTitle>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted overflow-x-auto rounded p-3 text-xs">
                      {example.code}
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Continue your journey with these resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "API Reference",
                  description: "Complete documentation of all API endpoints",
                  icon: Code,
                  link: "/dashboard/documentation/api-reference",
                },
                {
                  title: "Tutorials",
                  description: "Step-by-step guides for common use cases",
                  icon: Play,
                  link: "/dashboard/documentation/tutorials",
                },
                {
                  title: "Playground",
                  description: "Interactive environment to test and experiment",
                  icon: Terminal,
                  link: "/dashboard/playground",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="cursor-pointer transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <item.icon className="text-primary h-5 w-5" />
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between"
                    >
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help & Support */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>Get support when you need it</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="outline" className="flex-1">
                Join Discord Community
              </Button>
              <Button variant="outline" className="flex-1">
                Browse FAQ
              </Button>
              <Button className="flex-1">Contact Support</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
