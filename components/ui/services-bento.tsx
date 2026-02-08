'use client'

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

type BentoItem = {
  title: string
  description: string
  icon?: string
  color?: string
  className?: string
  link?: string
}

export function BentoGrid({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoGridItem({
  title,
  description,
  icon,
  color = "from-blue-500 to-indigo-500",
  className,
  link,
}: BentoItem) {
  const Icon = icon ? (LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon) : null

  return (
    <div
      className={cn(
        "group/bento row-span-1 rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {/* Icon / Gradient background */}
      <div className={cn(
        "h-12 w-12 rounded-lg flex items-center justify-center bg-gradient-to-br",
        color
      )}>
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>

      {link && (
        <a
          href={link}
          className="mt-auto text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Learn more →
        </a>
      )}
    </div>
  )
}