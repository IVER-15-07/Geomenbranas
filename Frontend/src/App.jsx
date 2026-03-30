import { AppLayout } from './layouts/AppLayout'
import Hero from './components/Hero'
import MisionVision from './components/MisionVision'
import Servicios from './components/Servicios'
import Productos from './components/Producto'
import PorQueElegirnos from './components/PorQueElegirnos'

function App() {
  return (
    <AppLayout>
      <Hero />
      <MisionVision />
      <Servicios />
      <Productos />
      <PorQueElegirnos />
    </AppLayout>
  )
}

export default App
