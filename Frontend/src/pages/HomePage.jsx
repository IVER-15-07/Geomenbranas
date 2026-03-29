
import bg from '../assets/images/bg.jpg'
import serviceImageOne from '../assets/images/descarga (1).jpg'
import serviceImageTwo from '../assets/images/descarga (2).jpg'
import serviceImageThree from '../assets/images/descarga (3).jpg'
import projectImageOne from '../assets/images/descarga (4).jpg'
import projectImageTwo from '../assets/images/descarga (5).jpg'
import projectImageThree from '../assets/images/descarga (6).jpg'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const services = [
  {
    title: 'Instalación de geomembranas HDPE',
    description: 'Impermeabilización profesional para lagunas, reservorios y proyectos mineros.',
    image: serviceImageOne,
  },
  {
    title: 'Mantenimiento y reparación',
    description: 'Detección de fugas, resoldado y recuperación de sistemas existentes.',
    image: serviceImageTwo,
  },
  {
    title: 'Asesoría técnica en campo',
    description: 'Evaluación del terreno, selección de espesor y recomendaciones de durabilidad.',
    image: serviceImageThree,
  },
]

const projects = [projectImageOne, projectImageTwo, projectImageThree]

export function HomePage() {
  useRevealOnScroll()

  return (
    <div
      className="bg-slate-950 bg-cover bg-center bg-scroll md:bg-fixed"
      style={{
        backgroundImage:
          `linear-gradient(180deg, rgba(2, 6, 23, 0.88) 0%, rgba(3, 7, 18, 0.9) 100%), url('${bg}')`,
      }}
    >
      <section
        id="inicio"
        className="relative isolate min-h-screen scroll-mt-28 overflow-hidden bg-cover bg-center sm:scroll-mt-24"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(3, 12, 8, 0.86) 15%, rgba(4, 15, 10, 0.58) 50%, rgba(5, 16, 11, 0.25) 100%), url('${bg}')`,
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl px-4 pb-16 pt-44 sm:pb-20 sm:pt-44 animate-enter">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-white/95 sm:mb-5 sm:px-4 sm:text-xs animate-enter animate-delay-1">
              Servicio especializado en geomembranas
            </p>
            <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl animate-enter animate-delay-2">
              Protegemos tu proyecto con soluciones en geomembranas de alta duración
            </h1>
            <p className="mt-5 max-w-xl text-sm text-white/85 sm:mt-6 sm:text-lg animate-enter animate-delay-3">
              Diseñamos e instalamos sistemas de impermeabilización para agricultura, minería e industria,
              evitando filtraciones y reduciendo costos de mantenimiento.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap animate-enter animate-delay-4">
              <a
                href="#contacto"
                className="w-full rounded-lg bg-lime-500 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-[#0f2618] transition hover:bg-emerald-300 sm:w-auto"
              >
                Solicitar cotización
              </a>
              <a
                href="#servicios"
                className="w-full rounded-lg border border-white/40 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:border-cyan-300 hover:bg-cyan-400/20 sm:w-auto"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-14 sm:scroll-mt-24 sm:py-20 animate-enter animate-delay-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-lime-400">Qué hacemos</p>
        <h2 className="mt-3 text-2xl font-bold text-white sm:text-4xl">Servicio integral para obras con geomembrana</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 ${index % 2 === 0 ? 'animate-enter-left' : 'animate-enter-right'} ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : 'animate-delay-3'}`}
            >
              <img src={service.image} alt={service.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 pb-14 sm:scroll-mt-24 sm:pb-20 animate-enter animate-delay-2">
        <div className="rounded-2xl border border-cyan-300/30 bg-slate-900/70 p-6 sm:p-8 animate-enter-left animate-delay-1">
          <h2 className="text-xl font-bold text-white sm:text-3xl">Resultados que generan confianza</h2>
          <p className="mt-4 max-w-3xl text-white/80">
            Hemos trabajado en pozas, canales y reservorios para clientes que necesitaban estanqueidad,
            seguridad ambiental y vida útil prolongada en sus instalaciones.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {projects.map((projectImage, index) => (
            <article
              key={projectImage}
              className={`${index % 2 === 0 ? 'animate-enter-right' : 'animate-enter-left'} rounded-2xl border border-white/10 bg-white/5 p-2 ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : 'animate-delay-3'}`}
            >
              <img src={projectImage} alt={`Proyecto ${index + 1}`} className="h-48 w-full rounded-xl object-cover sm:h-44" />
            </article>
          ))}
        </div>
      </section>

      <footer id="contacto" className="scroll-mt-28 border-t border-white/10 bg-black/50 sm:scroll-mt-24 animate-enter animate-delay-3">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div className="animate-enter-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-lime-400">Empresa</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Soluciones Muñoz</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Instalación, mantenimiento y asesoría técnica en geomembranas para proyectos agrícolas,
              mineros e industriales.
            </p>
          </div>

          <div className="animate-enter animate-delay-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-lime-400">Contacto</p>
            <div className="mt-3 space-y-2 text-sm text-white/85">
              <p>
                <span className="font-semibold text-white">WhatsApp:</span> +569 71488352
              </p>
              <p>
                <span className="font-semibold text-white">Teléfono:</span> +569 71488352
              </p>
              <p className="break-all">
                <span className="font-semibold text-white">Correo:</span> jorgegonzalomunozjerez05@gmail.com
              </p>
            </div>
            <a
              href="https://wa.me/56971488352"
              className="mt-4 inline-flex rounded-lg bg-lime-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#102214] transition hover:bg-lime-400"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <div className="animate-enter-right animate-delay-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-lime-400">Redes sociales</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-blue-300 hover:bg-blue-500/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M13.5 8.5V6.7c0-.7.5-1.2 1.2-1.2h1.8V2h-3c-2.5 0-4.2 1.7-4.2 4.3v2.2H7v3.5h2.3V22h4.2v-10h2.8l.5-3.5h-3.3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-pink-300 hover:bg-pink-500/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>
              <a
                href="https://wa.me/56971488352"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-lime-300 hover:bg-lime-500/25"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.6 4.2 1.7 6L0 24l6.4-1.8c1.8 1 3.8 1.5 5.7 1.5h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.4zM12.2 21.7c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 0 1-1.5-5.2C2.6 6.4 6.9 2.1 12.2 2.1c2.6 0 5 1 6.9 2.9a9.7 9.7 0 0 1 2.8 6.9c0 5.3-4.3 9.8-9.7 9.8zm5.3-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.1-.2.2-.4.2-.7 0-.3-.2-1.4-.5-2.6-1.7-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.2-.6l.5-.6c.2-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3 0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.6 4.2.6.3 1.1.5 1.4.6.6.2 1.2.2 1.6.1.5-.1 1.8-.8 2-1.6.2-.8.2-1.5.1-1.6-.1-.1-.3-.2-.6-.4z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">
              Síguenos para ver proyectos, novedades y asesorías.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Soluciones Muñoz. Todos los derechos reservados.</p>
            <p>Geomembranas · Instalación · Mantenimiento</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

