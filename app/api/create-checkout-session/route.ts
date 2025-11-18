import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

// Mapeo de planes a Price IDs de Stripe
// IMPORTANTE: Debes crear estos productos/precios en Stripe Dashboard y reemplazar estos IDs
const PLAN_PRICE_IDS: Record<string, string> = {
  basico: process.env.STRIPE_PRICE_ID_BASICO || "price_basico",
  pro: process.env.STRIPE_PRICE_ID_PRO || "price_pro",
  avanzado: process.env.STRIPE_PRICE_ID_AVANZADO || "price_avanzado",
  empresarial: process.env.STRIPE_PRICE_ID_EMPRESARIAL || "price_empresarial",
}

export async function POST(request: NextRequest) {
  try {
    const { planId, planName, planPrice } = await request.json()

    if (!planId || !PLAN_PRICE_IDS[planId]) {
      return NextResponse.json(
        { error: "Plan no válido" },
        { status: 400 }
      )
    }

    const priceId = PLAN_PRICE_IDS[planId]

    // Crear sesión de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription", // o "payment" si es pago único
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/pago-exitoso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}#pricing-section`,
      metadata: {
        planId,
        planName,
        planPrice,
      },
      customer_email: undefined, // Se pedirá en el checkout
      allow_promotion_codes: true,
      billing_address_collection: "required",
      locale: "es",
      custom_text: {
        submit: {
          message: `Estás a punto de suscribirte al plan ${planName} por ${planPrice}. El pago se renovará automáticamente cada año.`,
        },
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json(
      { error: error.message || "Error al crear la sesión de pago" },
      { status: 500 }
    )
  }
}

