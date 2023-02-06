import { useEffect, useState } from 'react'
import { Container,Navbar as NavbarBs,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext'
import './MainNavbar.css'
import SearchList from './SearchList'



const MainNavbar = () => {
   
    const {openMobileDropdown}=useShoppingCart()
    const[searchText,setSearchText]=useState('')
    const[input,setInput]=useState(false)
     
     const showList=()=>setInput(!input)

    return (
         <div className='mainNavbar'>
         <div className='mainNavbarPart1'>
            <Nav.Link to='/' as={NavLink}>
                Home
            </Nav.Link>
            <form>
                <input  type="text" placeholder='Search'
                 onClick={showList}
                 onChange={(event)=>setSearchText(event.target.value)}
                 />
                 <AiIcons.AiOutlineSearch className='searchIcon'/>
            </form>
            {(input || searchText.length>0) &&
             <SearchList searchText={searchText} showInput={input}/>
            }
            <Nav.Link to='/Novo' as={NavLink}>
                Kontakt
            </Nav.Link>
         </div> 
     
        <div>
            <AiIcons.AiOutlineMenu onClick={openMobileDropdown} className='menuMobileIcon'/>
        </div>
        </div>
  )
}

export default MainNavbar