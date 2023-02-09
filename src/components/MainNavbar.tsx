import { useEffect, useState } from 'react'
import { Container,Navbar as NavbarBs,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext'
import './MainNavbar.css'
import SearchList from './SearchList'



const MainNavbar = () => {
    const {cartQuantity,openShoppingCart}=useShoppingCart()
    const {openMobileDropdown}=useShoppingCart()
    const[searchText,setSearchText]=useState('')
    const[input,setInput]=useState(false)
    const[mobileInput,setMobileInput]=useState(false)
    const showList=()=>setInput(!input);

    const closeInputForm=()=>{
      setInput(false);setMobileInput(false)
    }

    return (
      <>
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
             <SearchList searchText={searchText} showInput={input} 
             closeInputForm={closeInputForm}/>
            }
            <div className='navbarContact'>
            <Nav.Link to='/kontakt' as={NavLink}>
                Kontakt
            </Nav.Link>
            </div>
            <AiIcons.AiOutlineSearch className='mobileSearchIcon' 
            onClick={()=>setMobileInput(!mobileInput)}/>
         </div> 
        <div className='shoppingCartIcon' onClick={openShoppingCart}>
        <AiIcons.AiOutlineShoppingCart/>
          <div>
            {cartQuantity}
          </div>
        </div>
        <div className='navbarMenuIcon'>
            <AiIcons.AiOutlineMenu onClick={openMobileDropdown} className='menuMobileIcon'/>
        </div>
        </div>
        {mobileInput &&  
             <form>
                <input className='mobileInput' type="text" placeholder='Pretrazi...'
                 onClick={showList}
                 onChange={(event)=>setSearchText(event.target.value)}
                 />
                 <AiIcons.AiOutlineSearch className='searchIcon2'/>
            </form>
             }
      </>
  )
}

export default MainNavbar