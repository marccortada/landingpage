"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, User, Building, MessageSquare } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full px-5 py-16 md:py-24 overflow-hidden flex flex-col justify-center items-center relative">
      <div className="self-stretch max-w-4xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-4 mb-12 md:mb-16">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            ¿Listo para empezar?
          </h2>
          <p className="text-center text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-[600px]">
            Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/20">
          {/* Background con blur */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "rgba(231, 236, 235, 0.08)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

          <form onSubmit={handleSubmit} className="relative z-10 p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Nombre */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              {/* Empresa */}
              <div className="relative">
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Empresa
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
            </div>

            {/* Mensaje */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensaje *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos sobre tu empresa y tus necesidades..."
                />
              </div>
            </div>

            {/* Mensaje de estado */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-primary/20 border border-primary/30 text-primary text-sm font-medium">
                ¡Mensaje enviado correctamente! Te contactaremos pronto.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            )}

            {/* Botón de envío */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground text-base font-medium rounded-full hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

