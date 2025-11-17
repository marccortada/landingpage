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
    <section className="w-full px-5 py-8 md:py-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="self-stretch max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2 p-4 md:p-6 overflow-hidden rounded-[10px] bg-[rgba(231,236,235,0.08)] outline outline-1 outline-border outline-offset-[-1px]"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-foreground text-sm font-medium leading-tight">
                {metric.label}
              </div>
              <div className="text-muted-foreground text-xs font-normal leading-tight max-w-[140px]">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

