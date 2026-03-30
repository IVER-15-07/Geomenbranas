import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/80 backdrop-blur-sm text-primary-foreground py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-primary-foreground/20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">GM</span>
              </div>
              <span className="font-bold text-lg">SOLUCIONES MUÑOZ</span>
            </div>
            <p className="text-sm opacity-80">
              Líderes en soluciones de impermeabilización y membranas de calidad premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#servicios" className="hover:opacity-100 transition">Servicios</a></li>
              <li><a href="#productos" className="hover:opacity-100 transition">Productos</a></li>
              <li><a href="#ventajas" className="hover:opacity-100 transition">Por qué Elegirnos</a></li>
              <li><a href="#contacto" className="hover:opacity-100 transition">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition">Instalación</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Reparación</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Inspección</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Mantenimiento</a></li>
            </ul>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="font-bold mb-4">Contacto Rápido</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="tel:+1-555-123-4567" className="hover:opacity-100 transition">+1 (555) 123-4567</a></li>
              <li><a href="mailto:info@promembranes.com" className="hover:opacity-100 transition">info@promembranes.com</a></li>
              <li><p>Miami, FL 33101</p></li>
              <li><p className="text-xs">Disponible 24/7</p></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm opacity-75">
            © {currentYear} ProMembranes. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/18VJEaN1qS/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition"
            >
              <FaFacebook size={20} />
            </a>

            {/*
            <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition">
              <FaTwitter size={20} />
            </a>
            */}

            <a
              href="https://www.instagram.com/jorgemunozjerez?igsh=MW1uYmQydWRydXdxZQ=="
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://wa.me/59168458460"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition"
            >
              <FaWhatsapp size={20} />
            </a>

            {/*
            <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition">
              <FaLinkedin size={20} />
            </a>
            */}

          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:opacity-75 transition">Política de Privacidad</a>
            <a href="#" className="hover:opacity-75 transition">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}