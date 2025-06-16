import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  CreditCard,
  Frame,
  GalleryVerticalEnd,
  Heart,
  Map,
  PieChart,
  Server,
  Settings2,
  ShoppingCart,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/dashboard/nav-main";
import { NavProjects } from "@/components/dashboard/nav-projects";
import { NavUser } from "@/components/dashboard/nav-user";
import { TeamSwitcher } from "@/components/dashboard/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "/dashboard/playground",
      icon: SquareTerminal,
      items: [
        {
          title: "History",
          url: "/dashboard/playground/history",
        },
        {
          title: "Starred",
          url: "/dashboard/playground/starred",
        },
        {
          title: "Settings",
          url: "/dashboard/playground/settings",
        },
      ],
    },
    {
      title: "Models",
      url: "/dashboard/models",
      icon: Bot,
      items: [
        {
          title: "Overview",
          url: "/dashboard/models",
        },
        {
          title: "Genesis",
          url: "/dashboard/models/genesis",
        },
        {
          title: "Explorer",
          url: "/dashboard/models/explorer",
        },
        {
          title: "Quantum",
          url: "/dashboard/models/quantum",
        },
      ],
    },
    {
      title: "Documentation",
      url: "/dashboard/documentation",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/documentation/introduction",
        },
        {
          title: "Get Started",
          url: "/dashboard/documentation/get-started",
        },
        {
          title: "Tutorials",
          url: "/dashboard/documentation/tutorials",
        },
        {
          title: "Changelog",
          url: "/dashboard/documentation/changelog",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings/general",
        },
        {
          title: "Team",
          url: "/dashboard/settings/team",
        },
        {
          title: "Billing",
          url: "/dashboard/settings/billing",
        },
        {
          title: "Limits",
          url: "/dashboard/settings/limits",
        },
      ],
    },
    {
      title: "Backend",
      url: "/dashboard/products",
      icon: Server,
      items: [
        {
          title: "Products",
          url: "/dashboard/products",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/dashboard/projects/design-engineering",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/dashboard/projects/sales-marketing",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/dashboard/projects/travel",
      icon: Map,
    },
    {
      name: "E-Commerce",
      url: "/dashboard/projects/e-commerce",
      icon: ShoppingCart,
    },
    {
      name: "Fintech",
      url: "/dashboard/projects/fintech",
      icon: CreditCard,
    },
    {
      name: "Healthcare",
      url: "/dashboard/projects/healthcare",
      icon: Heart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
