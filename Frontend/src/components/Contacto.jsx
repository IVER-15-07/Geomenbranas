import { Mail, Phone, MapPin } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const Contacto = () => {
    useRevealOnScroll()

    const zonas = [
       
        'San Pedro (Melipilla)',
        'Cocalan (Sexta Region )',
        'San Enrique (Quinta Region)',
        'Nihue (Metropolitana)',
        'Loencañado (Metropolitana)',
        'Metropolitana (Santiago)',
      
    ]

    return (
        <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-primary-foreground">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12 sm:mb-16 animate-enter animate-delay-1">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                        Déjanos Ayudarte
                    </h2>
                    <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
                        Contacta con nuestro equipo para una consulta gratuita
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                    {/* Info */}
                    <div className="space-y-6 animate-enter-left animate-delay-1">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Información de Contacto</h3>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                                <p className="opacity-90">+56 9 5004 9625</p>
                                <p className="text-sm opacity-75">Disponible 24/7</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                                <Mail size={24} />
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-bold text-lg mb-1">Email</h4>
                                <p className="opacity-90 break-all">jorgegonzalomunozjerez05@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                                <p className="opacity-90">San Pedro, Melipilla, Chile</p>
                            </div>
                        </div>
                    </div>

                    {/* Cobertura */}
                    <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-5 sm:p-7 lg:p-8 animate-enter-right animate-delay-2">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">Zonas de trabajo y cobertura</h3>
                        <p className="text-sm sm:text-base text-white/85 mb-5">
                            Trabajamos en la Región Metropolitana y sectores cercanos, con cobertura flexible según proyecto.
                        </p>

                        <div className="overflow-hidden rounded-xl border border-white/20 bg-white/5 mb-5">
                            <iframe
                                title="Mapa de cobertura en San Pedro y Melipilla"
                                src="https://www.google.com/maps?q=San%20Pedro%2C%20Melipilla%2C%20Chile&output=embed"
                                className="h-52 sm:h-60 w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {zonas.map((zona) => (
                                <div
                                    key={zona}
                                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white/95"
                                >
                                    {zona}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto