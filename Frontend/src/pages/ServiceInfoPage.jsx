import { PageHeader } from '../components/common/PageHeader'
import infoImageOne from '../assets/images/descarga (1).jpg'
import infoImageTwo from '../assets/images/descarga (2).jpg'
import infoImageThree from '../assets/images/descarga (3).jpg'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const benefits = [
  'Impermeabilización de alta resistencia para reservorios y lagunas.',
  'Protección contra filtraciones, erosión y contaminación del suelo.',
  'Instalación técnica con soldadura y pruebas de calidad en campo.',
]

const proceso = [
  'Levantamiento del área y evaluación técnica inicial.',
  'Selección de tipo y espesor de geomembrana según el proyecto.',
  'Preparación de superficie, instalación y control de juntas.',
  'Entrega con recomendaciones de mantenimiento preventivo.',
]

export function ServiceInfoPage() {
  useRevealOnScroll()

  return (
    <section className="px-4 pb-10 pt-28 sm:px-0 sm:pb-0 sm:pt-0">
      <PageHeader
        title="Información del servicio"
        subtitle="Servicio integral de geomembranas para proyectos agrícolas, industriales y ambientales."
      />

      <div className="space-y-6">
        <article className="animate-enter-left rounded-xl border border-gray-200 bg-white p-0 shadow-sm">
          <img src={infoImageOne} alt="Servicio de geomembranas" className="h-40 w-full rounded-t-xl object-cover sm:h-44" />
          <div className="p-5 sm:p-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">¿Qué ofrecemos?</h2>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              {benefits.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="animate-enter-right animate-delay-1 rounded-xl border border-gray-200 bg-white p-0 shadow-sm">
          <img src={infoImageTwo} alt="Proceso de instalación" className="h-40 w-full rounded-t-xl object-cover sm:h-44" />
          <div className="p-5 sm:p-6">


            <h2 className="mb-2 text-lg font-semibold text-gray-900">Proceso de trabajo</h2>
            <ol className="list-inside list-decimal space-y-2 text-sm text-gray-700">
              {proceso.map((item) => (
                <li key={item}>
                  
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </article>

        <article className="animate-enter-left animate-delay-2 rounded-xl border border-blue-200 bg-blue-50 p-0">
          <img src={infoImageThree} alt="Atención y cobertura" className="h-40 w-full rounded-t-xl object-cover sm:h-44" />
          <div className="p-5 sm:p-6">
            <h2 className="mb-2 text-lg font-semibold text-blue-900">Atención y cobertura</h2>
            <p className="text-sm text-blue-900">
              Brindamos asesoría previa, cronograma de ejecución y soporte post-instalación para asegurar
              la vida útil del sistema.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}