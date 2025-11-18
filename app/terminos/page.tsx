import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import Link from "next/link"

export default function TerminosPage() {
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
              Términos de Servicio
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
                  Información del Proveedor
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <strong className="text-foreground">Proveedor:</strong> GnerAI / GTiQ
                  </p>
                  <p>
                    <strong className="text-foreground">CIF/NIF:</strong> 39946747W
                  </p>
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

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  1. Objeto del contrato
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Proveedor pone a disposición del Cliente la plataforma GTiQ, un sistema de
                  Control Horario, fichaje, gestión de ausencias, informes, geolocalización opcional
                  y herramientas relacionadas con el cumplimiento del Real Decreto-Ley 8/2019.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El servicio incluye:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Control horario y fichaje de empleados</li>
                  <li>Geolocalización opcional para fichajes</li>
                  <li>Gestión de ausencias y pausas laborales</li>
                  <li>Generación de informes automáticos</li>
                  <li>Herramientas para cumplimiento normativo</li>
                  <li>Almacenamiento seguro de datos durante el período legal requerido</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  2. Duración del contrato
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El contrato tiene una duración inicial de un (1) año desde la fecha del primer
                  pago (Fecha de Inicio). La Fecha de Vencimiento será exactamente un año después
                  de la Fecha de Inicio.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  3. Renovación automática
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El contrato se renovará automáticamente cada año en la fecha de vencimiento. En
                  cada renovación se cargará el importe del plan vigente del Cliente mediante el
                  método de pago registrado.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El Cliente será notificado con antelación sobre la próxima renovación y el importe
                  a cobrar.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  4. Cancelación
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Cliente podrá cancelar su suscripción con 30 días de antelación a la Fecha de
                  Vencimiento. La cancelación debe realizarse a través del panel de control o
                  contactando directamente con el Proveedor.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En caso de no cancelar con la antelación indicada, se procederá al cobro
                  automático del siguiente periodo anual, que no será reembolsable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Tras la cancelación, los datos se conservarán durante el período legal requerido
                  (4 años para fichajes) y luego se eliminarán de forma segura.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  5. Cambio de plan (Upgrade)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si el Cliente mejora su plan antes del vencimiento:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Se cobrará solo la parte proporcional restante del nuevo plan</li>
                  <li>El nuevo plan se activa de inmediato</li>
                  <li>En la próxima renovación se cobrará el importe completo del nuevo plan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  6. Disminución de plan (Downgrade)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Cliente podrá bajar de plan con 30 días de antelación a la fecha de
                  vencimiento, pero el cambio solo será efectivo al finalizar el periodo actual
                  contratado.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Durante el periodo restante, el Cliente mantendrá acceso a las funcionalidades
                  del plan actual.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  7. Obligaciones del Cliente
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Cliente se compromete a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    Proporcionar datos veraces, actualizados y completos durante el registro y uso
                    del servicio
                  </li>
                  <li>
                    Utilizar GTiQ conforme a la ley y estos términos de servicio
                  </li>
                  <li>
                    Informar adecuadamente a sus empleados sobre el uso del sistema de control
                    horario
                  </li>
                  <li>
                    Custodiar y mantener la confidencialidad de sus credenciales de acceso
                  </li>
                  <li>
                    Notificar inmediatamente cualquier uso no autorizado de su cuenta
                  </li>
                  <li>
                    Realizar los pagos correspondientes en los plazos establecidos
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  8. Obligaciones del Proveedor
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Proveedor se compromete a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    Mantener un servicio estable y disponible, garantizando un tiempo de actividad
                    razonable
                  </li>
                  <li>
                    Implementar medidas de seguridad apropiadas para proteger los datos del Cliente
                  </li>
                  <li>
                    Cumplir con el Reglamento General de Protección de Datos (RGPD) y la
                    normativa española aplicable
                  </li>
                  <li>
                    Proporcionar soporte técnico razonable para resolver incidencias y consultas
                  </li>
                  <li>
                    Conservar los datos de fichaje durante el período mínimo legal requerido (4
                    años)
                  </li>
                  <li>
                    Notificar al Cliente sobre cambios significativos en el servicio o estos
                    términos
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  9. Protección de datos (RGPD)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En relación con el tratamiento de datos personales:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">El Proveedor actúa como Encargado del
                    Tratamiento</strong> y procesa los datos según las instrucciones del Cliente
                  </li>
                  <li>
                    <strong className="text-foreground">El Cliente actúa como Responsable del
                    Tratamiento</strong> y es responsable de cumplir con las obligaciones del RGPD
                  </li>
                  <li>
                    Se garantiza la seguridad de los datos mediante cifrado y medidas técnicas
                    apropiadas
                  </li>
                  <li>
                    Los subencargados utilizados son compatibles con el RGPD y mantienen los mismos
                    estándares de seguridad
                  </li>
                  <li>
                    Los datos de fichaje se conservan durante 4 años desde la fecha del fichaje,
                    según normativa española
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Para más información sobre el tratamiento de datos, consulte nuestra{" "}
                  <a href="/privacidad" className="text-primary hover:underline">
                    Política de Privacidad
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  10. Formas de pago
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los pagos se realizan de forma automatizada mediante tarjeta de crédito o débito
                  u otros métodos de pago habilitados en la plataforma.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los cobros son no reembolsables salvo error del Proveedor. En caso de error en el
                  cobro, el Cliente deberá notificarlo en un plazo de 30 días y el Proveedor
                  procederá a la corrección o reembolso correspondiente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  El Cliente debe mantener actualizada su información de pago para garantizar la
                  continuidad del servicio.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  11. Suspensión del servicio
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Proveedor se reserva el derecho de suspender el servicio en los siguientes
                  casos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Impago:</strong> Cuando el Cliente no
                    realice el pago en el plazo establecido
                  </li>
                  <li>
                    <strong className="text-foreground">Uso indebido:</strong> Cuando se detecte
                    un uso fraudulento, ilegal o que viole estos términos
                  </li>
                  <li>
                    <strong className="text-foreground">Incumplimiento grave:</strong> Cuando el
                    Cliente incumpla de forma grave sus obligaciones contractuales
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  El Proveedor notificará al Cliente antes de la suspensión, excepto en casos de
                  urgencia o seguridad.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  12. Resolución
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cualquiera de las partes puede resolver el contrato si la otra parte incumple
                  sus obligaciones y no subsana el incumplimiento en un plazo de 15 días desde la
                  notificación del incumplimiento.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La resolución del contrato no afectará a los derechos y obligaciones ya
                  adquiridos, incluyendo la conservación de datos según la normativa aplicable.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  13. Jurisdicción
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Este contrato se rige por la legislación española. Para cualquier controversia
                  derivada de este contrato, las partes se someten a los tribunales del domicilio
                  del Proveedor.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  14. Aceptación
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Al utilizar el servicio GTiQ, el Cliente acepta estos términos de servicio y se
                  compromete a cumplirlos. El uso continuado del servicio constituye la aceptación
                  de estos términos y cualquier modificación posterior.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  15. Modificaciones
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Proveedor se reserva el derecho de modificar estos términos de servicio. Las
                  modificaciones se comunicarán al Cliente con al menos 30 días de antelación. El
                  uso continuado del servicio tras la notificación constituye la aceptación de los
                  nuevos términos.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  Contacto
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para cualquier consulta sobre estos Términos de Servicio, puede contactarnos:
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
