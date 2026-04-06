import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import geomenbranaHDPEImage from '../assets/images/productos/menbranaHDPE.jpg'

const products = [
  {
    name: 'Membrana HDPE Premium',
    type: 'HDPE Geomembrana',
    specs: ['Alta densidad', '1mm - 3mm espesor', 'Resistencia UV'],
    applications: 'Techos, estructuras, superficies',
    image: geomenbranaHDPEImage,
  },
  {
    name: 'Membrana PVC Flexible',
    type: 'PVC Especializada',
    specs: ['Mayor flexibilidad', '0.5mm - 2mm espesor', 'Instalación rápida'],
    applications: 'Muros, piscinas, depósitos'
  },
  //
  // {
  // name: 'Membrana LDPE Económica',
  // type: 'LDPE Geomembrana',
  //specs: ['Baja densidad', '0.5mm - 1.5mm espesor', 'Económica'],
  //applications: 'Proyectos residenciales'
  // },
  //
 
  {
    name: 'Sellador De Juntas',
    type: 'Soldadura Profesional',
    specs: ['Termofusión', 'Soldadura por calor', 'Sellado permanente'],
    applications: 'Unión de membranas'
  },
  {
    name: 'Geotextil Protector',
    type: 'Material de Protección',
    specs: ['Capa protectora', 'Anti-rasgaduras', 'Drenaje'],
    applications: 'Base y acabados'
  }
];
const Producto = () => {
  useRevealOnScroll()
  return (
    <section id="productos" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-enter animate-delay-1">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Nuestros Productos
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Membranas impermeabilizantes de alta calidad para cada tipo de aplicación y presupuesto
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white/92 backdrop-blur-sm border border-white/35 rounded-xl overflow-hidden shadow-lg shadow-slate-900/10 transition-all duration-300 group hover:-translate-y-1.5 hover:scale-[1.01] hover:border-accent/70 hover:shadow-[0_18px_40px_-18px_rgba(234,106,42,0.65)] ${index % 2 === 0 ? 'animate-enter-left' : 'animate-enter-right'} ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : index === 2 ? 'animate-delay-3' : index === 3 ? 'animate-delay-1' : index === 4 ? 'animate-delay-2' : 'animate-delay-3'}`}
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="h-40 bg-linear-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent/20 mb-2">{index + 1}</div>
                    <p className="text-accent/40 text-xs font-semibold">{product.type}</p>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {product.name}
                </h3>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-accent mb-3">ESPECIFICACIONES</p>
                  <ul className="space-y-1">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-accent mb-2">APLICACIONES</p>
                  <p className="text-sm text-slate-600">
                    {product.applications}
                  </p>
                </div>

                {/* CTA */}
                <button className="w-full mt-4 bg-accent text-white py-2 rounded-lg font-semibold hover:bg-secondary transition text-sm shadow-sm hover:shadow-md">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-enter animate-delay-2">
          <p className="text-white/75 mb-4">¿No encuentras lo que buscas?</p>
          <a
            href="#contacto"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
          >
            Consulta Nuestro Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Producto
