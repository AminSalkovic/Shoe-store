import { Routes,Route } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Navbar from './components/Navbar'
import MainNavbar from './components/MainNavbar'
import Home from './components/Home'
import Men from './components/pages/men/Men'
import Brends from './components/pages/brends/Brends'
import Adidas from './components/pages/brends/Adidas'
import Nike from './components/pages/brends/Nike'
import Fila from './components/pages/brends/Fila'
import Puma from './components/pages/brends/Puma'
import Rebook from './components/pages/brends/Rebook'
import FashionSnikers from './components/pages/men/categories/FashionSnikers'
import Boots from './components/pages/men/categories/Boots'

function App() {
  


  return (

   <ShoppingCartProvider>
    <MainNavbar/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/muskarci' element={<Men/>}/>
      <Route path='/Marke' element={<Brends/>}/>
      <Route path='/marke/adidas' element={<Adidas/>}/>
      <Route path='/marke/nike' element={<Nike/>}/>
      <Route path='/marke/fila' element={<Fila/>}/>
      <Route path='/marke/puma' element={<Puma/>}/>
      <Route path='marke/rebook' element={<Rebook/>}/>
      <Route path='/muskarci/modne-patike' element={<FashionSnikers/>}/>
      <Route path="/muskarci/cizme&gleznjace" element={<Boots/>}/>
     </Routes>
   </ShoppingCartProvider>
  )
}

export default App
