
import { ArrowRight } from 'lucide-react';
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
          `linear-gradient(90deg, rgba(3, 12, 8, 0.86) 15%, rgba(4, 15, 10, 0.58) 50%, rgba(5, 16, 11, 0.25) 100%), url('${bg}')`,
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl px-4 pb-16 pt-44 sm:pb-20 sm:pt-44 animate-enter">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-white/95 sm:mb-5 sm:px-4 sm:text-xs animate-enter">
            Servicio especializado en geomembranas
          </p>
          <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl animate-enter">
            Protegemos tu proyecto con soluciones en geomembranas de alta duración
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/85 sm:mt-6 sm:text-lg animate-enter">
            Diseñamos e instalamos sistemas de impermeabilización para agricultura, minería e industria,
            evitando filtraciones y reduciendo costos de mantenimiento.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap animate-enter">
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
