"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed w-20 h-20 rounded-full blur-2xl opacity-40 -translate-x-1/2 -translate-y-1/2 z-40 bg-linear-to-r from-accent via-cyan-400 to-transparent"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </>
  )
}
