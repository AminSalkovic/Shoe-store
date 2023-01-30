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
import DeepSnikers from './components/pages/men/categories/DeepSnikers'
import HighlandCreek from './components/pages/brends/HighlandCreek'
import SportSnikers from './components/pages/men/categories/SportSnikers'
import ElegantShoes from './components/pages/men/categories/ElegantShoes'
import Venice from './components/pages/brends/Venice'
import EasyStreet from './components/pages/brends/EasyStreet'
import Skechers from './components/pages/brends/Skechers'
import Trekking from './components/pages/men/categories/Trekking'
import Sandals from './components/pages/men/categories/Sandals'
import Slippers from './components/pages/men/categories/Slippers'
import Kappa from './components/pages/brends/Kappa'

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
      <Route path='/marke/skechers' element={<Skechers/>}/>
      <Route path='/marke/kappa' element={<Kappa/>}/>
      <Route path='/marke/venice' element={<Venice/>}/>
      <Route path='/marke/easy-street' element={<EasyStreet/>}/>
      <Route path='marke/highland-creek' element={<HighlandCreek/>}/>
      <Route path='/muskarci/modne-patike' element={<FashionSnikers/>}/>
      <Route path="/muskarci/cizme&gleznjace" element={<Boots/>}/>
      <Route path='/muskarci/elegantne-cipele' element={<ElegantShoes/>}/>
      <Route path='/muskarci/duboke-patike'  element={<DeepSnikers/>}/>
      <Route path='/muskarci/sportske-patike' element={<SportSnikers/>}/>
      <Route path='/muskarci/trekking' element={<Trekking/>}/>
      <Route path='/muskarci/sandale' element={<Sandals/>}/>
      <Route path='/muskarci/papuce' element={<Slippers/>}/>
     </Routes>
   </ShoppingCartProvider>
  )
}

export default App
