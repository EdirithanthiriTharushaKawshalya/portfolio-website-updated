"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"

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
  const controls = useAnimationControls()
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 1000

  useEffect(() => {
    controls.start({
      y: [
        -size * 2, // Start above the viewport
        windowHeight + size * 2, // End below the viewport
      ],
      x: [
        x,
        x + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 100, // Slight horizontal drift
      ],
      opacity: [
        0, // Start transparent
        0.8, // Become visible
        0.8, // Stay visible
        0, // Fade out at the bottom
      ],
      transition: {
        duration: speed,
        times: [0, 0.1, 0.9, 1],
        repeat: Number.POSITIVE_INFINITY,
        delay: delay,
        ease: "linear",
      },
    })
  }, [controls, x, size, windowHeight, speed, delay])

  return (
    <motion.g animate={controls}>
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

export default function TechSnow() {
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
  const containerRef = useRef<HTMLDivElement>(null)

  const generateElements = () => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1000

    const newElements = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)],
      color: techColors[Math.floor(Math.random() * techColors.length)],
      size: Math.random() * 12 + 8,
      speed: Math.random() * 15 + 10, // Random speed between 10-25 seconds
      delay: Math.random() * 10, // Random delay for a more natural effect
    }))

    setElements(newElements)
  }

  useEffect(() => {
    generateElements()

    const handleResize = () => {
      generateElements()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <svg className="w-full h-full">
        <title>Tech Snow</title>
        {elements.map((element) => (
          <FallingElement key={element.id} {...element} />
        ))}
      </svg>
    </div>
  )
}

