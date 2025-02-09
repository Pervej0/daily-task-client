"use client";

import { AppSidebar } from "@/components/dashboard/app-sidebar";
import React, { Suspense, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

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
      <Suspense fallback={<Loading />}> {children}</Suspense>
    </SidebarProvider>
  );
};

export default Layout;
