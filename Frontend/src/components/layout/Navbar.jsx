import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'productos', label: 'Productos' },
  { id: 'ventajas', label: 'Por qué Elegirnos' },
  { id: 'contacto', label: 'Contacto' },
]

export function Navbar() {
	 const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [activeSection, setActiveSection] = useState('servicios')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.45, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const syncWithHash = () => {
      const currentHash = window.location.hash.replace('#', '')
      if (currentHash && navLinks.some((link) => link.id === currentHash)) {
        setActiveSection(currentHash)
      }
    }

    syncWithHash()
    window.addEventListener('hashchange', syncWithHash)

    return () => {
      window.removeEventListener('hashchange', syncWithHash)
    }
  }, [])

  const getDesktopLinkClass = (id) =>
    `rounded-md px-3 py-1.5 text-sm font-semibold transition ${
      activeSection === id
        ? 'bg-white/16 text-white shadow-sm'
        : 'text-white/85 hover:bg-white/10 hover:text-white'
    }`

  const getMobileLinkClass = (id) =>
    `block rounded-md px-3 py-2 text-sm font-medium transition ${
      activeSection === id
        ? 'bg-white/16 text-white'
        : 'text-white/85 hover:bg-white/10 hover:text-white'
    }`

	return (
  <header className="fixed top-0 w-full bg-[#12395b]/88 border-b border-white/15 backdrop-blur-md z-50 shadow-lg shadow-[#091b2a]/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-10 h-10 bg-[#e9783b] rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-extrabold text-sm">GM</span>
          </div>
          <span className="text-white font-bold text-base sm:text-lg truncate">SOLUCIONES MUÑOZ</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={getDesktopLinkClass(link.id)}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+1-555-123-4567"
            className="hidden sm:flex items-center gap-2 bg-[#e9783b] text-white px-4 py-2 rounded-lg hover:bg-[#f08a54] transition font-semibold text-sm"
          >
            <Phone size={18} />
            <span>Llamar</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/15 rounded-lg transition text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/15 bg-[#12395b]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={getMobileLinkClass(link.id)}
                onClick={() => {
                  setActiveSection(link.id)
                  setIsMenuOpen(false)
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+1-555-123-4567"
              className="flex items-center gap-2 bg-[#e9783b] text-white px-4 py-2 rounded-lg hover:bg-[#f08a54] transition font-semibold mt-2"
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



