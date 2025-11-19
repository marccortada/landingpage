import { Shield, CheckCircle2, Zap } from "lucide-react"

export function SocialProof() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 flex flex-col justify-center items-center gap-6 sm:gap-7 md:gap-8 overflow-hidden">
      {/* Trust badges con iconos */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 px-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Shield className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">100% Normativa española</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Zap className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">Sin instalación</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">GDPR Compliant</span>
        </div>
      </div>

      <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Empresas líderes que confían en nosotros
      </div>
      <div className="self-stretch flex justify-center items-center gap-12">
        <img
          src="/logos/logo01.svg"
          alt="Stripe"
          className="h-8 opacity-60 hover:opacity-100 transition-opacity"
        />
        <img
          src="/stripe.png"
          alt="Stripe"
          className="h-20 opacity-60 hover:opacity-100 transition-opacity"
        />
        <img
          src="/cur.png"
          alt="Cursor"
          className="h-24 opacity-60 hover:opacity-100 transition-opacity"
        />
        <img
          src="/sup.png"
          alt="Supabase"
          className="h-20 opacity-60 hover:opacity-100 transition-opacity"
        />
        <img
          src="/dig.png"
          alt="Digital Ocean"
          className="h-24 opacity-60 hover:opacity-100 transition-opacity"
        />
      </div>
    </section>
  )
}
