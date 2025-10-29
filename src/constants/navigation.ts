/**
 * Navigation configuration
 */

import { Home, GraduationCap, MapPin, Briefcase, FileText, Settings } from "lucide-react";
import { NavigationItem } from "@/types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "Students", url: "/students", icon: GraduationCap },
  { title: "Center", url: "/center", icon: MapPin },
  { title: "Training", url: "/training", icon: Briefcase },
  { title: "Applications", url: "/applications", icon: FileText, badge: "6" },
  { title: "Settings", url: "/settings", icon: Settings },
];
