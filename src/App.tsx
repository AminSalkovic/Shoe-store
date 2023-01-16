
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Navbar from './components/Navbar'
import MobileDropdown from './components/MobileDropdown'

function App() {
  


  return (

   <ShoppingCartProvider>
     <Navbar/>
   </ShoppingCartProvider>
  )
}

export default App
