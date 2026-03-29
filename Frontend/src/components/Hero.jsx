
import { ArrowRight } from 'lucide-react';
import bg from '../assets/images/bg.jpg'

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background con textura y overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          <span className="text-white font-semibold text-sm">Líderes en Impermeabilización</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Membranas de{' '}
          <span className="text-accent">Máxima Calidad</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
          Servicios profesionales de instalación y reparación de membranas impermeabilizantes. Protege tu propiedad con soluciones confiables y duraderas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#contacto"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center justify-center gap-2 group shadow-lg"
          >
            Cotizar Ahora
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#productos"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition backdrop-blur-sm"
          >
            Ver Productos
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20">
          <div className="py-4">
            <p className="text-2xl sm:text-3xl font-bold text-accent">+15</p>
            <p className="text-sm text-white/80 mt-1">Años Experiencia</p>
          </div>
          <div className="py-4">
            <p className="text-2xl sm:text-3xl font-bold text-accent">5000+</p>
            <p className="text-sm text-white/80 mt-1">Proyectos Completados</p>
          </div>
          <div className="py-4">
            <p className="text-2xl sm:text-3xl font-bold text-accent">98%</p>
            <p className="text-sm text-white/80 mt-1">Satisfacción Clientes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
