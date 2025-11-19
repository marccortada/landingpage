import Image from "next/image"

export function LargeTestimonial() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="w-full max-w-[1320px] flex flex-col justify-start items-start overflow-hidden">
        <div className="w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 flex flex-col justify-start items-start gap-3 sm:gap-4">
          <div className="w-full flex justify-between items-center">
            <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-11">
              <div className="w-full max-w-[1024px] text-center text-foreground leading-6 sm:leading-7 md:leading-9 lg:leading-10 xl:leading-[64px] font-medium text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl px-2">
                GTiQ nos ha ayudado a digitalizar todo el proceso de fichaje. Ahora llevamos el control del equipo sin errores y sin complicaciones.
              </div>
              <div className="flex justify-start items-center gap-5">
                <Image
                  src="/logodec.png"
                  alt="Dec Idiomes"
                  width={64}
                  height={64}
                  className="w-16 h-16 relative object-contain"
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="text-foreground text-base font-medium leading-6">Dec Idiomes</div>
                  <div className="text-muted-foreground text-sm font-normal leading-6 italic">Cristina Sardanyés CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
