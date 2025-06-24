"use client"

import { useState, useEffect } from "react"
import { Menu, X, User, FileUp, MessageSquare, Brush, Linkedin, Youtube, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Portfolio",
    href: "#portfolio",
    icon: User,
  },
  {
    name: "Testimonials",
    href: "#testimonials",
    icon: MessageSquare,
  },
 ]

const socialLinks = [
  {
    name: "Vision Board",
    href: "https://art.dianedacanay.com/",
    icon: Brush,
  },
  {
    name: "PDF to Quiz Maker",
    href: "https://quiz-maker.dianedacanay.com/",
    icon: FileUp,
  },

  {
    href: "https://www.linkedin.com/in/dianedacanay",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@diane.dacanay",
    icon: Youtube,
    label: "YouTube",
  },
  {
    href: "https://wa.me/+639310780804?text=Hi%20there!",
    icon: MessageCircle,
    label: "WhatsApp",
  },
  {
    href: "mailto:hello@dianedacanay.com",
    icon: Mail,
    label: "Email",
  },
]

interface FloatingNavProps {
  showSocialInNav?: boolean
}

export default function FloatingNav({ showSocialInNav = false }: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-blue-900/20 backdrop-blur-md rounded-full p-2 shadow-2xl border border-blue-400/30">
          <div className="flex flex-col gap-2">
            {/* Navigation Items */}
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = activeSection === item.href.substring(1)

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110",
                    isActive
                      ? "bg-blue-600 text-white shadow-lg border border-blue-400"
                      : "bg-blue-800/30 text-blue-100 hover:bg-blue-700/40 border border-blue-600/30",
                  )}
                  aria-label={`Navigate to ${item.name}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="absolute right-14 bg-blue-900 text-blue-100 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-blue-700">
                    {item.name}
                  </span>
                </button>
              )
            })}

            {/* Divider */}
            <div className="w-8 h-px bg-blue-600/30 mx-auto my-1" />

            {/* Social Links - Desktop Only */}
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-800/30 text-blue-100 hover:bg-blue-700/40 border border-blue-600/30 transition-all duration-300 hover:scale-110"
                  aria-label={`Visit ${link.label}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="absolute right-14 bg-blue-900 text-blue-100 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-blue-700">
                    {link.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Navigation */}
      <nav className="lg:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-12 h-12 bg-blue-900/30 backdrop-blur-md rounded-full shadow-2xl border border-blue-400/30 text-blue-100 transition-all duration-300 hover:bg-blue-800/40"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-blue-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-400/30 p-4 min-w-[200px]">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = activeSection === item.href.substring(1)

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left",
                      isActive ? "bg-blue-600 text-white" : "text-blue-100 hover:bg-blue-800/40",
                    )}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
