"use client"

import { useState, useLayoutEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [clickedItem, setClickedItem] = useState("")
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (sectionId: string) => {
    if (typeof window === 'undefined') return
    
    setClickedItem(sectionId)
    setTimeout(() => setClickedItem(""), 500) // Reset after animation completes

    // Smooth scroll with animation
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "resume", "contact"]
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

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-midnight-blue">
          Portfolio
        </Link>

        {isDesktop ? (
          <nav className="flex items-center gap-8">
            <Link
              href="#home"
              className={`text-sm font-medium nav-link transition-all duration-300 ${
                clickedItem === "home" ? "nav-click-animation" : ""
              } ${activeSection === "home" ? "text-midnight-blue" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("home")
              }}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`text-sm font-medium nav-link transition-all duration-300 ${
                clickedItem === "about" ? "nav-click-animation" : ""
              } ${activeSection === "about" ? "text-midnight-blue" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("about")
              }}
            >
              About
            </Link>
            <Link
              href="#projects"
              className={`text-sm font-medium nav-link transition-all duration-300 ${
                clickedItem === "projects" ? "nav-click-animation" : ""
              } ${activeSection === "projects" ? "text-midnight-blue" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("projects")
              }}
            >
              Projects
            </Link>
            <Link
              href="#resume"
              className={`text-sm font-medium nav-link transition-all duration-300 ${
                clickedItem === "resume" ? "nav-click-animation" : ""
              } ${activeSection === "resume" ? "text-midnight-blue" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("resume")
              }}
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium nav-link transition-all duration-300 ${
                clickedItem === "contact" ? "nav-click-animation" : ""
              } ${activeSection === "contact" ? "text-midnight-blue" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("contact")
              }}
            >
              Contact
            </Link>
          </nav>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}
      </div>

      {/* Mobile menu */}
      {!isDesktop && isMenuOpen && (
        <div className="container pb-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-sm font-medium transition-colors hover:text-midnight-blue"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("home")
                setIsMenuOpen(false)
              }}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-midnight-blue"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("about")
                setIsMenuOpen(false)
              }}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-midnight-blue"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("projects")
                setIsMenuOpen(false)
              }}
            >
              Projects
            </Link>
            <Link
              href="#resume"
              className="text-sm font-medium transition-colors hover:text-midnight-blue"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("resume")
                setIsMenuOpen(false)
              }}
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-midnight-blue"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("contact")
                setIsMenuOpen(false)
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
