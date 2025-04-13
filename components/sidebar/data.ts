import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
} from "@tabler/icons-react";
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react";
import { type SidebarData } from "./types";

export const sidebarData: SidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Shadcn Admin",
      logo: Command,
      plan: "Vite + ShadcnUI",
    },
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
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/" as any,
          icon: IconLayoutDashboard,
        },
        {
          title: "Tasks",
          url: "/tasks" as any,
          icon: IconChecklist,
        },
        {
          title: "Apps",
          url: "/apps" as any,
          icon: IconPackages,
        },
        {
          title: "Chats",
          url: "/chats" as any,
          badge: "3",
          icon: IconMessages,
        },
        {
          title: "Users",
          url: "/users" as any,
          icon: IconUsers,
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Auth",
          icon: IconLockAccess,
          items: [
            {
              title: "Sign In",
              url: "/sign-up" as any,
            },
            {
              title: "Sign In (2 Col)",
              url: "/sign-up-2" as any,
            },
            {
              title: "Sign Up",
              url: "/sign-up" as any,
            },
            {
              title: "Forgot Password",
              url: "/forgot-password" as any,
            },
            {
              title: "OTP",
              url: "/otp",
            },
          ],
        },
      ],
    },
  ],
};
