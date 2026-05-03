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
    <section id="mision-vision" className="-mt-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white/40 border-t border-white/15">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-6 sm:mb-8 animate-enter animate-delay-1">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Misión y Visión
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con propósito claro y una proyección de crecimiento sostenible para cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Misión */}
        <div className="relative overflow-hidden card rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-[0_14px_30px_-20px_rgba(15,35,55,0.35)] animate-enter-left animate-delay-1">
            <div className="absolute left-0 top-0 h-1.5 w-20 rounded-r-full bg-accent/90" />
            <div className="flex items-center gap-4 mb-6 sm:mb-7 pt-2">
              <div className="w-10 h-10 rounded-full bg-accent/10 ring-1 ring-accent/15 flex items-center justify-center shrink-0">
                <Check size={18} className="text-accent" strokeWidth={3} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
                {mision.title}
              </h3>
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-7 mb-7">
              {mision.description}
            </p>
            <div className="space-y-3">
              {mision.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2.5 animate-enter">
                  <div className="shrink-0 mt-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-accent/15">
                    <Check size={14} className="text-accent" strokeWidth={3} />
                  </div>
                  <p className="text-slate-700 font-medium text-sm sm:text-base leading-6">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visión */}
        <div className="relative overflow-hidden card rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-[0_14px_30px_-20px_rgba(15,35,55,0.35)] animate-enter-right animate-delay-2">
            <div className="absolute left-0 top-0 h-1.5 w-20 rounded-r-full bg-accent/90" />
            <div className="flex items-center gap-4 mb-6 sm:mb-7 pt-2">
              <div className="w-10 h-10 rounded-full bg-accent/10 ring-1 ring-accent/15 flex items-center justify-center shrink-0">
                <Check size={18} className="text-accent" strokeWidth={3} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
                {vision.title}
              </h3>
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-7 mb-7">
              {vision.description}
            </p>
            <div className="space-y-3">
              {vision.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2.5 animate-enter">
                  <div className="shrink-0 mt-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-accent/15">
                    <Check size={14} className="text-accent" strokeWidth={3} />
                  </div>
                  <p className="text-slate-700 font-medium text-sm sm:text-base leading-6">
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
