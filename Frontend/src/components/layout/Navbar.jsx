import { useEffect, useState } from 'react'
import { navigation } from '../../constants/navigation'

export function Navbar() {
	const [activeSection, setActiveSection] = useState('inicio')

	useEffect(() => {
		const sectionIds = navigation.map((item) => item.id)

		const setByScroll = () => {
			const currentPosition = window.scrollY + 140
			let currentSection = sectionIds[0]

			sectionIds.forEach((sectionId) => {
				const section = document.getElementById(sectionId)
				if (section && section.offsetTop <= currentPosition) {
					currentSection = sectionId
				}
			})

			setActiveSection(currentSection)
		}

		setByScroll()
		window.addEventListener('scroll', setByScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', setByScroll)
		}
	}, [])

	return (
		<header className="fixed inset-x-0 top-0 z-20 bg-black/35 backdrop-blur-sm">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
				<a href="#inicio" className="text-lg font-black uppercase tracking-wide text-white sm:text-xl">
					Soluciones <span className="text-lime-400">Muñoz</span>
				</a>

				<nav className="hidden gap-6 md:flex" aria-label="Navegación principal">
					{navigation.map((item, index) => (
						<a
							key={item.id}
							href={item.href}
							aria-current={activeSection === item.id ? 'page' : undefined}
							className={`rounded-md px-2 py-1 text-sm font-semibold uppercase tracking-wide transition ${activeSection === item.id
								? 'bg-lime-400 text-[#102214]'
								: `text-white/85 ${index === 0 ? 'hover:text-lime-300' : index === 1 ? 'hover:text-emerald-300' : index === 2 ? 'hover:text-cyan-300' : 'hover:text-amber-300'}`}`}
						>
							{item.label}
						</a>
					))}
				</nav>

				<a
					href="#contacto"
					className="rounded-full bg-lime-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#102214] transition hover:bg-lime-400"
				>
					Cotizar
				</a>
			</div>
		</header>
	)
}



