import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import TechSnow from "@/components/background/tech-snow"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tharusha Kawshalya",
  description:
    "Portfolio of Tharusha Kawshalya - A passionate UI/UX designer and fullstack developer dedicated to crafting intuitive and engaging digital experiences.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* The TechSnow component will only render on the client */}
        <TechSnow />

        {/* The children will be rendered above the background */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
