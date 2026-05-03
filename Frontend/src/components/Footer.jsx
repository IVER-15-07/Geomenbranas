import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b2b45]/78 backdrop-blur-sm text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 shadow-[0_-8px_30px_-18px_rgba(15,35,55,0.55)]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 mb-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">GM</span>
              </div>
              <span className="font-bold text-base sm:text-lg leading-tight">SOLUCIONES MUÑOZ</span>
            </div>
            <p className="text-sm text-white/75 leading-6">
              Líderes en soluciones de impermeabilización y membranas de calidad premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Navegación</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
              <li><a href="#productos" className="hover:text-white transition">Productos</a></li>
              <li><a href="#mision-vision" className="hover:text-white transition">Misión y Visión</a></li>
              <li><a href="#ventajas" className="hover:text-white transition">Por qué Elegirnos</a></li>
              <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="#" className="hover:text-white transition">Instalación</a></li>
              <li><a href="#" className="hover:text-white transition">Reparación</a></li>
              <li><a href="#" className="hover:text-white transition">Inspección</a></li>
              <li><a href="#" className="hover:text-white transition">Mantenimiento</a></li>
            </ul>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contacto Rápido</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="tel:+56950049625" className="hover:text-white transition">+56 9 5004 9625</a></li>
              <li><a href="mailto:jorgegonzalomunozjerez05@gmail.com" className="hover:text-white transition break-all">jorgegonzalomunozjerez05@gmail.com</a></li>
              <li><p>San Pedro, Melipilla, Chile</p></li>
              <li><p className="text-xs text-white/60">Disponible 24/7</p></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-6">
          {/* Copyright */}
          <p className="text-sm text-white/70 text-center lg:text-left">
            © {currentYear} Soluciones Muñoz. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/18VJEaN1qS/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
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
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://wa.me/56950049625"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
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
          <div className="flex items-center justify-center lg:justify-end flex-wrap gap-x-5 sm:gap-x-6 gap-y-2 text-sm text-white/75">
            <a href="#" className="hover:text-white transition">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}