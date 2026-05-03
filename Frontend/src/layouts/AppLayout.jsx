import { Navbar } from '../components/layout/Navbar'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import { WhatsAppWidget } from '../components/WhatsAppWidget'
import bg from '../assets/images/bg.jpg'

export function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-scroll sm:bg-fixed"
        style={{
          backgroundImage:
            `linear-gradient(92deg, var(--hero-start) 12%, var(--hero-mid) 48%, var(--hero-end) 100%), url('${bg}')`,
        }}
      />

      <Navbar />

      <main className="relative z-10">
        {children}
        <Contacto />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <WhatsAppWidget />
    </div>
  )
}
