import { Button, Card, Container,} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import './ArticleCard.css'

type CategoryItemsProps={
    redni:number,
    id:number,
    imgUrl:string,
    category:string,
    imgPath:string,
    brend:string,
    password:number,
    name:string,
    price:number
}


const ArticleCard = ({id,imgPath,imgUrl,category,name,password,brend,price,redni}:CategoryItemsProps) => {

    const{increaseCartQuantity}=useShoppingCart()
  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
        <Card className="articleCard">
        <Link to={imgPath} style={{textDecoration:"none"}}>
            <Card.Img variant='top' 
            src={imgUrl} 
            style={{height:"130px",width:'170px',objectFit:'cover'}}
            /> 
         </Link>
            <Card.Body className='d-flex flex-column'>
                <Card.Title>
                    <h1 style={{color:'gray',fontSize:'20px',marginTop:'2px'}}>{brend}</h1>
                     <p style={{color:'gray',fontSize:'15px'}}>{name}</p>
                </Card.Title>
                <Card.Title className="d-flex align-items-baseline justify-content-space-between mb-4">
                    <p style={{fontSize:'12px',color:'gray'}}>{password}</p>
                     <h1 style={{fontSize:'20px',color:'green',marginLeft:'10px'}}>{price}RSD</h1>
                </Card.Title>
                <div className="mt-auto">
              <Button  onClick={()=>increaseCartQuantity(id)} className='w-100'>+ Add To Card </Button> 
              
           </div>
            </Card.Body>
        </Card>
      </div>
  )
}

export default ArticleCard