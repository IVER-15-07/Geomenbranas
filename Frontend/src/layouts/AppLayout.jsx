import { Navbar } from '../components/layout/Navbar'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import bg from '../assets/images/bg.jpg'

export function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10, 28, 47, 0.86) 0%, rgba(12, 48, 70, 0.8) 55%, rgba(11, 66, 63, 0.82) 100%), url('${bg}')`,
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
    </div>
  )
}
