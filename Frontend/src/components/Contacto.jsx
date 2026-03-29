import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const Contacto = () => {
    useRevealOnScroll()

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        servicio: '',
        mensaje: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const mensaje = `*Nueva consulta*%0A
Nombre: ${formData.nombre}%0A
Servicio: ${formData.servicio}%0A
${formData.email ? `Email: ${formData.email}%0A` : ''}
Mensaje: ${formData.mensaje}`

       // window.open(`https://wa.me/56950049625?text=${mensaje}`, '_blank')
        window.open(`https://wa.me/59168458460?text=${mensaje}`, '_blank')
    }

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Info */}
                    <div className="space-y-8 animate-enter-left animate-delay-1">
                        <h3 className="text-3xl font-bold mb-8">Información de Contacto</h3>

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
                            <div>
                                <h4 className="font-bold text-lg mb-1">Email</h4>
                                <p className="opacity-90">info@promembranes.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                                <p className="opacity-90">Miami, FL, USA</p>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-6 sm:p-8 animate-enter-right animate-delay-2">
                        <h3 className="text-2xl font-bold mb-6">Envía tu Consulta</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div>
                                <label className="block text-sm font-semibold mb-2">Nombre *</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tu nombre"
                                    className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-muted-foreground border border-white/40 focus:outline-none focus:ring-2 focus:ring-accent/40"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Email (opcional)</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="tu@email.com"
                                    className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-muted-foreground border border-white/40 focus:outline-none focus:ring-2 focus:ring-accent/40"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Servicio *</label>
                                <select
                                    name="servicio"
                                    value={formData.servicio}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white text-primary border border-white/40 focus:outline-none focus:ring-2 focus:ring-accent/40"
                                >
                                    <option value="">Selecciona</option>
                                    <option value="instalacion">Instalación</option>
                                    <option value="reparacion">Reparación</option>
                                    <option value="inspeccion">Inspección</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Mensaje *</label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Describe tu necesidad..."
                                    className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder:text-muted-foreground border border-white/40 focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-secondary transition"
                            >
                                Enviar por WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto