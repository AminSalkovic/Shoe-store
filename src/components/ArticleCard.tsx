import { useState } from "react"
import { Button, Card, Container,} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import './ArticleCard.css'

type CategoryItemsProps={
    id:number,
    imgUrl:string,
    category:string,
    imgPath:string,
    brend:string,
    password:number,
    name:string,
    price:number
}


const ArticleCard = ({id,imgPath,imgUrl,category,name,password,brend,price}:CategoryItemsProps) => {

    const[addButton,setAddButton]=useState(false)

    const hoverButton=()=> setAddButton(true)
    const unhoverButton=()=>setAddButton(false)

    const{increaseCartQuantity}=useShoppingCart()
  return (
    <div className="articleCardDiv"
      onMouseEnter={hoverButton}
      onMouseLeave={unhoverButton}
     >
        <Card className="articleCard">
        <Link to={imgPath} style={{textDecoration:"none"}}>
            <Card.Img  
            className="articleCardImg"
            src={imgUrl} 
            /> 
         </Link>
         <div>
            <div className="divPart1">
                    <h1>{brend}</h1>
                     <p>{name}</p>
            </div> 
               <div className="divPart2">
                    <p>sifra: {password}</p>
                     <h1>{price}RSD</h1>
               </div>
         </div>

          {addButton && 
                <div style={{height:'40px'}}>
                  <Button  variant="secondary" onClick={()=>increaseCartQuantity(id)} className='w-100'>+ Add To Card </Button> 
               </div>
          }
        </Card>
      </div>
  )
}

export default ArticleCard