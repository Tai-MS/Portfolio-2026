"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface EducationProps {
  language: "es" | "en"
}

export function Education({ language }: EducationProps) {
  const content = {
    es: {
      title: "Educación",
      education: [
        {
          degree: "Técnico Superior en Desarollo de Software",
          institution: "Instituto Superior  Urquiza",
          period: "2023 - 2025",
          aclaration: "Finalizada",
          description:
  "Formación terciaria orientada al desarrollo de software, con base sólida en programación, estructuras de datos, bases de datos, ingeniería de software y desarrollo de proyectos. Enfoque práctico en la creación de soluciones, trabajo con APIs y buenas prácticas."
,
        },
        {
          degree: "Técnico Superior en Infraestructura de Tecnología de la Información",
          institution: "Instituto Superior  Urquiza",
          aclaration: "Primer año completo – carrera no finalizada",
          period: "2022 - 2022",
          description:
  "Formación en infraestructura IT con base en arquitectura de computadoras, redes, sistemas operativos y fundamentos de programación. Desarrollo de conocimientos en administración de sistemas, bases de datos y conceptos clave de seguridad, complementando el perfil de desarrollo backend."
,
        },
      ],
    },
    en: {
      title: "Education",
      education: [
        {
          degree: "Higher Technical Degree in Software Development",
          institution: "Superior Institute Urquiza",
          period: "2023 - 2025",
          aclaration: "Finished",
          description:
  "Tertiary-level degree focused on software development, with a strong foundation in programming, data structures, databases, software engineering, and project development. Practical approach to building solutions, working with APIs, and applying best practices."
,
        },
        {
          degree: "Higher Technical Degree in Software Development",
          institution: "Superior Institute Urquiza",
          aclaration: "First year completed – program not completed",
          period: "2022 - 2022",
          description:
  "Training in IT infrastructure with a foundation in computer architecture, networking, operating systems, and programming fundamentals. Gained knowledge in systems administration, databases, and basic security concepts, complementing a backend development profile."
,
        },
      ],
    },
  }

  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content[language].title}</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {content[language].education.map((edu, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <div className="mt-1">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base mt-1 flex flex-wrap items-center gap-2">
  <span>{edu.institution}</span>
  {edu.aclaration && (
    <span className="text-sm italic text-muted-foreground">
      • {edu.aclaration}
    </span>
  )}
</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
