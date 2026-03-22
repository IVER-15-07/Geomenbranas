import { Navbar } from '../components/layout/Navbar'

export function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0e1f17] text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
