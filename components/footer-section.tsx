"use client"

import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 border-t border-border/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Brand Section */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="text-foreground text-xl font-semibold">GTiQ</div>
          <p className="text-muted-foreground text-sm font-normal leading-relaxed">
            Control horario inteligente para empresas modernas. Cumplimiento normativo garantizado.
          </p>
          <div className="flex justify-start items-start gap-3 mt-2">
            <a href="https://www.instagram.com/_gnerai_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
              <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/gnerai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
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
            <a href="/privacidad" className="text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              Política de privacidad
            </a>
            <a href="/terminos" className="text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              Términos de servicio
            </a>
            <a href="/cookies" className="text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-foreground text-sm font-semibold leading-5">Contacto</h3>
          <div className="flex flex-col justify-start items-start gap-3">
            <a href="mailto:info@gneraitiq.com" className="flex items-center gap-2 text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              info@gneraitiq.com
            </a>
            <a href="tel:+34744769246" className="flex items-center gap-2 text-muted-foreground text-sm font-normal leading-5 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              +34 744 769 246
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
          POWERED BY GNERAI
        </p>
      </div>
    </footer>
  )
}
