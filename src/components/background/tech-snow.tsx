"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Tech symbols to display as falling elements
const techSymbols = [
  "</>",
  "{ }",
  "[ ]",
  "()",
  "||",
  "&&",
  "=>",
  "==",
  "===",
  "!=",
  "01",
  "10",
  "function",
  "const",
  "let",
  "var",
  "if",
  "for",
  "while",
  "API",
  "SQL",
  "HTTP",
  "JSON",
  "HTML",
  "CSS",
  "JS",
  "TS",
  "UI",
  "UX",
]

// Tech-themed colors
const techColors = [
  "#0ea5e9", // Sky blue
  "#2563eb", // Blue
  "#4f46e5", // Indigo
  "#8b5cf6", // Violet
  "#a855f7", // Purple
  "#06b6d4", // Cyan
  "#22c55e", // Green
  "#64748b", // Slate
]

// Client-side only component for the actual snow animation
export default function TechSnow() {
  // Use state to track if we're in the browser
  const [isMounted, setIsMounted] = useState(false)

  // Only run on the client after mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Return null during SSR and initial render
  if (!isMounted) {
    return null
  }

  // Only render the actual snow component on the client
  return <ClientTechSnow />
}

// Separate component that only runs on the client
function ClientTechSnow() {
  const [elements, setElements] = useState<
    Array<{
      id: number
      x: number
      symbol: string
      color: string
      size: number
      speed: number
      delay: number
    }>
  >([])

  useEffect(() => {
    // Generate elements
    const width = window.innerWidth

    const newElements = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)],
      color: techColors[Math.floor(Math.random() * techColors.length)],
      size: Math.random() * 12 + 8,
      speed: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }))

    setElements(newElements)

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth
      setElements((prev) =>
        prev.map((element) => ({
          ...element,
          x: (element.x / width) * newWidth,
        })),
      )
    }

    // Throttle resize events
    let resizeTimer: NodeJS.Timeout
    const throttledResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(handleResize, 200)
    }

    window.addEventListener("resize", throttledResize)
    return () => {
      window.removeEventListener("resize", throttledResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full z-0 select-none" style={{ pointerEvents: "none" }}>
      <svg className="w-full h-full">
        <title>Tech Snow</title>
        {elements.map((element) => (
          <FallingElement key={element.id} {...element} />
        ))}
      </svg>
    </div>
  )
}

function FallingElement({
  x,
  symbol,
  color,
  size,
  speed,
  delay,
}: {
  x: number
  symbol: string
  color: string
  size: number
  speed: number
  delay: number
}) {
  return (
    <motion.g
      initial={{ y: -size * 2, x, opacity: 0 }}
      animate={{
        y: window.innerHeight + size * 2,
        x: x + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 100,
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: speed,
        times: [0, 0.1, 0.9, 1],
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "linear",
      }}
    >
      <circle
        cx={0}
        cy={0}
        r={size}
        fill="rgba(15, 23, 42, 0.03)"
        stroke={color}
        strokeWidth={0.8}
        strokeOpacity={0.4}
      />
      <text
        x={0}
        y={0}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
        fontSize={size * 0.8}
        fontFamily="monospace"
      >
        {symbol}
      </text>
    </motion.g>
  )
}
