import { Check } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const PorQueElegirnos = () => {
  useRevealOnScroll()

  const advantages = [
    'Profesionales certificados con amplia experiencia',
    'Materiales de primera calidad con garantía',
    'Instalación conforme a normas internacionales',
    'Atención personalizada y asesoría técnica',
    'Garantía de 5 años en instalación',
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
    <section id="ventajas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title and Advantages */}
          <div className="animate-enter">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
              Por qué elegirnos
            </h2>

            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4 animate-enter">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                      <Check size={16} className="text-accent" />
                    </div>
                  </div>
                  <p className="text-lg text-white font-medium">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-2xl p-8 animate-enter border-l-4 border-l-accent hover:shadow-lg hover:bg-white/15 transition"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
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
