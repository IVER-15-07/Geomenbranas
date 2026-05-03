import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import geomenbranaHDPEImage from '../assets/images/productos/menbranaHDPE.jpg'
import geomenbranaPVCImage from '../assets/images/productos/menbranasPVC.jpg'
import TextInitial from '../assets/images/productos/textil.jpg'
import selladorJuntasImage from '../assets/images/productos/sellador.jpg'


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
    applications: 'Muros, piscinas, depósitos',
    image: geomenbranaPVCImage,
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
    applications: 'Unión de membranas',
    image: selladorJuntasImage,
  },

  {
    name: 'Geotextil Protector',
    type: 'Material de Protección',
    specs: ['Capa protectora', 'Anti-rasgaduras', 'Drenaje'],
    applications: 'Base y acabados',
    image: TextInitial,

  }
];
const Producto = () => {
  useRevealOnScroll()
  const whatsappBase = 'https://wa.me/56950049625'

  return (
    <section id="productos" className="-mt-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white/40 border-t border-white/15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 animate-enter animate-delay-1">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Nuestros Productos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Membranas impermeabilizantes de alta calidad para cada tipo de aplicación y presupuesto
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl card border border-slate-200/80 bg-white shadow-[0_14px_30px_-20px_rgba(15,35,55,0.35)] transition-all duration-300 group hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_50px_-24px_rgba(15,35,55,0.45)] ${index % 2 === 0 ? 'animate-enter-left' : 'animate-enter-right'} ${index === 0 ? 'animate-delay-1' : index === 1 ? 'animate-delay-2' : index === 2 ? 'animate-delay-3' : index === 3 ? 'animate-delay-1' : index === 4 ? 'animate-delay-2' : 'animate-delay-3'}`}
            >
              <div className="absolute left-0 top-0 h-1.5 w-20 rounded-r-full bg-accent/90"></div>
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-full object-cover ring-1 ring-slate-200 transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="h-32 bg-linear-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent/20 mb-2">{index + 1}</div>
                    <p className="text-accent/40 text-xs font-semibold">{product.type}</p>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-4 sm:p-5">
                <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">
                  {product.type}
                </p>
                <h3 className="text-lg font-bold text-primary mb-2 leading-tight">
                  {product.name}
                </h3>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-accent mb-3">ESPECIFICACIONES</p>
                  <ul className="space-y-2">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="text-[0.92rem] text-slate-600 flex items-center gap-2 leading-6">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-border">
                  <p className="text-xs font-semibold text-accent mb-2">APLICACIONES</p>
                  <p className="text-[0.92rem] text-slate-600 leading-6">
                    {product.applications}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(`Hola, quiero mas informacion sobre ${product.name}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full mt-4 bg-accent text-white py-2.5 rounded-lg font-semibold hover:bg-secondary transition text-sm shadow-sm hover:shadow-md text-center"
                >
                  Más Información
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 animate-enter animate-delay-2">
          <p className="text-muted-foreground mb-4">¿No encuentras lo que buscas?</p>
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
