import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

// Importar imágenes
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

const Galeria = () => {
  useRevealOnScroll()

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17, img18
  ]

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true })
  const [emblaThumbnailsRef, emblaThumbnailsApi] = useEmblaCarousel({
    containScroll: 'keepVisible',
    dragFree: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    if (!emblaMainApi) return

    const onSelect = () => {
      setSelectedIndex(emblaMainApi.selectedScrollSnap())
    }

    emblaMainApi.on('select', onSelect)

    return () => {
      emblaMainApi.off('select', onSelect)
    }
  }, [emblaMainApi])

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbnailsApi) return

    const onMainSelect = () => {
      const index = emblaMainApi.selectedScrollSnap()
      setSelectedIndex(index)
      emblaThumbnailsApi.scrollSnapList().forEach((_, idx) => {
        if (idx === index) {
          emblaThumbnailsApi.scrollSnapList()
          emblaThumbnailsApi.scrollTo(Math.max(0, index - 2))
        }
      })
    }

    emblaMainApi.on('select', onMainSelect)
    return () => {
      emblaMainApi.off('select', onMainSelect)
    }
  }, [emblaMainApi, emblaThumbnailsApi])

  const scrollMainPrev = () => emblaMainApi?.scrollPrev()
  const scrollMainNext = () => emblaMainApi?.scrollNext()

  return (
    <section id="galeria" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-enter">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Galería de Proyectos
          </h2>
          <p className="text-sm text-white/80">
            Conoce nuestro proceso de trabajo
          </p>
        </div>

        {/* Contador */}
        <div className="text-center mb-4">
          <p className="text-accent font-semibold text-sm">
            {selectedIndex + 1} / {images.length}
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-4 animate-enter">
          <div className="overflow-hidden rounded-lg" ref={emblaMainRef}>
            <div className="flex">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-full flex items-center justify-center bg-black relative"
                >
                  <img
                    src={img}
                    alt={`Proyecto ${idx + 1}`}
                    className={`h-72 sm:h-80 object-contain transition-transform duration-300 ${
                      isZoomed ? 'scale-125' : 'scale-100'
                    }`}
                  />
                  {/* Zoom Button */}
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="absolute top-3 right-3 bg-accent/20 hover:bg-accent/40 p-2 rounded-full backdrop-blur transition z-10"
                    aria-label="Zoom"
                  >
                    <ZoomIn className="h-4 w-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollMainPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 p-2 backdrop-blur transition hover:bg-white/30"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={scrollMainNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 p-2 backdrop-blur transition hover:bg-white/30"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="overflow-hidden bg-black/30 rounded-lg p-2 backdrop-blur">
          <div ref={emblaThumbnailsRef}>
            <div className="flex gap-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaMainApi?.scrollSnapList()[idx] && emblaMainApi?.to(idx)}
                  className={`shrink-0 h-14 w-12 rounded-md overflow-hidden transition-all border-2 ${
                    idx === selectedIndex
                      ? 'border-accent scale-105 opacity-100'
                      : 'border-white/20 opacity-60 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Galeria
