"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-background to-background/10"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-1 h-32 bg-midnight-blue rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-40 left-1/3 w-1 h-24 bg-midnight-purple rounded-full animate-pulse opacity-20"></div>
        <div className="absolute bottom-40 left-1/5 w-1 h-40 bg-midnight-indigo rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-60 right-1/4 w-1 h-32 bg-midnight-deepBlue rounded-full animate-pulse opacity-20"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-24 bg-midnight-blue rounded-full animate-pulse opacity-20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 relative"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-midnight-blue via-midnight-purple to-midnight-indigo opacity-50 blur-md animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border-2 border-midnight-blue"></div>
          <Image
            src="/vi4.jpg"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-full object-cover border-2 border-midnight-blue p-1 relative z-10"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-3xl mx-auto z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-midnight-blue">Vinay Kumar S</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-midnight-purple">Aspiring Data Analyst | Tech Enthusiast</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
          Building future-ready tech, one bold idea at a time.
          <br />
          Passionate about creating innovative solutions with data.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-midnight-blue px-8 text-sm font-medium text-white transition-all hover:bg-midnight-blue/90 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-sm"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-md border border-midnight-purple bg-transparent px-8 text-sm font-medium text-midnight-purple transition-all hover:bg-midnight-purple/10 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-sm"
          >
            View My Work
          </a>
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <a
            href="https://github.com/vini-501"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-midnight-blue transition-colors hover:text-midnight-blue/80 hover:bg-background/20"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-kumar-694186293"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-midnight-purple transition-colors hover:text-midnight-purple/80 hover:bg-background/20"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:svinaykumar501@gmail.com"
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-midnight-indigo transition-colors hover:text-midnight-indigo/80 hover:bg-background/20"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll down"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-midnight-blue transition-colors hover:text-midnight-blue/80 hover:bg-background/20"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
