import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
	 const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
  <header className="fixed top-0 w-full bg-primary/95 border-b border-white/10 backdrop-blur z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">PM</span>
          </div>
          <span className="text-white font-bold text-lg hidden sm:inline">ProMembranas</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          <a href="#servicios" className="text-white/90 hover:text-accent transition">Servicios</a>
          <a href="#productos" className="text-white/90 hover:text-accent transition">Productos</a>
          <a href="#ventajas" className="text-white/90 hover:text-accent transition">Por qué Elegirnos</a>
          <a href="#contacto" className="text-white/90 hover:text-accent transition">Contacto</a>
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+1-555-123-4567"
            className="hidden sm:flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-secondary transition font-semibold text-sm"
          >
            <Phone size={18} />
            <span>Llamar</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary">
          <div className="px-4 py-4 space-y-3">
            <a href="#servicios" className="block text-white/90 hover:text-accent transition py-2">Servicios</a>
            <a href="#productos" className="block text-white/90 hover:text-accent transition py-2">Productos</a>
            <a href="#ventajas" className="block text-white/90 hover:text-accent transition py-2">Por qué Elegirnos</a>
            <a href="#contacto" className="block text-white/90 hover:text-accent transition py-2">Contacto</a>
            <a
              href="tel:+1-555-123-4567"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold mt-2"
            >
              <Phone size={18} />
              <span>Llamar Ahora</span>
            </a>
          </div>
        </div>
      )}
    </header> 	
	)
}



