
import bg from '../assets/images/bg.jpg'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const Hero = () => {
  useRevealOnScroll()

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen scroll-mt-28 overflow-hidden bg-cover bg-center sm:scroll-mt-24"
      style={{
        backgroundImage:
          `linear-gradient(92deg, rgba(12, 37, 66, 0.88) 12%, rgba(16, 59, 81, 0.72) 48%, rgba(19, 94, 90, 0.34) 100%), url('${bg}')`,
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl px-4 pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-32 animate-enter">
        <div className="max-w-2xl sm:ml-0 lg:ml-8">
          <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-white/95 sm:mb-5 sm:px-4 sm:text-xs animate-enter animate-delay-1">
            Servicio especializado en geomembranas
          </p>
          <h1 className="text-3xl font-black uppercase leading-[1.08] text-white sm:text-4xl lg:text-5xl animate-enter animate-delay-2">
            Protegemos tu proyecto con soluciones en geomembranas de alta duración
          </h1>
          <p className="mt-4 max-w-xl text-[0.95rem] text-white/85 sm:mt-5 sm:text-base animate-enter animate-delay-3">
            Diseñamos e instalamos sistemas de impermeabilización para agricultura, minería e industria,
            evitando filtraciones y reduciendo costos de mantenimiento.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap animate-enter animate-delay-4">
            <a
              href="#contacto"
              className="w-full rounded-lg bg-accent px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-opacity-90 sm:w-auto"
            >
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="w-full rounded-lg border-2 border-white px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:border-accent hover:bg-accent/10 sm:w-auto"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
