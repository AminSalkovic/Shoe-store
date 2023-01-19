import { Routes,Route } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Navbar from './components/Navbar'
import MainNavbar from './components/MainNavbar'
import Home from './components/Home'
import Men from './components/pages/men/Men'
import Brends from './components/pages/brends/Brends'
import FashionSnikers from './components/pages/men/FashionSnikers'
import Adidas from './components/pages/brends/Adidas'

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
     </Routes>
   </ShoppingCartProvider>
  )
}

export default App
