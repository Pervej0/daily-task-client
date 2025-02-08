import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import sidebarItems from "@/utils/sidebarItems";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar className="px-4 border">
      <SidebarHeader className="text-center py-5">
        <h3 className="text-xl font-bold font-serif">Daily Task</h3>
      </SidebarHeader>
      <SidebarContent>
        {sidebarItems.map((item, index) => (
          <SidebarGroup key={index}>
            <Link href={item.path} className="flex gap-2 items-center">
              <button>{<item.icon />}</button>
              <span>{item.title}</span>
            </Link>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
