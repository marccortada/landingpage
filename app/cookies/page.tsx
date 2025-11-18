import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-10">
        <Header />
        <main className="max-w-[1320px] mx-auto px-5 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al inicio
            </Link>

            <h1 className="text-foreground text-4xl md:text-5xl font-semibold mb-6">
              Política de Cookies
            </h1>
            <p className="text-muted-foreground text-base mb-12">
              Última actualización: {new Date().toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  1. ¿Qué son las cookies?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo
                  (ordenador, tablet o móvil) cuando visita un sitio web. Estas cookies permiten
                  que el sitio web recuerde sus acciones y preferencias durante un período de
                  tiempo, por lo que no tiene que volver a configurarlas cada vez que regrese al
                  sitio o navegue de una página a otra.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  2. ¿Qué cookies utilizamos?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En GTiQ utilizamos los siguientes tipos de cookies:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-foreground text-xl font-semibold mb-2">
                      Cookies técnicas (necesarias)
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Estas cookies son esenciales para el funcionamiento del sitio web y no pueden
                      desactivarse. Permiten funciones básicas como la navegación por la página y
                      el acceso a áreas seguras del sitio web.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Cookies de sesión: Mantienen la sesión del usuario activa</li>
                      <li>Cookies de seguridad: Protegen contra accesos no autorizados</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-foreground text-xl font-semibold mb-2">
                      Cookies de análisis
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Estas cookies nos ayudan a entender cómo los visitantes interactúan con
                      nuestro sitio web recopilando y reportando información de forma anónima.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Cookies de Google Analytics: Análisis de tráfico y comportamiento</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-foreground text-xl font-semibold mb-2">
                      Cookies de preferencias
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Estas cookies permiten que el sitio web recuerde información que cambia la
                      forma en que el sitio se comporta o se ve, como su idioma preferido o la
                      región en la que se encuentra.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  3. Finalidad de las cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos cookies para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Garantizar el correcto funcionamiento del sitio web</li>
                  <li>Mejorar la experiencia del usuario</li>
                  <li>Analizar el uso del sitio web para optimizar su rendimiento</li>
                  <li>Recordar sus preferencias y configuraciones</li>
                  <li>Proporcionar funcionalidades de seguridad</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  4. Duración de las cookies
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-foreground text-xl font-semibold mb-2">
                      Cookies de sesión
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Se eliminan automáticamente cuando cierra su navegador.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground text-xl font-semibold mb-2">
                      Cookies persistentes
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Permanecen en su dispositivo durante un período determinado o hasta que las
                      elimine manualmente. La duración varía según el tipo de cookie, pero
                      generalmente no excede los 24 meses.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  5. Gestión de cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Puede gestionar y eliminar las cookies a través de la configuración de su
                  navegador. Tenga en cuenta que si desactiva las cookies, algunas funcionalidades
                  del sitio web pueden no estar disponibles.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para obtener más información sobre cómo gestionar las cookies en los principales
                  navegadores:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  6. Cookies de terceros
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras
                  páginas. No controlamos el establecimiento de estas cookies, por lo que le
                  recomendamos que consulte los sitios web de estos terceros para obtener más
                  información sobre sus cookies y cómo gestionarlas.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  7. Consentimiento
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies de
                  acuerdo con esta política. Si no está de acuerdo, puede desactivar las cookies
                  a través de la configuración de su navegador, aunque esto puede afectar la
                  funcionalidad del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  8. Actualizaciones de esta política
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Podemos actualizar esta Política de Cookies ocasionalmente. Le notificaremos
                  cualquier cambio publicando la nueva política en esta página y actualizando la
                  fecha de "Última actualización".
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  9. Contacto
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos:
                </p>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a
                      href="mailto:info@gneraitiq.com"
                      className="text-primary hover:underline"
                    >
                      info@gneraitiq.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Teléfono:</strong>{" "}
                    <a
                      href="tel:+34744769246"
                      className="text-primary hover:underline"
                    >
                      +34 744 769 246
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
        <FooterSection />
      </div>
    </div>
  )
}

