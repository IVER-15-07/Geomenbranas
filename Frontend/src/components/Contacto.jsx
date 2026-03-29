import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contacto = () => {
    const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí irá la lógica de envío del formulario
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    
    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    })

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }
  return (
     <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Déjanos Ayudarte
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Contacta con nuestro equipo para una consulta gratuita y presupuesto sin compromiso
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8">Información de Contacto</h3>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                <p className="opacity-90">+1 (555) 123-4567</p>
                <p className="text-sm opacity-75">Disponible 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email</h4>
                <p className="opacity-90">info@promembranes.com</p>
                <p className="text-sm opacity-75">Respuesta en 24 horas</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                <p className="opacity-90">123 Industrial Ave</p>
                <p className="opacity-90">Miami, FL 33101, USA</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-6 mt-8">
              <h4 className="font-bold text-lg mb-4">Horario de Atención</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Lunes - Viernes: 8:00 AM - 6:00 PM</li>
                <li>Sábado: 9:00 AM - 4:00 PM</li>
                <li>Domingo: Consultas de emergencia</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Envía tu Consulta</h3>

            {submitted && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                <p className="text-green-100 font-semibold">
                  ¡Gracias! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/30 rounded-lg px-4 py-3 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/30 rounded-lg px-4 py-3 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-semibold mb-2">Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123-4567"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/30 rounded-lg px-4 py-3 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition"
                />
              </div>

              {/* Servicio */}
              <div>
                <label className="block text-sm font-semibold mb-2">Servicio de Interés *</label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-3 text-primary-foreground focus:outline-none focus:border-primary-foreground/50 transition"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="instalacion">Instalación de Membranas</option>
                  <option value="reparacion">Reparación y Mantenimiento</option>
                  <option value="inspeccion">Inspección Técnica</option>
                  <option value="consulta">Consulta General</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos más sobre tu proyecto..."
                  rows={4}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-3 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:bg-opacity-90 transition mt-6"
              >
                Enviar Consulta
              </button>

              <p className="text-xs opacity-75 text-center">
                * Campos obligatorios. Nos comprometeremos a responder en 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
