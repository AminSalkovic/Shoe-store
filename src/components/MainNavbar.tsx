import { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as HiIcons from 'react-icons/hi'
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
                <AiIcons.AiFillHome className='homeIcon'/>
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
        <HiIcons.HiOutlineShoppingBag/>
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