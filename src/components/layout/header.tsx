"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Desktop "Get in touch" button */}
            <Button asChild className="hidden md:flex">
              <Link href="/#contact">Get in touch</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b z-40">
            <nav className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild onClick={() => setIsMenuOpen(false)}>
                <Link href="/#contact">Get in touch</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}