import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import Link from "next/link"

export default function PrivacidadPage() {
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
              Política de Privacidad
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
                  1. Información general
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esta Política de Privacidad explica cómo GTiQ (GnerAI) procesa los datos
                  personales en su calidad de Encargado del Tratamiento, según el Reglamento
                  General de Protección de Datos (RGPD) y la normativa española aplicable.
                </p>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <strong className="text-foreground">Encargado del Tratamiento:</strong> GnerAI / GTiQ
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
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong className="text-foreground">Nota importante:</strong> GTiQ actúa como
                  Encargado del Tratamiento. El Cliente (empresa que contrata el servicio) actúa
                  como Responsable del Tratamiento y es quien determina las finalidades y medios
                  del tratamiento de los datos de sus empleados.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  2. Información que procesamos
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-foreground text-xl font-semibold mb-2">
                      Datos del Cliente (Responsable)
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Datos de registro: razón social, CIF/NIF, representante legal</li>
                      <li>Información de contacto: email, teléfono, domicilio</li>
                      <li>Información de facturación: datos de pago y facturación</li>
                      <li>Datos de acceso: credenciales de usuario administrador</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-foreground text-xl font-semibold mb-2">
                      Datos de empleados (procesados por cuenta del Cliente)
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Datos identificativos: nombre, DNI/NIE</li>
                      <li>Datos de fichaje: hora, fecha y ubicación GPS de los fichajes</li>
                      <li>Datos laborales: horarios, ausencias, pausas</li>
                      <li>Datos de uso: actividad en la plataforma</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-foreground text-xl font-semibold mb-2">
                      Información técnica
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Dirección IP, tipo de navegador, dispositivo</li>
                      <li>Registros de acceso y actividad</li>
                      <li>Cookies y tecnologías similares (consulte nuestra Política de Cookies)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  3. Finalidad del tratamiento
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Como Encargado del Tratamiento, procesamos los datos personales según las
                  instrucciones del Cliente (Responsable) para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Prestación del servicio:</strong> Gestionar
                    fichajes, generar informes y proporcionar funcionalidades del sistema de control
                    horario
                  </li>
                  <li>
                    <strong className="text-foreground">Cumplimiento legal:</strong> Cumplir con
                    la normativa española de control horario (Real Decreto-Ley 8/2019) y
                    almacenamiento de datos
                  </li>
                  <li>
                    <strong className="text-foreground">Facturación:</strong> Procesar pagos y
                    gestionar suscripciones del Cliente
                  </li>
                  <li>
                    <strong className="text-foreground">Comunicación:</strong> Responder a
                    consultas y enviar notificaciones importantes del servicio
                  </li>
                  <li>
                    <strong className="text-foreground">Mejora del servicio:</strong> Analizar el
                    uso para optimizar y mejorar nuestras funcionalidades (datos anonimizados)
                  </li>
                  <li>
                    <strong className="text-foreground">Seguridad:</strong> Prevenir fraudes,
                    detectar actividades sospechosas y proteger nuestros sistemas
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  4. Base legal para el tratamiento
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El tratamiento de datos personales se basa en:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Ejecución del contrato:</strong> Para
                    proporcionar el servicio contratado por el Cliente
                  </li>
                  <li>
                    <strong className="text-foreground">Obligación legal:</strong> Cumplir con la
                    normativa de control horario (Real Decreto-Ley 8/2019) que obliga a las
                    empresas a registrar la jornada laboral
                  </li>
                  <li>
                    <strong className="text-foreground">Interés legítimo:</strong> Para mejorar el
                    servicio, garantizar la seguridad y prevenir fraudes
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  El Cliente (Responsable del Tratamiento) es quien debe informar a sus empleados
                  sobre el tratamiento de sus datos y obtener los consentimientos necesarios cuando
                  corresponda.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  5. Conservación de datos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conservamos los datos personales durante los siguientes períodos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Datos de fichaje:</strong> Mínimo 4 años
                    desde la fecha del fichaje, según normativa española (Real Decreto-Ley 8/2019)
                  </li>
                  <li>
                    <strong className="text-foreground">Datos de cuenta del Cliente:</strong> Mientras
                    la cuenta esté activa y durante 3 años tras la cancelación
                  </li>
                  <li>
                    <strong className="text-foreground">Datos de facturación:</strong> Durante el
                    período requerido por la legislación fiscal (generalmente 6 años)
                  </li>
                  <li>
                    <strong className="text-foreground">Datos de comunicación:</strong> Durante 2
                    años desde la última interacción
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Transcurridos estos plazos, los datos se eliminarán de forma segura e
                  irreversible, salvo que exista una obligación legal que requiera una
                  conservación más prolongada.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  6. Compartir información
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Como Encargado del Tratamiento, no compartimos datos personales con terceros
                  salvo:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Subencargados compatibles:</strong> Empresas
                    que nos ayudan a operar (hosting, procesamiento de pagos, análisis), bajo
                    estrictos acuerdos de confidencialidad y cumplimiento del RGPD. Todos los
                    subencargados mantienen los mismos estándares de seguridad.
                  </li>
                  <li>
                    <strong className="text-foreground">Autoridades legales:</strong> Cuando sea
                    requerido por ley o para cumplir con órdenes judiciales
                  </li>
                  <li>
                    <strong className="text-foreground">Transferencias empresariales:</strong> En
                    caso de fusión, adquisición o venta de activos (con previa notificación al
                    Cliente)
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  No vendemos ni alquilamos información personal a terceros para fines comerciales.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  7. Seguridad de los datos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger los
                  datos personales:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Cifrado de datos en tránsito (HTTPS/TLS) y en reposo</li>
                  <li>Acceso restringido mediante autenticación y autorización</li>
                  <li>Copias de seguridad regulares y sistemas de recuperación</li>
                  <li>Monitoreo continuo de seguridad y detección de intrusiones</li>
                  <li>Formación del personal en protección de datos</li>
                  <li>Auditorías de seguridad periódicas</li>
                  <li>Controles de acceso basados en roles y principio de menor privilegio</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  8. Derechos de los interesados
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De acuerdo con el RGPD, los interesados (empleados y clientes) tienen derecho a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Acceso:</strong> Obtener información sobre
                    qué datos personales se tratan
                  </li>
                  <li>
                    <strong className="text-foreground">Rectificación:</strong> Corregir datos
                    inexactos o incompletos
                  </li>
                  <li>
                    <strong className="text-foreground">Supresión:</strong> Solicitar la
                    eliminación de sus datos (con las limitaciones legales aplicables, especialmente
                    la obligación de conservar fichajes durante 4 años)
                  </li>
                  <li>
                    <strong className="text-foreground">Limitación:</strong> Restringir el
                    tratamiento en determinadas circunstancias
                  </li>
                  <li>
                    <strong className="text-foreground">Portabilidad:</strong> Recibir sus datos
                    en formato estructurado y comúnmente usado
                  </li>
                  <li>
                    <strong className="text-foreground">Oposición:</strong> Oponerse al tratamiento
                    por motivos legítimos
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong className="text-foreground">Importante:</strong> Como Encargado del
                  Tratamiento, GTiQ no puede atender directamente las solicitudes de derechos de
                  los empleados. Estas solicitudes deben dirigirse al Cliente (Responsable del
                  Tratamiento), quien las gestionará según corresponda. GTiQ colaborará con el
                  Cliente para atender estas solicitudes cuando sea necesario.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Para ejercer sus derechos, los interesados pueden contactar al Cliente o, si
                  corresponde, a GTiQ en{" "}
                  <a
                    href="mailto:info@gneraitiq.com"
                    className="text-primary hover:underline"
                  >
                    info@gneraitiq.com
                  </a>
                  . Responderemos en un plazo máximo de un mes.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  9. Transferencias internacionales
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los datos se almacenan principalmente en servidores ubicados en la Unión Europea.
                  En caso de transferencias fuera del Espacio Económico Europeo (EEE),
                  garantizamos que se aplican las salvaguardias adecuadas según el RGPD, como:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Cláusulas contractuales estándar aprobadas por la Comisión Europea</li>
                  <li>Decisiones de adecuación de la Comisión Europea</li>
                  <li>Otros mecanismos reconocidos por el RGPD</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  10. Menores de edad
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nuestro servicio está dirigido a empresas y no está diseñado para menores de 18
                  años. No recopilamos intencionalmente información personal de menores. Si
                  descubrimos que hemos procesado información de un menor, tomaremos medidas para
                  eliminarla inmediatamente, salvo que exista una obligación legal que requiera su
                  conservación.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  11. Cambios en esta política
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos
                  cualquier cambio significativo publicando la nueva política en esta página,
                  actualizando la fecha de "Última actualización" y, cuando corresponda,
                  notificando al Cliente con al menos 30 días de antelación.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Le recomendamos que revise esta política periódicamente para estar informado
                  sobre cómo protegemos sus datos.
                </p>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  12. Reclamaciones
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si considera que el tratamiento de sus datos personales vulnera la normativa de
                  protección de datos, tiene derecho a presentar una reclamación ante la Agencia
                  Española de Protección de Datos (AEPD):
                </p>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <strong className="text-foreground">Agencia Española de Protección de Datos</strong>
                  </p>
                  <p>C/ Jorge Juan, 6 - 28001 Madrid</p>
                  <p>
                    <a
                      href="https://www.aepd.es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.aepd.es
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:912663517"
                      className="text-primary hover:underline"
                    >
                      912 663 517
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-foreground text-2xl font-semibold mb-4">
                  13. Contacto
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si tiene preguntas sobre esta Política de Privacidad o sobre el tratamiento de
                  sus datos personales, puede contactarnos:
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
