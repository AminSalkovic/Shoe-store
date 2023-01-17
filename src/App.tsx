import { Routes,Route } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Navbar from './components/Navbar'
import MainNavbar from './components/MainNavbar'
import Home from './components/Home'
import Men from './components/pages/men/Men'

function App() {
  


  return (

   <ShoppingCartProvider>
    <MainNavbar/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/muskarci' element={<Men/>}/>
     </Routes>
   </ShoppingCartProvider>
  )
}

export default App
