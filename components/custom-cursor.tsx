"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateCursor, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updateCursor)
    }
  }, [])

  // Ocultar cursor nativo
  useEffect(() => {
    document.body.style.cursor = "none"
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-[10000] rounded-full bg-primary"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "16px",
        height: "16px",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))",
      }}
    />
  )
}

