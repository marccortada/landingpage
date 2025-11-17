export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
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
          src="/logos/logo04.svg"
          alt="ChatGPT"
          className="h-8 opacity-60 hover:opacity-100 transition-opacity"
        />
        <img
          src="/logos/logo02.svg"
          alt="Cursor"
          className="h-8 opacity-60 hover:opacity-100 transition-opacity"
        />
      </div>
    </section>
  )
}
