import { CheckCircle2 } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    "Ahorra tiempo en gestión de fichajes",
    "Invitaciones de trabajadores que van directo a su panel asignado",
    "Cumple 100% con la normativa española",
    "Sin instalaciones ni complicaciones técnicas",
    "Acceso desde cualquier dispositivo",
    "Informes automáticos listos para inspección",
    "Soporte técnico incluido",
  ]

  return (
    <section className="w-full px-5 py-12 md:py-16 overflow-hidden flex flex-col justify-center items-center">
      <div className="self-stretch max-w-4xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-4 mb-10 md:mb-12">
          <h2 className="text-center text-foreground text-3xl md:text-4xl font-semibold leading-tight">
            ¿Por qué elegir GTiQ?
          </h2>
          <p className="text-center text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-[600px]">
            Todo lo que necesitas para el control horario de tu empresa en una sola plataforma
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-[10px] bg-[rgba(231,236,235,0.08)] outline outline-1 outline-border outline-offset-[-1px] hover:bg-[rgba(231,236,235,0.12)] transition-colors"
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div className="text-foreground text-sm md:text-base font-medium leading-relaxed">
                {benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

