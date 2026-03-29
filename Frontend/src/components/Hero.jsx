
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-8">
              <span className="text-blue-600 font-semibold text-sm">Expertos en impermeabilización</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6 leading-tight">
              Membranas de máxima calidad
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Instalación y reparación profesional de membranas impermeabilizantes con garantía de durabilidad y resistencia para tus proyectos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contacto"
                className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 group"
              >
                Solicitar cotización
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#productos"
                className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-3 rounded-full font-semibold transition text-center"
              >
                Ver catálogo
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 w-full aspect-square rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">
                [Imagen de membranas instaladas]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
