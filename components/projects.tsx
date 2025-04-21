"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Heart Sense",
    description:
      "It analyzes patient data using machine learning algorithms and offers intelligent, conversational insights via a Gen AI interface—aligning with the UN Sustainable Development Goals for Good Health and Well-being.",
    image: "/p1.jpeg",
    tags: ["Python", "Pandas", "SciKit Learn", "Streamlit","Gemini API"],
    liveUrl: "https://heart-sensing.streamlit.app/",
    githubUrl: "https://github.com/vini-501/Heart__sense",
  },
  {
    id: 2,
    title: "AI Skill Gap Analyzer",
    description: "An intelligent Streamlit chatbot that analyzes resumes or selected domains to identify personalized skill gaps, using Gemini AI. It recommends skills to learn, estimated learning time, curated roadmaps, and project ideas—making users job-ready for 2027.",
    image: "/p2.webp",
    tags: ["Python","Streamlit","Gemini API","Open Router","Firebase"],
    liveUrl: "https://skillgapanalyzerchatbot-vini.streamlit.app/",
    githubUrl: "https://github.com/vini-501/Skill_Gap_Analyzer_ChatBot",
  },
  {
    id: 3,
    title: "EDA Generator",
    description: "A smart tool that automates Exploratory Data Analysis using Gen AI. Upload your dataset and instantly receive insights, visualizations, and a summary of key patterns—saving hours of manual effort and accelerating data understanding.",
    image: "/p3.jpg",
    tags: ["Python", "Pandas","Streamlit","Matplotlib","SeaBorn","Open Router"],
    liveUrl: "https://project3.example.com",
    githubUrl: "https://github.com/vini-501/Exploratory-data-analysis",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted to solve specific problems and
            showcase different skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <a href="https://github.com/vini-501?tab=repositories" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
