"use client"

import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ExperienceProps {
  language: "es" | "en"
}

export function Experience({ language }: ExperienceProps) {
  const content = {
    es: {
      title: "Experiencia",
      experiences: [
        {
          position: "Backend Junior (Proyectos)",
          company: "No-Country",
          period: "Febrero 2024 - Julio 2024",
          description:
            `Formé parte de proyectos de desarrollo web en No-Country, trabajando de manera continua entre febrero y julio en equipos de desarrollo con metodologías ágiles para construir aplicaciones desde cero.
Durante este período, participé en el desarrollo de una plataforma de newsletter y de una aplicación web orientada a la contratación de servicios para el hogar.
Me desempeñé como Backend Developer, colaborando en el diseño y desarrollo de APIs REST, la implementación de la lógica de negocio y la integración con bases de datos, trabajando en conjunto con equipos de frontend y diseño.`,
          technologies: ["Node.js", "MySQL", "MongoDB", "Typescript", "Express", "Rest API"],
        },
      ],
    },
    en: {
      title: "Experience",
      experiences: [
        {
          position: "Backend Junior (Project-based)",
          company: "No-Country",
          period: "February 2024 - July 2024",
          description:
            `Worked as a Backend Engineer on web development projects at No-Country from February to July, collaborating continuously with cross-functional teams using agile methodologies to build applications from scratch.
During this period, I contributed to the development of a newsletter platform and a web application for hiring home services.
I worked as a Backend Developer, contributing to REST API development, business logic implementation, and database integration, in close collaboration with frontend and design teams.`,
          technologies: ["Node.js", "MySQL", "MongoDB", "Typescript", "Express", "Rest API"],
        },
      ],
    },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content[language].title}</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {content[language].experiences.map((exp, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <div className="mt-1">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-base mt-1">{exp.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
