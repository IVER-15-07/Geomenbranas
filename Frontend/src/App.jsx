import { AppLayout } from './layouts/AppLayout'
import { HomePage } from './pages/HomePage'

import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Productos from './components/Producto'





function App() {
  return (
    <AppLayout>
  
      <Hero />
      <Servicios />
      <Productos />
      

    
    

      
    </AppLayout>
  )
}

export default App
