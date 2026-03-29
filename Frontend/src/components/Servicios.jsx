
import { Wrench, RotateCcw, CheckCircle, Shield } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Instalación de Membranas',
    description: 'Instalación profesional de membranas impermeabilizantes en techos, muros y superficies de concreto.',
    features: ['Preparación de superficie', 'Soldadura de juntas', 'Inspección final']
  },
  {
    icon: RotateCcw,
    title: 'Reparación y Mantenimiento',
    description: 'Reparación de daños existentes y mantenimiento preventivo para prolongar la vida útil.',
    features: ['Diagnóstico gratuito', 'Reparación de grietas', 'Sellado de juntas']
  },
  {
    icon: CheckCircle,
    title: 'Inspección Técnica',
    description: 'Evaluación completa del estado de tus membranas impermeabilizantes existentes.',
    features: ['Reporte detallado', 'Recomendaciones', 'Presupuesto sin compromiso']
  },
  {
    icon: Shield,
    title: 'Protección a Largo Plazo',
    description: 'Soluciones duraderas que protegen tu propiedad contra filtraciones y daños.',
    features: ['Garantía extendida', 'Materiales premium', 'Atención 24/7']
  }
];

const Servicios = () => {
  return (
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas para la instalación y reparación de membranas impermeabilizantes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                  <Icon className="text-accent" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  )
}

export default Servicios
