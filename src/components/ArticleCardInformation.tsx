import * as AiIcons from 'react-icons/ai'
import './ArticleCardInformation.css'
import { Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import 'animate.css';

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

  const number46=46;

  const createDigits=()=>{
    const digits=[];
    for(let i=40;i<49;i++){
      digits.push(
        <button  className={`${i > number46 ? 'numberButtonDontHave' : 'numberButtonHave'}`} key={i}>{i}</button>
      )
    }
    return digits;
  }

  return (
    <div className='articleCardInformation'>
      <div className='closeIcon' onClick={turnOff}>
         <AiIcons.AiOutlineClose />
      </div>
      <div style={{display:'flex'}}>
          <div className='articleCardInformationPart1'>
            <img src={imgUrl}/>
            <Button style={{marginTop:'30px'}} variant='secondary' onClick={()=>increaseCartQuantity(id)}>
              Dodaj u korpu <AiIcons.AiOutlineShoppingCart style={{fontSize:'20px'}}/>
            </Button>
          </div>
          <div className='articleCardInformationPart2'>
               <h1>{heading}</h1>
               <p>Br artikla: {password}</p>
              <h2>Cena:{price}RSD</h2>
                <p>Cena je informativna i <br/> moze se  razlikovati <br/> od cene u prodavnici</p>
                <div className="buttons">
                  {createDigits()}
                </div>
          </div>
      </div>
    </div>
  )
}

export default ArticleCardInformation