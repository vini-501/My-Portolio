"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, Code, Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-b from-background/90 to-background"
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
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            My professional journey, education, and skills.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full bg-midnight-blue/10 mr-4">
              <BookOpen className="h-6 w-6 text-midnight-blue" />
            </div>
            <h3 className="text-2xl font-bold text-midnight-blue">Education</h3>
          </div>

          <div className="space-y-6">
            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>Minor in Artificial Intelligence</span>
                  <Badge className="bg-midnight-blue text-white">
                    2025-2027
                  </Badge>
                </CardTitle>
                <CardDescription>IIT Mandi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pursuing a Minor in Artificial Intelligence at IIT Mandi to
                  accelerate my mastery of advanced AI concepts and real-world
                  applications.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-midnight-blue text-midnight-blue"
                  >
                    Machine Learning
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-midnight-blue text-midnight-blue"
                  >
                    Deep Learning
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-midnight-blue text-midnight-blue"
                  >
                    Neural Networks
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-midnight-blue text-midnight-blue"
                  >
                    Cap Stone Project & Internship
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>
                    Bachelor of Computer Science Engineering (Data Science)
                  </span>
                  <Badge className="bg-midnight-blue text-white">
                    2024-2027
                  </Badge>
                </CardTitle>
                <CardDescription>Atria Institute of Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focused on software development and computer architecture.
                  Participated in various hackathons and coding competitions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-midnight-blue text-midnight-blue"
                  >
                    Mathematics & Statistics
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-midnight-blue text-midnight-blue"
                  >
                    Data Structures & Algorithms
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-midnight-blue text-midnight-blue"
                  >
                    Computer Systems & Architecture
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-midnight-blue text-midnight-blue"
                  >
                    Data Visualization
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full bg-midnight-purple/10 mr-4">
              <Briefcase className="h-6 w-6 text-midnight-purple" />
            </div>
            <h3 className="text-2xl font-bold text-midnight-purple">
              Experience
            </h3>
          </div>

          <div className="space-y-6">
            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>Hackathons & Competitions</span>
                  <Badge className="bg-midnight-purple text-white">
                    2023-Present
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Cryptic 2.0 | Shristi Innovation Exchange | Cypher 2.0 |
                  Cryptic 3.0 | Cepheus{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Engaged in 5+ College-level hackathons, engineering impactful,
                  real-time solutions across healthcare, automation, open
                  innovation ,and ed-tech using Python, machine learning,
                  OpenCV, Firebase, and generative AI — showcasing rapid
                  prototyping, system design, and team-driven innovation.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                  <li>
                    🚀 Developed a machine learning model for heart disease
                    prediction using patient datasets, achieving over 95%
                    accuracy through data cleaning, feature engineering, and
                    model tuning.
                  </li>
                  <li>
                    🧠 Integrated Generative AI to provide human-readable
                    explanations of predictions, improving transparency and user
                    understanding.
                  </li>
                  <li>
                    🤝 Collaborated in a 3-member cross-functional team to
                    ideate, prototype, and present within 24 hours,
                    demonstrating strong team synergy and fast problem-solving.
                  </li>
                  <li>
                    🏅 Earned runner-up position among 30+ teams, recognized for
                    innovation, social impact, and practical implementation of
                    Gen AI in healthcare.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span> Academic Research & Capstone Work</span>
                  <Badge className="bg-midnight-purple text-white">
                    2025-Present
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Urban Mobility Intelligence System
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Developed a geospatial mobility analytics platform utilizing
                  Python, GeoPandas, and PostGIS for data analysis, integrated
                  machine learning models with Scikit-learn, and visualized
                  insights using Kepler.gl. Deployed interactive dashboards with
                  Streamlit for real-time decision-making.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                  <li>
                    Leveraged spatial data processing and unsupervised learning
                    to uncover congestion patterns, predict peak flow zones, and
                    optimize route efficiency.
                  </li>
                  <li>
                    Integrated geospatial visualizations with time-series
                    forecasting models to support smart city planning and
                    dynamic traffic management.
                  </li>
                  <li>Optimized database queries for improved performance</li>
                  <li>
                    Highlights advanced proficiency in big data pipelines,
                    anomaly detection, and actionable insight generation for
                    high-impact urban innovation.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full bg-midnight-indigo/10 mr-4">
              <Code className="h-6 w-6 text-midnight-indigo" />
            </div>
            <h3 className="text-2xl font-bold text-midnight-indigo">
              Technical Skills
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>HTML/CSS</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-midnight-indigo h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>JavaScript/TypeScript</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-midnight-indigo h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>React/Next.js</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-midnight-indigo h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Streamlit </span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-midnight-indigo h-2 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Node.js/Express</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-midnight-indigo h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Python/Django</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-midnight-indigo h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>MongoDB/SQL</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-midnight-indigo h-2 rounded-full"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Firebase/Flask</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-midnight-indigo h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full bg-midnight-accent/10 mr-4">
              <Award className="h-6 w-6 text-midnight-accent" />
            </div>
            <h3 className="text-2xl font-bold text-midnight-accent">
              Certifications
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>Google Cloud Computing Foundations</span>
                  <Badge className="bg-midnight-accent text-white">2024</Badge>
                </CardTitle>
                <CardDescription>NPTEL</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  
                  Covered the core concepts of cloud computing using Google Cloud, including infrastructure, data storage, networking, and cloud-native application development.
                  Emphasized hands-on learning with Google Cloud tools and services.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>Google Data Analytics Professional Certificate</span>
                  <Badge className="bg-midnight-accent text-white">2025</Badge>
                </CardTitle>
                <CardDescription>Google / Coursera </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive professional-level training from Google Demonstrate
                  your proficiency in projects Earn an employer-recognized
                  certificate from Google . Qualify for in-demand job titles:
                  Data Analyst, Junior Data Analyst, Associate Data Analyst
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>Python Data Fundemantals</span>
                  <Badge className="bg-midnight-accent text-white">2025</Badge>
                </CardTitle>
                <CardDescription>Data Camp</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Growing my data skills, discovering how to manipulate and
                  visualize data, and apply advanced analytics to make
                  data-driven decisions.
                </p>
              </CardContent>
            </Card>

            
            <Card className="border border-border/50 bg-card/50 backdrop-blur card-hover">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>Data Structures and Algorithms in Python</span>
                  <Badge className="bg-midnight-accent text-white">2025</Badge>
                </CardTitle>
                <CardDescription>NPTEL</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focused on implementing and analyzing key data structures and algorithms using Python.
                  Topics included arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching with an emphasis on time-space complexity and problem-solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button
            size="lg"
            className="bg-midnight-blue hover:bg-midnight-blue/80 text-white border-none group"
            asChild
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Full Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
