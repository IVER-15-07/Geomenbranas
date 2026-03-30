import { Check } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const MisionVision = () => {
  useRevealOnScroll()

  const mision = {
    title: 'Nuestra Misión',
    description: 'Proporcionar soluciones confiables y duraderas en instalación y reparación de membranas impermeabilizantes, superando las expectativas de nuestros clientes con profesionalismo, calidad garantizada y atención personalizada en cada proyecto.',
    points: [
      'Excelencia en cada instalación',
      'Compromiso con la sostenibilidad',
      'Equipo altamente capacitado'
    ]
  }

  const vision = {
    title: 'Nuestra Visión',
    description: 'Ser la empresa líder y de referencia en la región en servicios de membranas impermeabilizantes, reconocida por nuestra innovación, confiabilidad y el impacto positivo en la calidad y durabilidad de las obras de construcción.',
    points: [
      'Expansión en nuevos mercados',
      'Tecnología de punta en procesos',
      'Crecimiento sostenible y responsable'
    ]
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Misión */}
          <div className="animate-enter">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                {mision.title}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {mision.description}
            </p>
            <div className="space-y-4">
              {mision.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 animate-enter">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-accent/20">
                      <Check size={16} className="text-accent" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-white font-medium text-lg">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visión */}
          <div className="animate-enter">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                {vision.title}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {vision.description}
            </p>
            <div className="space-y-4">
              {vision.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 animate-enter">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-accent/20">
                      <Check size={16} className="text-accent" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-white font-medium text-lg">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MisionVision
