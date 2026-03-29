import { Navbar } from '../components/layout/Navbar'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

export function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>{children}</main>
      <Contacto />
      <Footer />
    </div>
  )
}
