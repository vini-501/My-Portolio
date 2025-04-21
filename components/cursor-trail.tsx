"use client"

import { useEffect, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  life: number
  maxLife: number
  initialSize: number
}

export default function CursorTrail() {
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Check if we're on the home section
    const checkIfHome = () => {
      const homeSection = document.getElementById("home")
      if (!homeSection) return false

      const rect = homeSection.getBoundingClientRect()
      const isVisible = rect.top <= 0 && rect.bottom >= window.innerHeight * 0.5
      setIsHome(isVisible)
    }

    // Initial check
    checkIfHome()

    // Check on scroll
   window.addEventListener("scroll", checkIfHome)

    // Create canvas
    const canvas = document.createElement("canvas")
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "100"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    // Particles array
    const particles: Particle[] = []
    let mouseX = 0
    let mouseY = 0
    let prevMouseX = 0
    let prevMouseY = 0

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      prevMouseX = mouseX
      prevMouseY = mouseY
      mouseX = e.clientX
      mouseY = e.clientY

      // Only add particles if we're on the home section
      if (isHome) {
        // Add particles based on mouse movement speed
        const speed = Math.sqrt(Math.pow(mouseX - prevMouseX, 2) + Math.pow(mouseY - prevMouseY, 2))
        const particlesToAdd = Math.min(3, Math.floor(speed / 10) + 1)

        for (let i = 0; i < particlesToAdd; i++) {
          const initialSize = Math.random() * 10 + 5
          particles.push({
            x: mouseX + (Math.random() - 0.5) * 10,
            y: mouseY + (Math.random() - 0.5) * 10,
            size: initialSize,
            initialSize: initialSize,
            speedX: (Math.random() - 0.5) * 1,
            speedY: -Math.random() * 0.5 - 0.5, // Slight upward drift
            life: 0,
            maxLife: Math.random() * 40 + 40,
          })
        }
      }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      if (!ctx) return

      // Clear canvas with transparent fill to create trail effect
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      ctx.globalCompositeOperation = 'lighter'
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update particle
        p.x += p.speedX
        p.y += p.speedY
        p.life++
        
        // Gradually increase size
        p.size = p.initialSize * (1 + p.life / p.maxLife)

        // Calculate opacity based on life
        const opacity = (1 - p.life / p.maxLife) * 0.3

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Remove dead particles
        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
          i--
        }
      }
      ctx.globalCompositeOperation = 'source-over'

      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", checkIfHome)
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [isHome])

  return null
}
