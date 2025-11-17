import { Shield, Clock, CheckCircle2 } from "lucide-react"

export function GuaranteeSection() {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantía de satisfacción",
      description: "Si no cumple tus expectativas, te devolvemos el dinero.",
      highlight: "100%",
    },
    {
      icon: Clock,
      title: "Sin compromiso",
      description: "Cancela cuando quieras, sin penalizaciones ni preguntas.",
      highlight: "Flexible",
    },
    {
      icon: CheckCircle2,
      title: "Soporte incluido",
      description: "Ayuda personalizada para configurar tu sistema.",
      highlight: "Incluido",
    },
  ]

  return (
    <section className="w-full px-5 py-16 md:py-20 overflow-hidden flex flex-col justify-center items-center relative">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="self-stretch max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col justify-center items-center gap-4 mb-12 md:mb-16">
          <h2 className="text-center text-foreground text-3xl md:text-4xl font-semibold leading-tight">
            Sin riesgo, sin complicaciones
          </h2>
          <p className="text-center text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-[600px]">
            Estamos tan seguros de que GTiQ te ayudará que te ofrecemos estas garantías
          </p>
        </div>
        
        {/* Diseño horizontal con badges destacados */}
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-4">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <div
                key={index}
                className="flex-1 relative group"
              >
                {/* Badge destacado arriba */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-3 py-1 rounded-full bg-primary border border-primary/30 backdrop-blur-sm">
                    <span className="text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                      {guarantee.highlight}
                    </span>
                  </div>
                </div>
                
                {/* Card principal */}
                <div className="relative h-full pt-6 pb-8 px-6 overflow-hidden rounded-2xl border border-white/20 flex flex-col items-center text-center gap-4">
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
                  
                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                    {/* Icono grande */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Texto */}
                    <div className="flex flex-col gap-2">
                      <div className="text-foreground text-lg font-semibold">
                        {guarantee.title}
                      </div>
                      <div className="text-muted-foreground text-sm font-normal leading-relaxed">
                        {guarantee.description}
                      </div>
                    </div>
                  </div>
                  
                  {/* Efecto hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

