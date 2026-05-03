import { useEffect, useRef, useState } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'productos', label: 'Productos' },
  { id: 'contacto', label: 'Contacto' },
]

const aboutLinks = [
  { id: 'mision-vision', label: 'Misión y Visión' },
  { id: 'ventajas', label: 'Por qué Elegirnos' },
]

const sectionLinks = [...navLinks, ...aboutLinks]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false)
   const [activeSection, setActiveSection] = useState('servicios')
  const aboutMenuRef = useRef(null)

  useEffect(() => {
    const sections = sectionLinks
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
    const handleClickOutside = (event) => {
      if (aboutMenuRef.current && !aboutMenuRef.current.contains(event.target)) {
        setIsAboutMenuOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsAboutMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    const syncWithHash = () => {
      const currentHash = window.location.hash.replace('#', '')
      if (currentHash && sectionLinks.some((link) => link.id === currentHash)) {
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
    `rounded-md px-3 py-1 text-sm font-semibold leading-none transition ${
      activeSection === id
        ? 'bg-white/16 text-white shadow-sm'
        : 'text-white/90 hover:bg-white/10 hover:text-white'
    }`

  const getMobileLinkClass = (id) =>
    `block rounded-md px-3 py-2 text-sm font-medium leading-none transition ${
      activeSection === id
        ? 'bg-white/16 text-white'
        : 'text-white/90 hover:bg-white/10 hover:text-white'
    }`

  const isAboutActive = aboutLinks.some((link) => link.id === activeSection)

  return (
    <header className="fixed top-0 w-full bg-[#0b2b45] border-b border-white/10 backdrop-blur-md z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-2 flex items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-10 h-10 bg-[#e9783b] rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-extrabold text-sm">GM</span>
          </div>
          <span className="text-white font-bold text-sm sm:text-base lg:text-lg truncate">SOLUCIONES MUÑOZ</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
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

          <div ref={aboutMenuRef} className="relative">
            <button
              type="button"
              className={`rounded-md px-3 py-1 text-sm font-semibold leading-none transition inline-flex items-center gap-1 ${
                isAboutActive
                  ? 'bg-white/16 text-white shadow-sm'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
              aria-haspopup="true"
              aria-expanded={isAboutMenuOpen}
              onClick={() => setIsAboutMenuOpen((prev) => !prev)}
            >
              Nosotros
              <ChevronDown size={16} className={isAboutMenuOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>

            <div className={`${isAboutMenuOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'} absolute right-0 top-full z-50 mt-2 w-52 rounded-xl border border-white/20 bg-[#0b2b45] p-2 shadow-md transition`}>
              {aboutLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={getMobileLinkClass(link.id)}
                  onClick={() => {
                    setActiveSection(link.id)
                    setIsAboutMenuOpen(false)
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href="tel:+56950049625"
            className="hidden xl:flex items-center gap-2 bg-[#e9783b] text-white px-4 py-2 rounded-lg hover:bg-[#f08a54] transition font-semibold text-sm"
          >
            <Phone size={18} />
            <span>Llamar</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/15 rounded-lg transition text-white"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/15 bg-[#0b2b45]">
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

            <details className="rounded-md border border-white/15 bg-white/5">
              <summary className="cursor-pointer list-none px-3 py-1.5 text-sm font-medium text-white/90 hover:bg-white/10 rounded-md flex items-center justify-between">
                <span>Nosotros</span>
                <ChevronDown size={16} />
              </summary>
              <div className="px-2 pb-2 pt-1 space-y-1">
                {aboutLinks.map((link) => (
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
              </div>
            </details>

            <a
              href="tel:+56950049625"
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



