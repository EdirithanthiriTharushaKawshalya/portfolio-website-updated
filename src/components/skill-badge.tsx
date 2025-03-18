import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  className?: string
}

export default function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-4 bg-background rounded-lg border shadow-sm hover:shadow-md transition-shadow",
        className,
      )}
    >
      <span className="font-medium">{name}</span>
    </div>
  )
}

