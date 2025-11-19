import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, plan, employees, sector, budget, message, needs } = body

    // Validación básica
    if (!name || !email || !phone || !company || !plan || !employees || !sector || !needs) {
      return NextResponse.json(
        { error: "Por favor, completa todos los campos requeridos" },
        { status: 400 }
      )
    }

    // Mapear valores de plan
    const planNames: Record<string, string> = {
      basico: "Básico - Hasta 5 trabajadores",
      pro: "Pro - Hasta 10 trabajadores",
      avanzado: "Avanzado - Hasta 20 trabajadores",
      empresarial: "Empresarial - Hasta 50 trabajadores",
      enterprise: "Enterprise - Más de 50 trabajadores"
    }

    // Mapear valores de presupuesto
    const budgetLabels: Record<string, string> = {
      "menos-100": "Menos de 100€/año",
      "100-200": "100€ - 200€/año",
      "200-300": "200€ - 300€/año",
      "300-500": "300€ - 500€/año",
      "mas-500": "Más de 500€/año",
      "consultar": "Prefiero consultar"
    }

    // Mapear valores de sector
    const sectorLabels: Record<string, string> = {
      retail: "Retail / Comercio",
      restauracion: "Restauración / Hostelería",
      sanidad: "Sanidad / Salud",
      educacion: "Educación",
      construccion: "Construcción",
      logistica: "Logística / Transporte",
      manufactura: "Manufactura / Producción",
      servicios: "Servicios Profesionales",
      tecnologia: "Tecnología / IT",
      otro: "Otro"
    }

    // Enviar email con Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "GTiQ <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL || "gnerai@gneraitiq.com",
      subject: `Nuevo contacto desde GTiQ - ${company} - Plan: ${planNames[plan] || plan}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Nuevo mensaje de contacto</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0; margin-bottom: 15px;">Información de contacto</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Empresa:</strong> ${company}</p>
          </div>

          <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1f2937; margin-top: 0; margin-bottom: 15px;">Información del negocio</h3>
            <p><strong>Plan de interés:</strong> ${planNames[plan] || plan}</p>
            <p><strong>Número de trabajadores:</strong> ${employees}</p>
            <p><strong>Sector/Industria:</strong> ${sectorLabels[sector] || sector}</p>
            ${budget ? `<p><strong>Presupuesto aproximado:</strong> ${budgetLabels[budget] || budget}</p>` : ""}
          </div>

          <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="color: #1f2937; margin-top: 0; margin-bottom: 15px;">Necesidades específicas</h3>
            <p style="white-space: pre-wrap; margin: 0;">${needs}</p>
          </div>

          ${message ? `
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6366f1;">
            <h3 style="color: #1f2937; margin-top: 0; margin-bottom: 15px;">Mensaje adicional</h3>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          ` : ""}
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error("Error de Resend:", error)
      return NextResponse.json(
        { error: "Error al enviar el email", details: error },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Email enviado correctamente", data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error en API route:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}

