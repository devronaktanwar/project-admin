"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  CalendarDays,
  Stethoscope,
  Users,
  Receipt,
  BarChart,
  Bell,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const dashboardItems = [
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "Appointments",
    url: "/dashboard/appointments",
    icon: <CalendarDays size={20} />,
  },
  {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: <Bell size={20} />,
  },
];

const managementItems = [
  {
    title: "Doctors",
    url: "/dashboard/doctors",
    icon: <Stethoscope size={20} />,
  },
  {
    title: "Patients",
    url: "/dashboard/patients",
    icon: <Users size={20} />,
  },
  {
    title: "Add Appointment",
    url: "/dashboard/add-appointment",
    icon: <CalendarDays size={20} />,
  },
];

const financeItems = [
  {
    title: "Billing",
    url: "/dashboard/billing",
    icon: <Receipt size={20} />,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: <BarChart size={20} />,
  },
];

const settingsItems = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: <User size={20} />,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: <Settings size={20} />,
  },
  {
    title: "Logout",
    url: "/",
    icon: <LogOut size={20} />,
  },
];

const groupItems = [
  {
    label: "Dashboard",
    items: dashboardItems,
  },
  {
    label: "Management",
    items: managementItems,
  },
  {
    label: "Finance",
    items: financeItems,
  },
  {
    label: "Account",
    items: settingsItems,
  },
];

const AppSidebar: FC = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent className="bg-white p-2 text-sm">
        <div className="flex justify-center py-4">
          <h2 className="text-2xl font-bold">
            <Image src="/logo.png" height={80} width={120} alt="Logo" />
          </h2>
        </div>
        {groupItems.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel className="uppercase tracking-widest text-gray-500">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="rounded-lg">
                {group.items.map((item) => {
                  const isActive = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className={`flex items-center gap-2 rounded-md px-2 py-5 transition-all ${
                            isActive
                              ? "bg-primary-light text-primary"
                              : "text-gray-500 hover:bg-primary/10"
                          }`}
                        >
                          <div>{item.icon}</div>
                          <span className="text-sm">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
