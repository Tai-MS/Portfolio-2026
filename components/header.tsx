"use client"

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

interface HeaderProps {
  language: "es" | "en"
  setLanguage: (lang: "es" | "en") => void
}

export function Header({ language, setLanguage }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const nav = {
    es: ["Inicio", "Sobre Mí", "Experiencia", "Educación", "Proyectos", "Certificados", "Contacto"],
    en: ["Home", "About", "Experience", "Education", "Projects", "Certificates", "Contact"],
  }

  const ids = ["hero", "about", "experience", "education", "projects", "certificates", "contact"]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold font-mono text-primary cursor-pointer">
            {"<Dev />"}
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {nav[language].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(ids[index])}
                className="text-sm text-foreground/80 hover:text-primary transition-colors hover:scale-105 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="gap-2 hover:scale-105 transition-transform hover:bg-primary hover:text-primary-foreground cursor-pointer"
          >
            <Languages className="h-4 w-4" />
            {language === "es" ? "EN" : "ES"}
          </Button>
        </div>
      </div>
    </header>
  )
}
