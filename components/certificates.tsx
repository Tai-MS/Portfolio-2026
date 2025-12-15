"use client"

import { Award, ExternalLink, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CertificatesProps {
  language: "es" | "en"
}

export function Certificates({ language }: CertificatesProps) {
  const content = {
    es: {
      title: "Certificados",
      certificates: [
        {
          name: "Curso de Programación Backend",
          issuer: "Coderhouse",
          date: "Junio 2024",
          description: "Formación avanzada en desarrollo backend, enfocada en la creación de APIs REST utilizando Node.js, Express y MongoDB.",
          url: "",
          downloadUrl: "/downloads/6699aa48534aed212db906d3.png",
        },
        {
          name: "Desarrollo con Node",
          issuer: "Centro de e-Learning UTN FRBA",
          date: "Septiembre 2023",
          description: "Introducción al desarrollo de APIs con Node.js, Express y MongoDB, aplicando conceptos fundamentales de backend.",
          id: "Credencial ID: CER-2Y0OJTDA-1083676",
          url: "https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado",
          downloadUrl: "",
        },
        {
          name: "EF Set Certificado de Inglés",
          issuer: "EF Set",
          date: "Marzo 2023",
          description: "Certificación de nivel de inglés obtenida mediante examen estandarizado EF SET.",
          url: null,
          downloadUrl: "/downloads/EF SET Certificate.pdf",
        },
        {
          name: "Bootcamp QA",
          issuer: "Bolsa de Comercio de Rosario",
          date: "Septiembre 2023",
          description: "Capacitación en testing manual, enfocada en detección de errores, casos de prueba y control de calidad de software.",
          url: null,
          downloadUrl: null,
        },
      ],
    },
    en: {
      title: "Certificates",
      certificates: [
        {
          name: "Course of Backend Programming",
          issuer: "Coderhouse",
          date: "June  2024",
          description: "Advanced backend training focused on building REST APIs using Node.js, Express, and MongoDB.",
          url: "",
          downloadUrl: "/downloads/6699aa48534aed212db906d3.png",
        },
        {
          name: "Development with Node",
          issuer: "Centro de e-Learning UTN FRBA",
          date: "September 2023",
          description: "Introductory course on API development with Node.js, Express, and MongoDB, covering core backend concepts.",
          id: "Credential ID: CER-2Y0OJTDA-1083676",
          url: "https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado",
          downloadUrl: null,
        },
        {
          name: "EF Set English Certificate",
          issuer: "EF Set",
          date: "March 2023",
          description: "English proficiency certification obtained through the standardized EF SET exam.",
          url: null,
          downloadUrl: "/downloads/EF SET Certificate.pdf",
        },
        {
          name: "Bootcamp QA",
          issuer: "Bolsa de Comercio de Rosario",
          date: "September 2023",
          description: "Training in manual software testing, focused on bug detection, test cases, and quality assurance processes.",
          url: null,
          downloadUrl: null,
        },
      ],
    },
  }

  return (
    <section id="certificates" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content[language].title}</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {content[language].certificates.map((cert, index) => (
            <Card key={index} className="border-border flex flex-col">
              <CardHeader>
                <div className="flex gap-3">
                  <div className="mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {cert.issuer} • {cert.date} {cert.id && (
                        <>
                          {" • "}
                          <span className="font-mono text-xs"> {cert.id}</span>
                        </>
                      )}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grow">
                <p className="text-foreground/80 text-sm leading-relaxed">{cert.description}</p>
              </CardContent>
              <CardFooter className="gap-3">
                {cert.url && (
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {language === "es" ? "Verificar" : "Verify"}
                    </a>
                  </Button>
                )}
                {cert.downloadUrl && (
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                    <a href={cert.downloadUrl} download target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" />
                      {language === "es" ? "Descargar" : "Download"}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
