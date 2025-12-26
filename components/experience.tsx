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
            `Formé parte de dos proyectos de desarrollo web en No-Country, trabajando en equipos de desarrollo con metodologías ágiles para construir aplicaciones desde cero.
          En el primer proyecto (febrero–marzo), participé en el desarrollo de una plataforma de newsletter.
          En el segundo proyecto (abril–mayo), integré un nuevo equipo para desarrollar un sitio web orientado a la contratación de servicios para el hogar.
          En ambos proyectos, fui uno de los responsables del desarrollo backend, colaborando en el diseño de APIs, lógica de negocio e integración con la base de datos.`,
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
            `Worked on two web development projects at No-Country, collaborating with different development teams using agile methodologies to build applications from scratch.
In the first project (February–March), I contributed to the development of a newsletter platform.
In the second project (April–May), I joined a new team to build a web platform for hiring home services.
In both projects, I was one of the backend developers, contributing to API development, business logic, and database integration.`,
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
