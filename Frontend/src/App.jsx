import { AppLayout } from './layouts/AppLayout'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Productos from './components/Producto'
import PorQueElegirnos from './components/PorQueElegirnos'

function App() {
  return (
    <AppLayout>
      <Hero />
      <Servicios />
      <Productos />
      <PorQueElegirnos />
    </AppLayout>
  )
}

export default App
