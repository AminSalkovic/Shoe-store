import { Container,Navbar as NavbarBs,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext'



const MainNavbar = () => {
   
    const {openMobileDropdown}=useShoppingCart()

    return (
    <NavbarBs variant='light' className='bg-light shadow-sm mb-3'>
    <Container>
       <Nav className='me-auto'>
            <Nav.Link to='/' as={NavLink}>
                Home
            </Nav.Link>
            <form>
                <input type="text"  placeholder='Pretraga'/>
            </form>
            <Nav.Link to='/Novo' as={NavLink}>
                Kontakt
            </Nav.Link>
       </Nav>
        <div>
            <AiIcons.AiOutlineMenu onClick={openMobileDropdown} style={{color:'black'}}/>
        </div>
    </Container>
</NavbarBs>
  )
}

export default MainNavbar