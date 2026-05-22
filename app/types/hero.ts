import { LucideIcon } from "lucide-react";

export interface FloatingCardItem {
  id: number;
  label: string;
  icon: LucideIcon;
  bgColor: string;
  textColor?: string;
  rotate: string;
  position: string;
  shadow: string;
  iconRotate?: string;
  size?: "sm" | "lg";
}