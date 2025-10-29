import { GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { NAVIGATION_ITEMS } from "@/constants/navigation";

/**
 * Application sidebar component
 * Displays navigation menu with collapsible functionality
 */
export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r-0">
      <SidebarContent className="bg-sidebar">
        <div className="p-6 flex items-center justify-center border-b border-sidebar-border">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
          </div>
        </div>

        <SidebarGroup className="mt-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {NAVIGATION_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground"
                  >
                    <NavLink to={item.url} end>
                      <item.icon className="w-5 h-5" />
                      {open && <span className="ml-3">{item.title}</span>}
                      {open && item.badge && (
                        <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
