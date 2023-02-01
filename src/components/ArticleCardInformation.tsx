import * as AiIcons from 'react-icons/ai'
import './ArticleCardInformation.css'
import { Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

type articleCardInfromationProps={
  id:number,
  heading:string,
  imgUrl:string,
  password:number,
  price:number,
  turnOff:()=>void
}

const ArticleCardInformation = ({heading,imgUrl,password,price,id,turnOff}:articleCardInfromationProps) => {

  const{increaseCartQuantity}=useShoppingCart()

  return (
    <div className='articleCardInformation'>
      <div className='closeIcon' onClick={turnOff}>
         <AiIcons.AiOutlineClose />
      </div>
      <div style={{display:'flex'}}>
          <div className='articleCardInformationPart1'>
            <img src={imgUrl}/>
            <Button onClick={()=>increaseCartQuantity(id)}>Dodaj u korpu</Button>
          </div>
          <div className='articleCardInformationPart2'>
              <h1>{heading}</h1>
              <p>Br artikla: {password}</p>
              <h2>Cena:{price}RSD</h2>
                <p>Cena je informativna i <br/> moze se  razlikovati <br/> od cene u prodavnici</p>
          </div>
      </div>
    </div>
  )
}

export default ArticleCardInformation