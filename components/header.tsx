"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur shadow-lg" : "bg-linear-to-b from-primary to-primary/80"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
           <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 shrink-0">
              {/* Glow / Blur Behind */}
              <div className="absolute inset-0 bg-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all" />
               {/* Logo Container */}
               <div className="relative w-full h-full rounded-xl overflow-hidden bg-black shadow-lg group-hover:shadow-cyan-500/50">
               <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-cover"
                priority />
              </div>
            </div>
                 
                 {/* Text */}
                 <div className="flex flex-col">
                  <span className="font-bold text-lg text-primary-foreground">KushiraX</span>
                  <span className="text-xs text-accent font-semibold">Technology</span>
                  </div>
            </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-accent transition-colors font-medium text-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 glow-cyan"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-primary-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold text-center hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
