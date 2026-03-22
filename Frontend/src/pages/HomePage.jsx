import bgGeomembranas from '../assets/images/bg-geomembranas.jpg'

const services = [
  {
    title: 'Instalación de geomembranas HDPE',
    description: 'Impermeabilización profesional para lagunas, reservorios y proyectos mineros.',
  },
  {
    title: 'Mantenimiento y reparación',
    description: 'Detección de fugas, resoldado y recuperación de sistemas existentes.',
  },
  {
    title: 'Asesoría técnica en campo',
    description: 'Evaluación del terreno, selección de espesor y recomendaciones de durabilidad.',
  },
]

export function HomePage() {
  return (
    <div className="bg-[#0e1f17]">
      <section
        id="inicio"
        className="relative isolate min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(3, 12, 8, 0.86) 15%, rgba(4, 15, 10, 0.58) 50%, rgba(5, 16, 11, 0.25) 100%), url('${bgGeomembranas}')`,
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl px-4 pb-20 pt-36 sm:pt-44">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/95">
              Servicio especializado en geomembranas
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Protegemos tu proyecto con soluciones en geomembranas de alta duración
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
              Diseñamos e instalamos sistemas de impermeabilización para agricultura, minería e industria,
              evitando filtraciones y reduciendo costos de mantenimiento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-lg bg-lime-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#0f2618] transition hover:bg-lime-400"
              >
                Solicitar cotización
              </a>
              <a
                href="#servicios"
                className="rounded-lg border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-lime-400">Qué hacemos</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Servicio integral para obras con geomembrana</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:pb-20">
        <div className="rounded-2xl border border-lime-300/30 bg-lime-500/10 p-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Resultados que generan confianza</h2>
          <p className="mt-4 max-w-3xl text-white/80">
            Hemos trabajado en pozas, canales y reservorios para clientes que necesitaban estanqueidad,
            seguridad ambiental y vida útil prolongada en sus instalaciones.
          </p>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-lime-400">Contacto directo</p>
            <h2 className="mt-2 text-2xl font-bold text-white">¿Listo para impermeabilizar tu proyecto?</h2>
          </div>
          <a
            href="https://wa.me/51999999999"
            className="rounded-lg bg-lime-500 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-[#102214] transition hover:bg-lime-400"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
