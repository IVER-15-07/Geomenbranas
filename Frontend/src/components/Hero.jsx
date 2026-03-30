
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

// Importar todas las imágenes para el carrusel
import img1 from '../assets/images/img1.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpeg'
import img4 from '../assets/images/img4.jpeg'
import img5 from '../assets/images/img5.jpeg'
import img6 from '../assets/images/img6.jpeg'
import img7 from '../assets/images/img7.jpeg'
import img8 from '../assets/images/img8.jpeg'
import img9 from '../assets/images/img9.jpeg'
import img10 from '../assets/images/img10.jpeg'
import img11 from '../assets/images/img11.jpeg'
import img12 from '../assets/images/img12.jpeg'
import img13 from '../assets/images/img13.jpeg'
import img14 from '../assets/images/img14.jpeg'
import img15 from '../assets/images/img15.jpeg'
import img16 from '../assets/images/img16.jpeg'
import img17 from '../assets/images/img17.jpeg'
import img18 from '../assets/images/img18.jpeg'

const Hero = () => {
  useRevealOnScroll()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, autoplay: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18]

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  // Auto-play del carrusel
  useEffect(() => {
    if (!emblaApi) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen scroll-mt-28 overflow-hidden bg-cover bg-center sm:scroll-mt-24"
    >
      {/* Carrusel de fondo */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className="shrink-0 w-full h-full relative"
            >
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradiente */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgba(3, 12, 8, 0.86) 15%, rgba(4, 15, 10, 0.58) 50%, rgba(5, 16, 11, 0.25) 100%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl px-4 pb-16 pt-44 sm:pb-20 sm:pt-44 animate-enter">
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

      {/* Botones de navegación */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur transition hover:bg-white/30 sm:left-8"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur transition hover:bg-white/30 sm:right-8"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollSnapList()[idx] && emblaApi?.to(idx)}
            className={`h-2 rounded-full transition ${
              idx === selectedIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
