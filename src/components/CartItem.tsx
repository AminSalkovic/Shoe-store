import { Stack,Button} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from './utilities/formatCurrency'
import  articleItems from './articles.json'
import * as MdIcons from 'react-icons/md'

type CartItemProps={
  id:number,
  quantity:number
}

const CartItem = ({id,quantity}:CartItemProps) => {
 
 const{removeFromCart,increaseCartQuantity,decreaseCartQuantity}=useShoppingCart()

 const item = articleItems.find(i=> i.id ===id)

 if(item==null) return null

  return (
    <>
    <Stack direction="horizontal" gap={2} className='d-flex align-items-center'>
        <img src={item.imgUrl} style={{width:'125px',height:"100px",objectFit:'cover'}}/>
      <div className="me-auto">
         <div>
            {item.name}{' '}
            <div style={{display:'felx',width:'100'}}>
            <span className="text-muted" style={{fontSize:".75rem"}}>{quantity}x</span>
             <Button onClick={()=>decreaseCartQuantity(id)} variant="outline-danger" size="sm" style={{width:'27px',marginLeft:'3px'}}>-</Button>
             <Button onClick={()=>increaseCartQuantity(id)} variant="outline-success" size="sm" style={{marginLeft:'3px'}} >+</Button>
            </div> 
         </div>
         <div className='text-muted' style={{fontSize:'.75rem'}}>
         {formatCurrency(item.price)}
         </div>
       </div>
       <div>
       {formatCurrency(item.price*quantity)}
       </div> 
       <Button onClick={()=>removeFromCart(id)} variant="outline-danger" size="sm">
           <MdIcons.MdDeleteForever style={{fontSize:'20px'}}/>
       </Button>
    </Stack>
    
    </>
  )
}

export default CartItem