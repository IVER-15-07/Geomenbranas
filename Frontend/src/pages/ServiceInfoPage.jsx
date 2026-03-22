import { PageHeader } from '../components/common/PageHeader'

const benefits = [
  'Impermeabilización de alta resistencia para reservorios y lagunas.',
  'Protección contra filtraciones, erosión y contaminación del suelo.',
  'Instalación técnica con soldadura y pruebas de calidad en campo.',
]

const process = [
  'Levantamiento del área y evaluación técnica inicial.',
  'Selección de tipo y espesor de geomembrana según el proyecto.',
  'Preparación de superficie, instalación y control de juntas.',
  'Entrega con recomendaciones de mantenimiento preventivo.',
]

export function ServiceInfoPage() {
  return (
    <section>
      <PageHeader
        title="Información del servicio"
        subtitle="Servicio integral de geomembranas para proyectos agrícolas, industriales y ambientales."
      />

      <div className="space-y-6">
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">¿Qué ofrecemos?</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {benefits.map((item) => (
              <li key={item} className="list-inside list-disc">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Proceso de trabajo</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            {process.map((item) => (
              <li key={item} className="list-inside list-decimal">
                {item}
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-2 text-lg font-semibold text-blue-900">Atención y cobertura</h2>
          <p className="text-sm text-blue-900">
            Brindamos asesoría previa, cronograma de ejecución y soporte post-instalación para asegurar
            la vida útil del sistema.
          </p>
        </article>
      </div>
    </section>
  )
}