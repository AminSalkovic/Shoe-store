import { Routes,Route } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Navbar from './components/Navbar'
import MainNavbar from './components/MainNavbar'
import Home from './components/Home'

function App() {
  


  return (

   <ShoppingCartProvider>
    <MainNavbar/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
   </ShoppingCartProvider>
  )
}

export default App
