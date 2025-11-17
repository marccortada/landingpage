"use client"

import { useState } from "react"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const pricingPlans = [
    {
      name: "Básico",
      monthlyPrice: "119 €/año",
      annualPrice: "119 €/año",
      originalPrice: "179 €/año", // Precio tachado para crear escasez
      hasDiscount: true,
      discount: "60€",
      description: "Hasta 5 trabajadores",
      features: [
        "Fichajes con geolocalización",
        "Informes automáticos",
        "Gestión de ausencias y pausas",
        "Multi-centro y multi-rol",
        "Compatible con normativa española",
        "Acceso desde cualquier dispositivo",
      ],
      buttonText: "Elegir plan",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-zinc-400",
      urgency: "Plazas limitadas",
    },
    {
      name: "Pro",
      monthlyPrice: "189 €/año",
      annualPrice: "189 €/año",
      hasDiscount: false,
      description: "Hasta 10 trabajadores",
      features: [
        "Fichajes con geolocalización",
        "Informes automáticos",
        "Gestión de ausencias y pausas",
        "Multi-centro y multi-rol",
        "Compatible con normativa española",
        "Acceso desde cualquier dispositivo",
      ],
      buttonText: "Elegir plan",
      buttonClass:
        "bg-primary-foreground shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-primary text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-primary-foreground/90",
      popular: true,
      urgency: "Más popular",
    },
    {
      name: "Avanzado",
      monthlyPrice: "289 €/año",
      annualPrice: "289 €/año",
      hasDiscount: false,
      description: "Hasta 20 trabajadores",
      features: [
        "Fichajes con geolocalización",
        "Informes automáticos",
        "Gestión de ausencias y pausas",
        "Multi-centro y multi-rol",
        "Compatible con normativa española",
        "Acceso desde cualquier dispositivo",
      ],
      buttonText: "Elegir plan",
      buttonClass:
        "bg-secondary shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-secondary-foreground text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-secondary/90",
    },
    {
      name: "Empresarial",
      monthlyPrice: "489 €/año",
      annualPrice: "489 €/año",
      hasDiscount: false,
      description: "Hasta 50 trabajadores",
      features: [
        "Fichajes con geolocalización",
        "Informes automáticos",
        "Gestión de ausencias y pausas",
        "Multi-centro y multi-rol",
        "Compatible con normativa española",
        "Acceso desde cualquier dispositivo",
      ],
      buttonText: "Elegir plan",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-zinc-400",
    },
    {
      name: "Enterprise",
      monthlyPrice: "Consultar",
      annualPrice: "Consultar",
      hasDiscount: false,
      description: "Más de 50 trabajadores",
      features: [
        "Fichajes con geolocalización",
        "Informes automáticos",
        "Gestión de ausencias y pausas",
        "Multi-centro y multi-rol",
        "Compatible con normativa española",
        "Acceso desde cualquier dispositivo",
      ],
      buttonText: "Contactar",
      buttonClass:
        "bg-secondary shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-secondary-foreground text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-secondary/90",
    },
  ]

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      {/* Banner de urgencia */}
      <div className="w-full max-w-[1400px] mx-auto mb-6">
        <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider animate-pulse">
                🎉 Oferta de lanzamiento
              </span>
            </div>
            <div className="flex-1 text-foreground text-sm md:text-base font-medium">
              <span className="text-primary font-semibold">Descuento por tiempo limitado</span> - Plazas limitadas disponibles
            </div>
            <div className="text-muted-foreground text-xs md:text-sm font-normal">
              Oferta válida hasta fin de mes
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            Planes adaptados a tu empresa
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            Todos los planes incluyen exactamente las mismas funcionalidades. <br /> 
            Solo cambia el número máximo de trabajadores.
          </p>
        </div>
      </div>
      <div className="self-stretch px-5 flex flex-wrap justify-center items-start gap-4 md:gap-6 mt-6 max-w-[1400px] mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 min-w-[280px] max-w-[320px] p-4 overflow-hidden rounded-xl flex flex-col justify-start items-start gap-6 ${plan.popular ? "bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]" : "bg-gradient-to-b from-gray-50/5 to-gray-50/0"}`}
            style={plan.popular ? {} : { outline: "1px solid hsl(var(--border))", outlineOffset: "-1px" }}
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="w-full flex flex-col gap-2">
                  <div
                    className={`w-full h-5 text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-zinc-200"}`}
                  >
                    {plan.name}
                    {plan.popular && (
                      <div className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-gradient-to-b from-primary-light/50 to-primary-light bg-white">
                        <div className="text-center text-primary-foreground text-xs font-normal leading-tight break-words">
                          Popular
                        </div>
                      </div>
                    )}
                  </div>
                  {plan.urgency && (
                    <div className={`px-2 py-0.5 rounded-full text-xs font-semibold inline-block w-fit ${
                      plan.popular 
                        ? "bg-primary-foreground/20 text-primary-foreground" 
                        : "bg-primary/20 text-primary"
                    }`}>
                      {plan.urgency}
                    </div>
                  )}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="flex flex-col justify-start items-start gap-1">
                    {plan.hasDiscount && plan.originalPrice ? (
                      <>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-lg font-normal leading-tight line-through ${
                              plan.popular ? "text-primary-foreground/50" : "text-zinc-500"
                            }`}
                          >
                            {plan.originalPrice}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-semibold ${
                              plan.popular 
                                ? "bg-primary-foreground/20 text-primary-foreground" 
                                : "bg-primary/20 text-primary"
                            }`}
                          >
                            -{plan.discount}
                          </span>
                        </div>
                        <div
                          className={`text-3xl font-medium leading-10 ${plan.popular ? "text-primary-foreground" : "text-zinc-50"}`}
                        >
                          {plan.annualPrice}
                        </div>
                      </>
                    ) : (
                      <div
                        className={`text-3xl font-medium leading-10 ${plan.popular ? "text-primary-foreground" : "text-zinc-50"}`}
                      >
                        {plan.annualPrice}
                      </div>
                    )}
                  </div>
                  <div
                    className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                  >
                    {plan.description}
                  </div>
                </div>
              </div>
              <Button
                className={`self-stretch px-5 py-2 rounded-[40px] flex justify-center items-center ${plan.buttonClass}`}
              >
                <div className="px-1.5 flex justify-center items-center gap-2">
                  <span
                    className={`text-center text-sm font-medium leading-tight ${plan.name === "Básico" || plan.name === "Empresarial" ? "text-gray-800" : plan.name === "Pro" ? "text-primary" : "text-zinc-950"}`}
                  >
                    {plan.buttonText}
                  </span>
                </div>
              </Button>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div
                className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                Incluye:
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="self-stretch flex justify-start items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Check
                        className={`w-full h-full ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div
                      className={`leading-tight font-normal text-sm text-left ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
