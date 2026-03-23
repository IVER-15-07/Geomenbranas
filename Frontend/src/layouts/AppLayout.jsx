import { Navbar } from '../components/layout/Navbar'

export function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
