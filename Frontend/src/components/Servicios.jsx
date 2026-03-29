
import { Wrench, RotateCcw, CheckCircle, Shield } from 'lucide-react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import instalacionImage from '../assets/images/servicios/instalacion.jpeg'
import reparacionImage from '../assets/images/servicios/reparacion.jpeg'
import inspeccionImage from '../assets/images/servicios/inspeccion.jpeg'
import proteccionImage from '../assets/images/servicios/proteccion.jpg'

const services = [
    {
        icon: Wrench,
        title: 'Instalación de Membranas',
        description: 'Instalación profesional de membranas impermeabilizantes en techos, muros y superficies de concreto.',
        features: ['Preparación de superficie', 'Soldadura de juntas', 'Inspección final'],
        image: instalacionImage,
    },
    {
        icon: RotateCcw,
        title: 'Reparación y Mantenimiento',
        description: 'Reparación de daños existentes y mantenimiento preventivo para prolongar la vida útil.',
        features: ['Diagnóstico gratuito', 'Reparación de grietas', 'Sellado de juntas'],
        image: reparacionImage,
    },
    {
        icon: CheckCircle,
        title: 'Inspección Técnica',
        description: 'Evaluación completa del estado de tus membranas impermeabilizantes existentes.',
        features: ['Reporte detallado', 'Recomendaciones', 'Presupuesto sin compromiso'],
        image: inspeccionImage,

    },
    {
        icon: Shield,
        title: 'Protección a Largo Plazo',
        description: 'Soluciones duraderas que protegen tu propiedad contra filtraciones y daños.',
        features: ['Garantía extendida', 'Materiales premium', 'Atención 24/7'],
        image: proteccionImage,
    }
];

const Servicios = () => {
    useRevealOnScroll()
    return (
        <section id="servicios" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 animate-enter animate-delay-1">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
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
                                className={`bg-white/92 backdrop-blur-sm border border-white/35 rounded-xl p-5 sm:p-6 shadow-lg shadow-slate-900/10 transition-all duration-300 group cursor-pointer hover:-translate-y-1.5 hover:scale-[1.01] hover:border-accent/70 hover:shadow-[0_18px_40px_-18px_rgba(234,106,42,0.65)] ${index % 2 === 0 ? 'animate-enter-left' : 'animate-enter-right'} ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : index === 2 ? 'animate-delay-3' : 'animate-delay-4'}`}
                            >
                                {service.image ? (
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="mb-4 h-36 sm:h-32 w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                                        <Icon className="text-accent" size={24} />
                                    </div>
                                )}

                                {/* Title */}
                                <h3 className="text-lg font-bold text-primary mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 text-sm mb-4">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
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
                <div className="text-center mt-10 sm:mt-12 animate-enter animate-delay-2">
                    <a
                        href="#contacto"
                        className="inline-block bg-accent hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition"
                    >
                        Solicitar Presupuesto
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Servicios
