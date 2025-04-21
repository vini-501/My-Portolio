"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Terminal, Smartphone, Figma } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8" />,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8" />,
    items: ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"],
  },
  {
    category: "Development Tools",
    icon: <Terminal className="h-8 w-8" />,
    items: ["Git", "GitHub", "VS Code", "Docker", "CI/CD", "Jest"],
  },
  {
    category: "Web Technologies",
    icon: <Globe className="h-8 w-8" />,
    items: ["Responsive Design", "PWA", "SEO", "Web Accessibility", "Performance Optimization"],
  },
  {
    category: "Programming",
    icon: <Code className="h-8 w-8" />,
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-8 w-8" />,
    items: ["React Native", "Flutter", "Mobile-First Design"],
  },
  {
    category: "Design",
    icon: <Figma className="h-8 w-8" />,
    items: ["Figma", "Adobe XD", "UI/UX Design", "Wireframing", "Prototyping"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools in web development. Here's an overview of my technical
            skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-primary">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
