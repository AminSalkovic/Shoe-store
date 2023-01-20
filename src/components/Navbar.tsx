import { Container,Navbar as NavbarBs ,Nav,Button} from 'react-bootstrap'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext'
import BrendDropDown from './BrendDropDown'


const Navbar = () => {

    const{openShoppingCart,openMenDropdown,closeMenDropdown,cartQuantity}=useShoppingCart()
    const[brendsDropdown,setBrendDropdown]=useState(false);
     
    const openBrendDropDown=()=>setBrendDropdown(!brendsDropdown);
    const closeBrendDropDown=()=>setBrendDropdown(false)


  return (
    <>
    <NavbarBs variant='dark' sticky='top' className='bg-dark shadow-sm mb-3'>
    <Container>
       <Nav className='me-auto'>
            <Nav.Link to='/Muskarci' as={NavLink}
             onMouseEnter={openMenDropdown}
             onMouseLeave={closeMenDropdown}
            >
                MUSKARCI
            </Nav.Link>
            <Nav.Link to='/Deca' as={NavLink}>
                 DECA
            </Nav.Link>
            <Nav.Link to='/Sport' as={NavLink}>
                SPORT
            </Nav.Link>
            <Nav.Link to='/Specijalne-cene' as={NavLink}>
                SPECIJALNE CENE %
            </Nav.Link>
            <Nav.Link to='/Marke' as={NavLink} onMouseEnter={openBrendDropDown}>
                MARKE
            </Nav.Link>
            <Nav.Link to='/Novo' as={NavLink}>
                NOVO
            </Nav.Link>
       </Nav>
       <Button  onClick={openShoppingCart} variant='secondary' style={{width:'3rem',height:"3rem",position:'relative'}} >
           <AiIcons.AiOutlineShoppingCart/>
             <Container className="rounded-circle bg-danger d-flex align-items-center justify-content-center"
             style={{
                 position:"absolute",
                 bottom:'0',
                 right:'0',
                 width:'1.5rem',
                 height:'1.5rem',
                 transform:'translate(25%,25%)'}}
                 >
                    {cartQuantity}
             </Container>
        </Button>
    </Container>
</NavbarBs>
  {brendsDropdown && <BrendDropDown  closeBrendDropDown={closeBrendDropDown}/>}
</>
)
}

export default Navbar