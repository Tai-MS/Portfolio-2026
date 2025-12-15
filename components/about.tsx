"use client"

interface AboutProps {
  language: "es" | "en"
}

export function About({ language }: AboutProps) {
  const content = {
    es: {
      title: "Sobre Mí",
      paragraphs: [
        
        "Soy Técnico Superior en Desarrollo de Software, con foco en desarrollo backend y creación de APIs robustas y escalables. Cuento con una sólida base en programación, bases de datos y arquitectura de software, adquirida durante mi formación académica y proyectos prácticos.",
"Participé en simulaciones laborales en No-Country, trabajando en equipos de desarrollo bajo dinámicas similares a entornos reales, donde fui uno de los responsables del backend. Disfruto diseñar soluciones claras, aplicar buenas prácticas y seguir aprendiendo constantemente nuevas tecnologías.",
"Actualmente busco mi primera oportunidad profesional como desarrollador backend, donde pueda aportar valor, crecer técnicamente y seguir formándome como profesional."
      
      ],
    },
    en: {
      title: "About Me",
      paragraphs: [
        
        "I am a Higher Technical Degree graduate in Software Development, focused on backend development and building robust and scalable APIs. I have a strong foundation in programming, databases, and software architecture, gained through academic training and hands-on projects.",
"I participated in work simulation projects at No-Country, collaborating in development teams under real-world dynamics, where I was one of the developers responsible for the backend. I enjoy designing clean solutions, applying best practices, and continuously learning new technologies.",
"I am currently seeking my first professional opportunity as a backend developer, aiming to contribute, grow technically, and continue developing my skills."
      ],
    },
  }

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content[language].title}</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {content[language].paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-foreground/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
