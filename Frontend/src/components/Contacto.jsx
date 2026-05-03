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
        <section id="contacto" className="-mt-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white/40 border-t border-white/15">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-6 sm:mb-8 animate-enter animate-delay-1">
                    <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
                        Déjanos Ayudarte
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Contacta con nuestro equipo para una consulta gratuita
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">

                    {/* Info */}
                    <div className="relative overflow-hidden card rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-[0_14px_30px_-20px_rgba(15,35,55,0.35)] animate-enter-left animate-delay-1">
                        <div className="absolute left-0 top-0 h-1.5 w-20 rounded-r-full bg-accent/90" />
                        <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 pt-2 leading-tight">Información de Contacto</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                                <div className="w-11 h-11 bg-accent/10 ring-1 ring-accent/15 rounded-xl flex items-center justify-center shrink-0 text-accent">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base sm:text-lg text-primary mb-1 leading-tight">Teléfono</h4>
                                    <p className="text-slate-600">+56 9 5004 9625</p>
                                    <p className="text-sm text-slate-500">Disponible 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                                <div className="w-11 h-11 bg-accent/10 ring-1 ring-accent/15 rounded-xl flex items-center justify-center shrink-0 text-accent">
                                    <Mail size={22} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-base sm:text-lg text-primary mb-1 leading-tight">Email</h4>
                                    <p className="text-slate-600 break-all">jorgegonzalomunozjerez05@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                                <div className="w-11 h-11 bg-accent/10 ring-1 ring-accent/15 rounded-xl flex items-center justify-center shrink-0 text-accent">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base sm:text-lg text-primary mb-1 leading-tight">Ubicación</h4>
                                    <p className="text-slate-600">San Pedro, Melipilla, Chile</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cobertura */}
                    <div className="relative overflow-hidden card rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-[0_14px_30px_-20px_rgba(15,35,55,0.35)] animate-enter-right animate-delay-2">
                        <div className="absolute left-0 top-0 h-1.5 w-20 rounded-r-full bg-accent/90" />
                        <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 pt-2 leading-tight">Zonas de trabajo y cobertura</h3>
                        <p className="text-sm sm:text-base text-slate-600 mb-5 leading-7">
                            Trabajamos en la Región Metropolitana y sectores cercanos, con cobertura flexible según proyecto.
                        </p>

                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 mb-5 shadow-sm">
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
                                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
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