import {Offcanvas,Stack} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from './utilities/formatCurrency'
import articleItems from './articles.json'
import CartItem from './CartItem'


type ShoppingCartProps={
    isOpenCart:boolean
}

const ShoppingCart = ({isOpenCart}:ShoppingCartProps) => {
     
    const{closeShoppingCart,cartItems}=useShoppingCart()

  return (
    <Offcanvas show={isOpenCart}  onHide={closeShoppingCart} placement='end'>
    <Offcanvas.Header closeButton>
          <Offcanvas.Title>Korpa</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    <Stack gap={3}>
            {cartItems.map((item)=>
              <CartItem key={item.id} {...item}/>
            )}      
        </Stack>
        <div className='ms-auto fw-bold fs-5'>
                    Ukupno{' '}{formatCurrency(
                        cartItems.reduce((total,cartItem)=>{
                            const item=articleItems.find(i=> i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        },0)
                    )}
                </div>
    </Offcanvas.Body>
</Offcanvas>
  )
}

export default ShoppingCart