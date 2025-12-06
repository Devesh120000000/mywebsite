"use client"

import { useState } from "react"

interface ScrollBannerProps {
  items: string[]
  speed?: number
}

export default function ScrollBanner({ items, speed = 20 }: ScrollBannerProps) {
  const [isAnimating, setIsAnimating] = useState(true)

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-primary via-primary/80 to-primary py-4">
      <div
        className="flex gap-8"
        style={{ animation: isAnimating ? `scroll-horizontal ${speed}s linear infinite` : "none" }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-6 py-2 rounded-lg bg-primary-foreground/10 border border-accent/30 text-primary-foreground font-semibold whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
