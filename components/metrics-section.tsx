export function MetricsSection() {
  const metrics = [
    {
      value: "100%",
      label: "Cumplimiento normativo",
      description: "Totalmente adaptado a la ley española",
    },
    {
      value: "0",
      label: "Instalaciones necesarias",
      description: "Funciona desde cualquier navegador",
    },
    {
      value: "24/7",
      label: "Disponibilidad",
      description: "Acceso desde cualquier dispositivo",
    },
    {
      value: "4 años",
      label: "Almacenamiento garantizado",
      description: "Conservación de datos según normativa",
    },
  ]

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 overflow-hidden flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2 p-4 md:p-6 overflow-hidden rounded-[10px] bg-[rgba(231,236,235,0.08)] outline outline-1 outline-border outline-offset-[-1px]"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-foreground text-xs sm:text-sm font-medium leading-tight">
                {metric.label}
              </div>
              <div className="text-muted-foreground text-[10px] sm:text-xs font-normal leading-tight max-w-[140px]">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

