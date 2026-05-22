import { FloatingCardItem } from "@/app/types/hero";

interface Props extends FloatingCardItem {}

export default function FloatingCard({
  label,
  icon: Icon,
  bgColor,
  textColor,
  rotate,
  position,
  shadow,
}: Props) {
  return (
    <div
      className={`
        ${position}
        ${bgColor}
        ${rotate}
        ${shadow}
        flex items-center gap-3
        rounded-full
        px-8 py-5
        backdrop-blur-md
        transition-all duration-300
        hover:scale-105
        animate-float
      `}
    >
      <div className="rounded-full bg-white/10 p-3">
        <Icon className={`h-8 w-8 ${textColor}`} />
      </div>

      <span
        className={`text-[40px] font-normal tracking-tight ${textColor}`}
      >
        {label}
      </span>
    </div>
  );
}