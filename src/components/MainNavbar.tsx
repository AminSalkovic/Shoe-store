import { useEffect, useState } from 'react'
import { Container,Navbar as NavbarBs,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext'
import './MainNavbar.css'
import data from './articles.json'

type MainNavbarItem={
    output:string
}

const MainNavbar = () => {
   
    const {openMobileDropdown}=useShoppingCart()

    return (
         <div className='mainNavbar'>
         <div className='mainNavbarPart1'>
            <Nav.Link to='/' as={NavLink}>
                Home
            </Nav.Link>
            <form>
                <input  type="text" placeholder='Search'/>
            </form>
            <Nav.Link to='/Novo' as={NavLink}>
                Kontakt
            </Nav.Link>
         </div> 
     
        <div>
            <AiIcons.AiOutlineMenu onClick={openMobileDropdown} style={{color:'black'}}/>
        </div>
        </div>
  )
}

export default MainNavbar