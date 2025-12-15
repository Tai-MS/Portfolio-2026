"use client"

import { Download, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectsProps {
  language: "es" | "en"
}

export function Projects({ language }: ProjectsProps) {
  const content = {
    es: {
      title: "Proyectos",
      projects: [
        {
          name: "SVE - Sistema Virtual Escolar",
          description:
            `Sistema para instituciones educativas con el objetivo de concentrar todas las necesidades que puedan tener organismos de nivel tericario. 
            Cuenta con sistema de asistencias, subida de tareas y trabajos prácticos (así cómo sus calificaciones), subida de archivos, comunicados, entre otros.
            Este proyecto comenzó su desarrollo para la unidad curricular de mi carrera terciaria llamada "Práctica Profesionalizante II". 
            Además de desarrollar el software, también se realizó la correspondiente documentación.
            Aún se encuentra en desarrollo para ya cuenta con un frontend y backend funcional.`,
          technologies: ["Typescript", "Express", "Node.js", "MySQL", "Sequelize", "Rest API", "JWT", "React", "Tailwind" ],
          url: "https://github.com/Tai-MS/SVE-System",
          downloadUrl: null,
        },
        {
          name: "Wotech",
          description:
          `Wotech es un proyecto diseñado para mejorar una carpintería familiar. 
          Se trata de un software de gestión con el objetivo de optimizar tiempos, controlar materiales, controlar pedidos, entre muchas otras cosas.
          Me uní al proyecto a mediados de año. Mi tarea fue finalizar, mejorar y corregir endpoints en el backend.`,
          technologies: ["Javascrip", "Express", "Node.js", "MySQL", "Sequelize", "React"],
          url: "https://github.com/tai-ms/WOTECH/",
          downloadUrl: null,
        },
        {
          name: "E-Commerce API",
          description:
            `ECommerce API es un proyecto backend propio enfocado en el desarrollo de una API REST para un sistema de comercio electrónico. 
            Permite gestionar productos, usuarios y operaciones básicas del dominio e-commerce, siguiendo una estructura organizada y escalable.
             El backend fue desarrollado con Node.js y Express, aplicando buenas prácticas de diseño de APIs, manejo de rutas y lógica de negocio. 
             Este proyecto refleja mi capacidad para diseñar y construir soluciones backend completas, orientadas a casos de uso reales.`,
          technologies: ["Javascrip", "Express", "Node.js", "MongoDB", "Mongoose"],
          url: "https://github.com/Tai-MS/ECommerce-API",
          downloadUrl: null,
        },
        {
          name: "ServiHogar (No-Country Abril - Mayo)",
          description:
            `ServiHogar es una página web diseñada para facilitar la contratación de servicios para el hogar. 
            Con ServiHogar, los usuarios pueden encontrar y pactar citas con los proveedores de servicios de manera conveniente y eficiente. 
            A diferencia de otras plataformas similares, ServiHogar es una solución genérica, lo que significa que no está limitada a un solo tipo de trabajo. 
            Los usuarios tienen la flexibilidad de cargar su propio servicio en la plataforma, ofreciendo así un amplio espectro de opciones para los clientes.`,
          technologies: ["Typescrip", "Express", "Node.js", "MySQL", "Sequelize", "React"],
          url: "https://github.com/Tai-MS/s14-06-t-node-react",
          downloadUrl: null,
        },
        ,
        {
          name: "ITNoticias (No-Country Febrero - Marzo)",
          description:
            `ITNoticias es una aplicación web full-stack desarrollada durante una simulación laboral en No-Country, orientada a la visualización de noticias y artículos de actualidad. 
            El proyecto cuenta con un backend en Node.js y Express y un frontend en React, organizados en una arquitectura separada por capas.
            Mi rol fue desarrollador backend, encargándome de la lógica del servidor y la implementación de la API REST que provee los datos al frontend. 
            El proyecto refleja experiencia en desarrollo backend, trabajo colaborativo y buenas prácticas de organización de código y control de versiones.`,
          technologies: ["Javascrip", "Express", "Node.js", "MongoDB", "Mongoose", "React"],
          url: "https://github.com/Tai-MS/C16-13-t-node-react",
          downloadUrl: null,
        },
      ],
    },
    en: {
      title: "Projects",
      projects: [
        {
  name: "SVE - Virtual School System",
  description:
    `System for educational institutions aimed at centralizing all the needs of tertiary-level organizations.
    It includes attendance tracking, assignment and practical work submission (along with grading), file uploads, announcements, and more.
    This project started as part of the curricular unit of my technical degree called "Professional Practice II".
    In addition to software development, the corresponding technical documentation was also produced.
    The project is still under development, but it already has a functional frontend and backend.`,
  technologies: ["Typescript", "Express", "Node.js", "MySQL", "Sequelize", "Rest API", "JWT", "React", "Tailwind"],
  url: "https://github.com/Tai-MS/SVE-System",
  downloadUrl: null,
},
{
  name: "Wotech",
  description:
    `Wotech is a project designed to improve the management of a family-owned carpentry business.
    It is a management software aimed at optimizing time, controlling materials, managing orders, and more.
    I joined the project mid-year, where my role was to finalize, improve, and fix backend endpoints.`,
  technologies: ["Javascript", "Express", "Node.js", "MySQL", "Sequelize", "React"],
  url: "https://github.com/tai-ms/WOTECH/",
  downloadUrl: null,
},
{
  name: "E-Commerce API",
  description:
    `ECommerce API is a personal backend project focused on developing a REST API for an e-commerce system.
    It allows managing products, users, and core e-commerce domain operations, following an organized and scalable structure.
    The backend was built with Node.js and Express, applying best practices in API design, routing, and business logic.
    This project demonstrates my ability to design and build complete backend solutions for real-world use cases.`,
  technologies: ["Javascript", "Express", "Node.js", "MongoDB", "Mongoose"],
  url: "https://github.com/Tai-MS/ECommerce-API",
  downloadUrl: null,
},
{
  name: "ServiHogar (No-Country April – May)",
  description:
    `ServiHogar is a web platform designed to facilitate the hiring of home services.
    Through ServiHogar, users can find service providers and schedule appointments in a convenient and efficient way.
    Unlike other similar platforms, ServiHogar is a generic solution, meaning it is not limited to a single type of service.
    Users have the flexibility to publish their own services on the platform, offering a wide range of options for clients.`,
  technologies: ["Typescript", "Express", "Node.js", "MySQL", "Sequelize", "React"],
  url: "https://github.com/Tai-MS/s14-06-t-node-react",
  downloadUrl: null,
},
{
  name: "ITNoticias (No-Country February – March)",
  description:
    `ITNoticias is a full-stack web application developed during a No-Country work simulation, focused on displaying news and current affairs articles.
    The project features a backend built with Node.js and Express and a frontend developed with React, organized using a layered architecture.
    My role was backend developer, responsible for server-side logic and implementing the REST API that provides data to the frontend.
    The project reflects experience in backend development, collaborative teamwork, and best practices in code organization and version control.`,
  technologies: ["Javascript", "Express", "Node.js", "MongoDB", "Mongoose", "React"],
  url: "https://github.com/Tai-MS/C16-13-t-node-react",
  downloadUrl: null,
}

      ],
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content[language].title}</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {content[language].projects.map((project, index) => (
            <Card key={index} className="border-border flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                {project.url && (
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      {language === "es" ? "Ver Código" : "View Code"}
                    </a>
                  </Button>
                )}
                {project.downloadUrl && (
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                    <a href={project.downloadUrl} download>
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
