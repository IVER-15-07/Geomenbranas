import { navigation } from '../../constants/navigation'

export function Navbar() {
	return (
		<header className="fixed inset-x-0 top-0 z-20 bg-black/35 backdrop-blur-sm">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
				<a href="#inicio" className="text-lg font-black uppercase tracking-wide text-white sm:text-xl">
					Geo<span className="text-lime-400">Membranas</span>
				</a>

				<nav className="hidden gap-6 md:flex" aria-label="Navegación principal">
					{navigation.map((item) => (
						<a
							key={item.id}
							href={item.href}
							className="text-sm font-semibold uppercase tracking-wide text-white/85 transition hover:text-lime-300"
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



