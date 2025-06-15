import { LandingLayout } from "@/components/layouts/landing-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => (
    <LandingLayout>
      <AboutPage />
    </LandingLayout>
  ),
});

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center">
        <Badge variant="secondary" className="mb-4">
          About Us
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Our Story
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          We're passionate about building modern web applications with the
          latest technologies and best practices.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mt-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-lg">
              To empower developers with modern tools and frameworks that make
              building web applications faster, more reliable, and more
              enjoyable.
            </p>
            <p className="mt-4 text-lg">
              We believe in type safety, developer experience, and performance
              as the cornerstones of great web development.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 text-lg">
              A world where every developer has access to the best tools and
              practices to build amazing user experiences.
            </p>
            <p className="mt-4 text-lg">
              We're committed to open source, community-driven development, and
              continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <p className="mt-4 text-lg">
            The principles that guide everything we do
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We constantly explore new technologies and approaches to solve
                complex problems in simpler ways.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We believe in writing clean, maintainable code with
                comprehensive testing and documentation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We're committed to giving back to the developer community
                through open source and knowledge sharing.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="mt-4 text-lg">The people behind the technology</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="mx-auto h-20 w-20">
                <AvatarImage src="/placeholder-avatar-1.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Lead Developer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm">
                Full-stack developer with 8+ years of experience in React,
                TypeScript, and Node.js.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Avatar className="mx-auto h-20 w-20">
                <AvatarImage src="/placeholder-avatar-2.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <CardTitle>Jane Smith</CardTitle>
              <CardDescription>UI/UX Designer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm">
                Creative designer focused on user experience and modern
                interface design.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Avatar className="mx-auto h-20 w-20">
                <AvatarImage src="/placeholder-avatar-3.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <CardTitle>Mike Johnson</CardTitle>
              <CardDescription>DevOps Engineer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm">
                Infrastructure specialist ensuring scalable and reliable
                deployments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
