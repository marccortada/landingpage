"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, User, Building, MessageSquare, Users, Briefcase, DollarSign } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    plan: "",
    employees: "",
    sector: "",
    budget: "",
    message: "",
    needs: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Escuchar cuando se selecciona un plan desde la sección de precios
  useEffect(() => {
    const handlePlanSelected = (event: CustomEvent) => {
      const { planId, planName } = event.detail
      setFormData(prev => ({ ...prev, plan: planId }))
    }

    // También verificar sessionStorage al montar el componente
    const selectedPlan = sessionStorage.getItem("selectedPlan")
    const selectedPlanName = sessionStorage.getItem("selectedPlanName")
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }))
      sessionStorage.removeItem("selectedPlan")
      sessionStorage.removeItem("selectedPlanName")
    }

    window.addEventListener("planSelected", handlePlanSelected as EventListener)
    return () => {
      window.removeEventListener("planSelected", handlePlanSelected as EventListener)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        company: "", 
        plan: "",
        employees: "",
        sector: "",
        budget: "",
        message: "",
        needs: "",
      })
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden flex flex-col justify-center items-center relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            ¿Listo para empezar?
          </h2>
          <p className="text-center text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-[600px]">
            Completa el formulario y revisaremos tu solicitud. Si lo consideramos conveniente, nos pondremos en contacto contigo para agendar una reunión 1:1 personalizada.
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
                  Teléfono *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
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
                  Empresa *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              {/* Plan de interés */}
              <div className="relative">
                <label htmlFor="plan" className="block text-sm font-medium text-foreground mb-2">
                  Plan de interés *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <select
                    id="plan"
                    name="plan"
                    required
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona un plan</option>
                    <option value="basico">Básico - Hasta 5 trabajadores</option>
                    <option value="pro">Pro - Hasta 10 trabajadores</option>
                    <option value="avanzado">Avanzado - Hasta 20 trabajadores</option>
                    <option value="empresarial">Empresarial - Hasta 50 trabajadores</option>
                    <option value="enterprise">Enterprise - Más de 50 trabajadores</option>
                  </select>
                </div>
              </div>

              {/* Número de trabajadores */}
              <div className="relative">
                <label htmlFor="employees" className="block text-sm font-medium text-foreground mb-2">
                  Número de trabajadores *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="number"
                    id="employees"
                    name="employees"
                    required
                    min="1"
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Ej: 15"
                  />
                </div>
              </div>

              {/* Sector/Industria */}
              <div className="relative">
                <label htmlFor="sector" className="block text-sm font-medium text-foreground mb-2">
                  Sector/Industria *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <select
                    id="sector"
                    name="sector"
                    required
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona un sector</option>
                    <option value="retail">Retail / Comercio</option>
                    <option value="restauracion">Restauración / Hostelería</option>
                    <option value="sanidad">Sanidad / Salud</option>
                    <option value="educacion">Educación</option>
                    <option value="construccion">Construcción</option>
                    <option value="logistica">Logística / Transporte</option>
                    <option value="manufactura">Manufactura / Producción</option>
                    <option value="servicios">Servicios Profesionales</option>
                    <option value="tecnologia">Tecnología / IT</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* Presupuesto aproximado */}
              <div className="relative">
                <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                  Presupuesto aproximado anual
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="menos-100">Menos de 100€/año</option>
                    <option value="100-200">100€ - 200€/año</option>
                    <option value="200-300">200€ - 300€/año</option>
                    <option value="300-500">300€ - 500€/año</option>
                    <option value="mas-500">Más de 500€/año</option>
                    <option value="consultar">Prefiero consultar</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Necesidades específicas */}
            <div className="mb-6">
              <label htmlFor="needs" className="block text-sm font-medium text-foreground mb-2">
                ¿Qué funcionalidades son más importantes para tu empresa? *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <textarea
                  id="needs"
                  name="needs"
                  required
                  rows={3}
                  value={formData.needs}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Ej: Control de horarios, gestión de ausencias, informes automáticos, geolocalización..."
                />
              </div>
            </div>

            {/* Mensaje */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensaje adicional
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos cualquier otra información relevante sobre tu empresa o necesidades específicas..."
                />
              </div>
            </div>

            {/* Mensaje de estado */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-primary/20 border border-primary/30">
                <p className="text-primary text-sm font-medium mb-2">
                  ¡Mensaje enviado correctamente!
                </p>
                <p className="text-primary/90 text-sm">
                  Revisaremos tu solicitud y nos pondremos en contacto contigo para agendar una reunión 1:1 si lo consideramos conveniente.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            )}

            {/* Información sobre el proceso */}
            <div className="mb-6 p-4 rounded-xl bg-muted/30 border border-white/10">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">¿Qué pasa después?</strong> Revisaremos tu solicitud y, si lo consideramos conveniente, nos pondremos en contacto contigo para agendar una reunión 1:1 personalizada donde podremos conocer mejor tus necesidades y explicarte cómo podemos ayudarte.
              </p>
            </div>

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

