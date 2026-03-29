import React from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const products = [
  {
    name: 'Membrana HDPE Premium',
    type: 'HDPE Geomembrana',
    specs: ['Alta densidad', '1.5mm - 3mm espesor', 'Resistencia UV'],
    applications: 'Techos, estructuras, superficies'
  },
  {
    name: 'Membrana PVC Flexible',
    type: 'PVC Especializada',
    specs: ['Mayor flexibilidad', '0.5mm - 2mm espesor', 'Instalación rápida'],
    applications: 'Muros, piscinas, depósitos'
  },
  {
    name: 'Membrana LDPE Económica',
    type: 'LDPE Geomembrana',
    specs: ['Baja densidad', '0.5mm - 1.5mm espesor', 'Económica'],
    applications: 'Proyectos residenciales'
  },
  {
    name: 'Membrana Compuesta',
    type: 'Composite Geomembrana',
    specs: ['Doble capa', 'Máxima durabilidad', 'Aplicación profesional'],
    applications: 'Proyectos comerciales y industriales'
  },
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
    <section id="productos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-enter">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Membranas impermeabilizantes de alta calidad para cada tipo de aplicación y presupuesto
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group animate-enter"
            >
              {/* Product Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-accent/5 to-accent/10 flex items-center justify-center group-hover:from-accent/10 group-hover:to-accent/15 transition">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent/20 mb-2">{index + 1}</div>
                  <p className="text-accent/40 text-xs font-semibold">{product.type}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {product.name}
                </h3>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-accent mb-3">ESPECIFICACIONES</p>
                  <ul className="space-y-1">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-accent mb-2">APLICACIONES</p>
                  <p className="text-sm text-muted-foreground">
                    {product.applications}
                  </p>
                </div>

                {/* CTA */}
                <button className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition text-sm">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">¿No encuentras lo que buscas?</p>
          <a
            href="#contacto"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Consulta Nuestro Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Producto
