import {
  BriefcaseBusiness,
  FileText,
  ReceiptText,
  CheckSquare,
} from "lucide-react";

export const desktopCards = [
  {
    id: 1,
    label: "Billing",
    icon: ReceiptText,
    bgColor: "bg-[#2f46ff]",
    textColor: "text-white",
    rotate: "rotate-[11deg]",
    position: "absolute right-[160px] top-[290px]",
    shadow: "shadow-[0_14px_32px_rgba(47,70,255,0.28)]",
  },

  {
    id: 2,
    label: "Matters",
    icon: BriefcaseBusiness,
    bgColor: "bg-[#e67e2b]",
    textColor: "text-white",
    rotate: "-rotate-[11deg]",
    position: "absolute left-[240px] top-[430px]",
    shadow: "shadow-[0_14px_32px_rgba(230,126,43,0.28)]",
  },

  {
    id: 3,
    label: "Tasks",
    icon: CheckSquare,
    bgColor: "bg-[#2f254d]",
    textColor: "text-[#f08c2b]",
    rotate: "rotate-0",
    position: "absolute left-[calc(50%-180px)] top-[572px]",
    shadow: "shadow-[0_14px_32px_rgba(47,37,77,0.35)]",
  },

  {
    id: 4,
    label: "Documents",
    icon: FileText,
    bgColor: "bg-[#2f254d]",
    textColor: "text-[#f08c2b]",
    rotate: "-rotate-[8deg]",
    position: "absolute right-[-82px] top-[540px]",
    shadow: "shadow-[0_14px_32px_rgba(47,37,77,0.35)]",
  },
];