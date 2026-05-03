import { useState } from 'react'
import { X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '56 9 5004 9625'

const getWhatsAppPhone = (phone) => phone.replace(/\D/g, '')

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const openWhatsApp = () => {
    const finalMessage = message.trim() || 'Hola, quiero más información sobre sus servicios.'
    const encoded = encodeURIComponent(finalMessage)
    const phone = getWhatsAppPhone(WHATSAPP_NUMBER)
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank')
    setMessage('')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-4 right-3 z-70 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div className="mb-3 w-[19rem] max-w-[calc(100vw-1rem)] overflow-hidden rounded-2xl border border-black/10 shadow-2xl shadow-slate-900/35 sm:w-80" style={{ backgroundColor: 'var(--muted)' }}>
          <div className="flex items-center justify-between px-4 py-3 text-white" style={{ backgroundColor: 'var(--whatsapp)' }}>
            <div className="flex items-center gap-3">
              <FaWhatsapp size={24} className="text-white" />
              <p className="text-lg leading-none font-semibold">WhatsApp</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:opacity-90"
              aria-label="Cerrar chat"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-4 py-4" style={{ backgroundColor: 'var(--muted)' }}>
            <div className="relative max-w-[92%] rounded-2xl bg-white px-4 py-3 text-base leading-snug shadow-[0_4px_14px_rgba(12,40,52,0.16)]" style={{ color: 'var(--muted-foreground)'}}>
              <span className="absolute -left-1.5 top-4 h-3 w-3 rotate-45 bg-white" />
              Hola, ¿cómo podemos ayudarte?
            </div>
          </div>

          <div className="px-4 py-4" style={{ backgroundColor: 'var(--muted)' }}>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Escribe tu mensaje"
              rows={2}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:ring-2"
              style={{ boxShadow: 'none', outlineColor: 'var(--ring)' }}
            />
            <button
              type="button"
              onClick={openWhatsApp}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Enviar 
              <FaWhatsapp size={18} className="text-white" />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-105 hover:opacity-90"
        aria-label="Abrir chat de WhatsApp"
        style={{ backgroundColor: 'var(--whatsapp)', boxShadow: '0 10px 20px rgba(0,0,0,0.12)'}}
      >
        <FaWhatsapp size={30} className="text-white" />
      </button>
    </div>
  )
}
