# Configuración de Stripe para GTiQ

Esta guía te ayudará a configurar Stripe para procesar los pagos de los planes de GTiQ.

## Pasos para configurar Stripe

### 1. Crear cuenta en Stripe

1. Ve a [https://stripe.com](https://stripe.com) y crea una cuenta
2. Completa la verificación de tu cuenta (información de negocio, cuenta bancaria, etc.)

### 2. Obtener las claves de API

1. Ve al [Dashboard de Stripe](https://dashboard.stripe.com)
2. En el menú lateral, ve a **Developers** > **API keys**
3. Copia tu **Secret key** (empieza con `sk_`)
4. Copia tu **Publishable key** (empieza con `pk_`)

### 3. Crear productos y precios en Stripe

Para cada plan, necesitas crear un producto y un precio en Stripe:

1. Ve a **Products** en el Dashboard de Stripe
2. Crea un producto para cada plan:
   - **Básico**: 119€/año
   - **Pro**: 189€/año
   - **Avanzado**: 289€/año
   - **Empresarial**: 489€/año

3. Para cada producto:
   - Nombre: "GTiQ - [Nombre del Plan]"
   - Descripción: "Plan [Nombre] - [Descripción]"
   - Precio: Configura como suscripción anual recurrente
   - Moneda: EUR (€)
   - Intervalo: Anual

4. **IMPORTANTE**: Copia el **Product ID** (empieza con `prod_`) o el **Price ID** (empieza con `price_`)
   - Si usas Product ID, el código buscará automáticamente el precio anual asociado
   - Si usas Price ID, se usará directamente ese precio

### 4. Configurar variables de entorno

Agrega las siguientes variables a tu archivo `.env.local`:

```env
# Stripe Keys
STRIPE_SECRET_KEY=sk_test_... (o sk_live_... para producción)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (o pk_live_... para producción)

# Stripe Product IDs o Price IDs (puedes usar cualquiera de los dos)
# Si usas Product IDs, el código buscará automáticamente el precio anual
# Si usas Price IDs, se usarán directamente
STRIPE_PRODUCT_ID_BASICO=prod_xxxxx  # O STRIPE_PRICE_ID_BASICO=price_xxxxx
STRIPE_PRODUCT_ID_PRO=prod_xxxxx     # O STRIPE_PRICE_ID_PRO=price_xxxxx
STRIPE_PRODUCT_ID_AVANZADO=prod_xxxxx # O STRIPE_PRICE_ID_AVANZADO=price_xxxxx
STRIPE_PRODUCT_ID_EMPRESARIAL=prod_xxxxx # O STRIPE_PRICE_ID_EMPRESARIAL=price_xxxxx

# URL base de tu aplicación
NEXT_PUBLIC_BASE_URL=http://localhost:3000 (desarrollo)
# NEXT_PUBLIC_BASE_URL=https://tudominio.com (producción)
```

**Nota**: Puedes usar Product IDs o Price IDs, o incluso mezclar ambos. El código detectará automáticamente qué tipo de ID es y funcionará correctamente.

### 5. Configurar webhooks (opcional pero recomendado)

Los webhooks te permiten recibir notificaciones cuando ocurren eventos en Stripe (pagos exitosos, cancelaciones, etc.).

1. Ve a **Developers** > **Webhooks** en el Dashboard de Stripe
2. Click en **Add endpoint**
3. URL del endpoint: `https://tudominio.com/api/webhooks/stripe`
4. Eventos a escuchar:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`

### 6. Modo de prueba vs Producción

- **Modo de prueba**: Usa claves que empiezan con `sk_test_` y `pk_test_`
- **Modo de producción**: Usa claves que empiezan con `sk_live_` y `pk_live_`

Para probar pagos en modo de prueba, usa las tarjetas de prueba de Stripe:
- Tarjeta exitosa: `4242 4242 4242 4242`
- Cualquier fecha futura y cualquier CVC

## Estructura de la integración

- **API Route**: `/app/api/create-checkout-session/route.ts` - Crea la sesión de checkout
- **Componente**: `/components/pricing-section.tsx` - Maneja los clics en los planes
- **Página de éxito**: `/app/pago-exitoso/page.tsx` - Página mostrada después del pago exitoso

## Flujo de pago

1. Usuario hace clic en "Elegir plan"
2. Se crea una sesión de checkout en Stripe
3. Usuario es redirigido a Stripe Checkout
4. Usuario completa el pago
5. Usuario es redirigido a `/pago-exitoso`

## Notas importantes

- Los precios están configurados como suscripciones anuales recurrentes
- El plan Enterprise redirige al formulario de contacto (no usa Stripe)
- Puedes usar **Product IDs** (`prod_...`) o **Price IDs** (`price_...`) en las variables de entorno
- Si usas Product IDs, el código buscará automáticamente el precio anual asociado
- Si un producto tiene múltiples precios, se priorizará el precio anual
- Asegúrate de actualizar los IDs en las variables de entorno después de crear los productos en Stripe
- En producción, cambia las URLs y claves a las de producción

## Soporte

Si tienes problemas con la configuración, consulta la [documentación de Stripe](https://stripe.com/docs) o contacta a soporte.

