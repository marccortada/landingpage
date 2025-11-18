import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

// Mapeo de planes a Product IDs o Price IDs de Stripe
// Puedes usar Product IDs (empiezan con prod_) o Price IDs (empiezan con price_)
// Si usas Product IDs, el código buscará automáticamente el precio asociado
const PLAN_IDS: Record<string, string> = {
  basico: process.env.STRIPE_PRODUCT_ID_BASICO || process.env.STRIPE_PRICE_ID_BASICO || "",
  pro: process.env.STRIPE_PRODUCT_ID_PRO || process.env.STRIPE_PRICE_ID_PRO || "",
  avanzado: process.env.STRIPE_PRODUCT_ID_AVANZADO || process.env.STRIPE_PRICE_ID_AVANZADO || "",
  empresarial: process.env.STRIPE_PRODUCT_ID_EMPRESARIAL || process.env.STRIPE_PRICE_ID_EMPRESARIAL || "",
}

// Función para obtener el Price ID desde un Product ID
async function getPriceIdFromProduct(productId: string): Promise<string> {
  // Si ya es un Price ID, devolverlo directamente
  if (productId.startsWith("price_")) {
    return productId
  }

  // Si es un Product ID, buscar los precios asociados
  if (productId.startsWith("prod_")) {
    const prices = await stripe.prices.list({
      product: productId,
      active: true,
    })

    if (prices.data.length === 0) {
      throw new Error(`No se encontraron precios activos para el producto ${productId}`)
    }

    // Priorizar precio anual (interval: year) o el primero disponible
    const annualPrice = prices.data.find((price) => price.recurring?.interval === "year")
    if (annualPrice) {
      return annualPrice.id
    }

    // Si no hay precio anual, usar el primero
    return prices.data[0].id
  }

  throw new Error(`ID inválido: ${productId}. Debe ser un Product ID (prod_...) o Price ID (price_...)`)
}

export async function POST(request: NextRequest) {
  try {
    const { planId, planName, planPrice } = await request.json()

    if (!planId || !PLAN_IDS[planId]) {
      return NextResponse.json(
        { error: "Plan no válido o no configurado" },
        { status: 400 }
      )
    }

    const productOrPriceId = PLAN_IDS[planId]
    const priceId = await getPriceIdFromProduct(productOrPriceId)

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

