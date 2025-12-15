"use client"

import type React from "react"

import { useState, useRef  } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import emailjs from "@emailjs/browser"

interface ContactProps {
  language: "es" | "en"
}

export function Contact({ language }: ContactProps) {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const content = {
    es: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar Mensaje",
      },
      info: {
        email: "taiels94@gmail.com",
        phone: "+54 9 3402 505110",
        location: "Rosario, Argentina",
      },
    },
    en: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
      info: {
        email: "taiels94@gmail.com",
        phone: "+54 9 3402 505110",
        location: "Rosario, Argentina",
      },
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    try {
      console.log(process.env.EMAIL_ID);
      console.log(process.env.EMAIL_SERVICE!);
      console.log( process.env.EMAIL_TEMPLATE!);
      console.log({
  service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
})
      await emailjs.sendForm(
  process.env.EMAIL_SERVICE!,
  process.env.EMAIL_TEMPLATE!,
  formRef.current,
  process.env.EMAIL_ID!
)

      alert("Mensaje enviado correctamente ✔️")

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("EmailJS error:", error)
      alert("Hubo un error al enviar el mensaje ❌")
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{content[language].title}</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center">{content[language].subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>{content[language].form.send}</CardTitle>
            </CardHeader>
            <CardContent>

              {/* Form con ref para EmailJS */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder={content[language].form.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={content[language].form.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={content[language].form.message}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {content[language].form.send}
                </Button>
              </form>

            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === "es" ? "Información de Contacto" : "Contact Information"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground/80">{content[language].info.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground/80">{content[language].info.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground/80">{content[language].info.location}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">{language === "es" ? "Redes Sociales" : "Social Media"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                  <a href="https://github.com/Tai-MS" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
                  <a href="https://www.linkedin.com/in/taiel-sagretti" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
