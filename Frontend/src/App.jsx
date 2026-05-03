import { AppLayout } from './layouts/AppLayout'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Productos from './components/Producto'
import MisionVision from './components/MisionVision'
import PorQueElegirnos from './components/PorQueElegirnos'

function App() {
  return (
    <AppLayout>
      <Hero />
      <Servicios />
      <Productos />
      <PorQueElegirnos />
      <MisionVision />
    </AppLayout>
  )
}

export default App
