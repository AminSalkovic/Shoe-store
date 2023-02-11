import { Card,} from "react-bootstrap"
import { Link } from "react-router-dom"
import './HomeArticleCard.css'

type CategoryItemsProps={
    id:number,
    imgUrl:string,
    category:string,
    brend:string,
    password:number,
    name:string,
    price:number
}


const HomeArticleCard = ({id,imgUrl,category,name,password,brend,price}:CategoryItemsProps) => {

  return (
    <div className="homearticlecard">
        <Card className="homeArticleCard">
            <Card.Img variant='top' 
            src={imgUrl} 
            className="homeArticleCardImg"
            /> 
            <Card.Body className='d-flex flex-column'>
                <Card.Title>
                    <h1 style={{color:'gray',fontSize:'20px',marginTop:'2px'}}>{brend}</h1>
                     <p style={{color:'gray',fontSize:'15px'}}>{name}</p>
                </Card.Title>
                <Card.Title className="d-flex align-items-baseline justify-content-space-between mb-4">
                    <p style={{fontSize:'12px',color:'gray'}}>{password}</p>
                     <h1 className="priceH1">sifra:{price}RSD</h1>
                </Card.Title>
                <div className="mt-auto">
           </div>
            </Card.Body>
        </Card>
      </div>
  )
}

export default HomeArticleCard