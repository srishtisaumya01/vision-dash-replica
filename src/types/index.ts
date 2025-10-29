/**
 * Core type definitions for the Education Management Dashboard
 */

export interface NavigationItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export interface Application {
  id: number;
  name: string;
  fatherName: string;
  status: string;
}

export interface Coordinator {
  name: string;
  school: string;
  color: string;
}

export interface TrainingProgram {
  title: string;
  description: string;
  variant: "blue" | "pink";
}

export interface Notification {
  title: string;
  description: string;
  bgColor: string;
  iconType: "users" | "school" | "file";
}
