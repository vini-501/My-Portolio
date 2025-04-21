"use client";

import { motion } from "framer-motion";
import { Code, Layout, CheckCircle, PenToolIcon as Tool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const tools = [
    "VS Code",
    "Git",
    "Figma",
    "Docker",
    "Google Colab",
    "Jupyter Notebook",
    "Power BI",
    "Tableau",
    "Streamlit community cloud",
  ];

  const languages = ["Python", "C", "HTML", "CSS", "JavaScript", "SQL", "Java"];

  const frameworks = [
    "Flask",
    "Streamlit",
    "Django",
    "React",
    "Node.js",
    "Tailwind CSS",
  ];

  const metrics = [
    { label: "Projects Completed", value: "5+" },
    { label: "Certifications", value: "4+" },
    { label: "Hackathons Participated", value: "4+" },
    { label: "Wins", value: "1" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-background/90"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 section-heading inline-block">
            About Me
          </h2>

          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-lg text-muted-foreground mb-6">
              I'm a future-ready Data Science student (B.E. 2027) with a
              relentless drive to turn cutting-edge technology into impactful,
              real-world solutions.
              <br />
              My work lives at the intersection of AI, Data analytics, Machine
              Learning, and human-centered innovation.
              <br />I build ethical, accessible web solutions that leverage AI
              to solve real-world problems and shape a better digital future.
            </p>
            <p className="text-lg text-muted-foreground">
              🚀 From building a Gen AI–powered heart disease predictor (Cryptic
              3.0 Runner-up) to crafting an AI Skill Gap Analyzer chatbot.
              <br />I thrive on creating products that are not just smart—but
              meaningful. Currently exploring the frontier of full-body motion
              tracking for intelligent fitness feedback using OpenCV, while
              mastering tools like Python, Streamlit, Node.js, and Firebase.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {/* Languages Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-full bg-midnight-blue/10 mr-3">
                  <Code className="h-6 w-6 text-midnight-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-midnight-blue">
                  Languages
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-button px-4 py-2 rounded-full bg-midnight-blue/10 text-midnight-blue border border-midnight-blue/20 hover:border-midnight-blue">
                      {language}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-full bg-midnight-purple/10 mr-3">
                  <Layout className="h-6 w-6 text-midnight-purple" />
                </div>
                <h3 className="text-2xl font-semibold text-midnight-purple">
                  Frameworks
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {frameworks.map((framework, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-button px-4 py-2 rounded-full bg-midnight-purple/10 text-midnight-purple border border-midnight-purple/20 hover:border-midnight-purple">
                      {framework}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-full bg-midnight-indigo/10 mr-3">
                  <Tool className="h-6 w-6 text-midnight-indigo" />
                </div>
                <h3 className="text-2xl font-semibold text-midnight-indigo">
                  Tools
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-button px-4 py-2 rounded-full bg-midnight-indigo/10 text-midnight-indigo border border-midnight-indigo/20 hover:border-midnight-indigo">
                      {tool}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <Card
                  key={index}
                  className="card-hover border border-border/50 bg-card/50 backdrop-blur overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {metric.label}
                        </p>
                        <p className="text-3xl font-bold bg-clip-text text-transparent bg-midnight-glow">
                          {metric.value}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-midnight-blue/10">
                        <CheckCircle className="h-6 w-6 text-midnight-blue" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
