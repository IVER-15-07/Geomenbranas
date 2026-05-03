import { Check } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const PorQueElegirnos = () => {
  useRevealOnScroll()

  const advantages = [
    'Profesionales certificados con amplia experiencia',
    'Materiales de primera calidad con garantía',
    'Instalación conforme a normas internacionales',
    'Atención personalizada y asesoría técnica',
    'Garantía de 2 años en instalación',
    'Disponibilidad de servicio 24/7'
  ]

  const benefits = [
    {
      title: 'Máxima resistencia',
      description: 'Nuestras membranas resisten condiciones extremas de temperatura, humedad y radiación UV.'
    },
    {
      title: 'Máxima durabilidad',
      description: 'Productos diseñados para durar décadas sin necesidad de mantenimiento constante.'
    },
    {
      title: 'Máxima confianza',
      description: 'Trabajamos con empresas líderes en el sector de construcción y desarrolladores inmobiliarios.'
    }
  ]

  return (
    <section id="ventajas" className="-mt-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white/40 border-t border-white/15">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column - Title and Advantages */}
          <div className="relative overflow-hidden card rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-[0_14px_30px_-20px_rgba(15,35,55,0.35)] animate-enter-left animate-delay-1">
            <div className="absolute left-0 top-0 h-1.5 w-20 rounded-r-full bg-accent/90" />
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-5 sm:mb-6 pt-2">
              Por qué elegirnos
            </h2>

            <div className="space-y-3">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2.5 ${index % 2 === 0 ? 'animate-enter-left' : 'animate-enter'} ${index < 2 ? 'animate-delay-1' : index < 4 ? 'animate-delay-2' : 'animate-delay-3'}`}
                >
                  <div className="shrink-0 mt-0.5 flex items-center justify-center h-6 w-6 rounded-full bg-accent/15 ring-1 ring-accent/15">
                    <Check size={14} className="text-accent" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-6">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits Cards */}
          <div className="space-y-3 sm:space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`relative overflow-hidden card rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_14px_30px_-20px_rgba(15,35,55,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_50px_-24px_rgba(15,35,55,0.45)] ${index % 2 === 0 ? 'animate-enter-right' : 'animate-enter'} ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : 'animate-delay-3'}`}
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-accent/90" />
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 pl-2 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-7 pl-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PorQueElegirnos
