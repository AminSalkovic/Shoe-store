import {Offcanvas} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

type ShoppingCartProps={
    isOpenCart:boolean
}

const ShoppingCart = ({isOpenCart}:ShoppingCartProps) => {
     
    const{closeShoppingCart}=useShoppingCart()

  return (
    <Offcanvas show={isOpenCart}  onHide={closeShoppingCart} placement='end'>
    <Offcanvas.Header closeButton>
          <Offcanvas.Title>cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        AMIN
    </Offcanvas.Body>
</Offcanvas>
  )
}

export default ShoppingCart