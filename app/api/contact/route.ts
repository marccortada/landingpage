import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos" },
        { status: 400 }
      )
    }

    // Enviar email con Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "GTiQ <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL || "gnerai@gneraitiq.com",
      subject: `Nuevo contacto desde GTiQ - ${company || "Sin empresa"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Nuevo mensaje de contacto</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
          </div>
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
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

