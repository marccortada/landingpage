"use client"

import { Twitter, Github, Linkedin, Mail, Phone } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 py-12 md:py-16 border-t border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Brand Section */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="text-foreground text-xl font-semibold">GTiQ</div>
          <p className="text-muted-foreground text-sm font-normal leading-relaxed">
            Control horario inteligente para empresas modernas. Cumplimiento normativo garantizado.
          </p>
          <div className="flex justify-start items-start gap-3 mt-2">
            <a href="#" aria-label="Twitter" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
              <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
              <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Producto */}
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-foreground text-sm font-semibold leading-5">Producto</h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <a href="#features-section" className="text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              Funcionalidades
            </a>
            <a href="#pricing-section" className="text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              Precios
            </a>
            <a href="#faq-section" className="text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              Preguntas frecuentes
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-foreground text-sm font-semibold leading-5">Legal</h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <a href="#" className="text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              Términos de servicio
            </a>
            <a href="#" className="text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-foreground text-sm font-semibold leading-5">Contacto</h3>
          <div className="flex flex-col justify-start items-start gap-3">
            <a href="mailto:info@gtiq.es" className="flex items-center gap-2 text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              info@gtiq.es
            </a>
            <a href="tel:+34900123456" className="flex items-center gap-2 text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              +34 900 123 456
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-xs font-normal">
          © {new Date().getFullYear()} GTiQ. Todos los derechos reservados.
        </p>
        <p className="text-muted-foreground text-xs font-normal">
          Desarrollado por gnerai
        </p>
      </div>
    </footer>
  )
}
