"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

interface HeroProps {
  language: "es" | "en"
}

export function Hero({ language }: HeroProps) {
  const content = {
    es: {
      greeting: "Hola, soy",
      name: "Taiel Sagretti",
      title: "Desarrollador Web Backend",
      description:
        "Especializado en crear APIs robustas, escalables y seguras. Experiencia en Node.js, bases de datos y arquitectura de sistemas.",
      cta: "Ver Proyectos",
      downloadCV: "Descargar CV",
      cvUrl: "/downloads/CV_TAIEL-SAGRETTI_ES.pdf",
    },
    en: {
      greeting: "Hi, I am",
      name: "Taiel Sagretti",
      title: "Backend Web Developer",
      description:
        "Specialized in building robust, scalable, and secure APIs. Experience in Node.js, databases, and system architecture.",
      cta: "View Projects",
      downloadCV: "Download CV",
      cvUrl: "/downloads/CV_TAIEL-SAGRETTI_EN.pdf",
    },
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <p className="text-primary mb-2 font-mono">{content[language].greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
            {content[language].name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            {content[language].title}
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed text-pretty">
            {content[language].description}
          </p>

          <div className="flex items-center gap-4 mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="gap-2 hover:scale-105 transition-transform cursor-pointer"
            >
              {content[language].cta}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 hover:scale-105 transition-transform hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer"
              asChild
            >
              <a href={content[language].cvUrl} download>
                <Download className="h-5 w-5" />
                {content[language].downloadCV}
              </a>
            </Button>

            <div className="flex gap-3">
              <a
                href="https://github.com/Tai-MS/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/taiel-sagretti/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="mailto:taiels94@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Javascript",
              "Typescript",
              "Node.js",
              "Java",
              "Spring Boot",
              "REST API",
              "MySQL",
              "MongoDB",
              "SQLite",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm font-mono cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
