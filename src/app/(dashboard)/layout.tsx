"use client";

import { AppSidebar } from "@/components/dashboard/app-sidebar";
import React, { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  const userInfo = getUserInfo();

  useEffect(() => {
    if (!userInfo) {
      return router.push("/login");
    }
  }, [userInfo, router]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      {children}
    </SidebarProvider>
  );
};

export default Layout;
