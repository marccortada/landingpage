import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PagoExitosoPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-10">
        <Header />
        <main className="max-w-[1320px] mx-auto px-5 py-12 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-foreground text-4xl md:text-5xl font-semibold mb-4">
              ¡Pago realizado con éxito!
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Gracias por confiar en GTiQ. Tu suscripción ha sido activada correctamente.
            </p>
            
            <div className="bg-card/50 border border-border rounded-xl p-6 mb-8 text-left">
              <h2 className="text-foreground text-xl font-semibold mb-4">
                Próximos pasos:
              </h2>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>Recibirás un email de confirmación con los detalles de tu suscripción</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>Te enviaremos las credenciales de acceso a tu cuenta en las próximas 24 horas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>Podrás comenzar a usar GTiQ inmediatamente después de recibir tus credenciales</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/">
                  Volver al inicio
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:info@gneraitiq.com">
                  Contactar soporte
                </a>
              </Button>
            </div>
            
            <p className="text-muted-foreground text-sm mt-8">
              Si tienes alguna pregunta, no dudes en contactarnos en{" "}
              <a href="mailto:info@gneraitiq.com" className="text-primary hover:underline">
                info@gneraitiq.com
              </a>
              {" "}o llamando al{" "}
              <a href="tel:+34744769246" className="text-primary hover:underline">
                +34 744 769 246
              </a>
            </p>
          </div>
        </main>
        <FooterSection />
      </div>
    </div>
  )
}

