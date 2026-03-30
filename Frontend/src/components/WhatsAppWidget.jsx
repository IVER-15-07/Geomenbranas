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
        <div className="mb-3 w-[19rem] max-w-[calc(100vw-1rem)] overflow-hidden rounded-2xl border border-black/10 bg-[#edf3f1] shadow-2xl shadow-slate-900/35 sm:w-80">
          <div className="flex items-center justify-between bg-[#25d366] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <FaWhatsapp size={24} />
              <p className="text-lg leading-none font-semibold">WhatsApp</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#138a3b] text-white transition hover:bg-[#0f7732]"
              aria-label="Cerrar chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="bg-[#edf3f1] px-4 py-4">
            <div className="relative max-w-[92%] rounded-2xl bg-white px-4 py-3 text-base leading-snug text-[#35495e] shadow-[0_4px_14px_rgba(12,40,52,0.16)]">
              <span className="absolute -left-1.5 top-4 h-3 w-3 rotate-45 bg-white" />
              Hola, ¿cómo podemos ayudarte?
            </div>
          </div>

          <div className="bg-[#d8e2e8] px-4 py-4">
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Escribe tu mensaje"
              rows={2}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#25d366] focus:ring-2 focus:ring-[#25d366]/25"
            />
            <button
              type="button"
              onClick={openWhatsApp}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fb95a]"
            >
              Enviar 
              <FaWhatsapp size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/40 transition hover:scale-105 hover:bg-[#1fb95a]"
        aria-label="Abrir chat de WhatsApp"
      >
        <FaWhatsapp size={30} />
      </button>
    </div>
  )
}
