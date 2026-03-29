import { Navbar } from '../components/layout/Navbar'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

export function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        {children}
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
