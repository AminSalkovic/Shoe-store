import { Button, Card, Container,} from "react-bootstrap"
import { Link } from "react-router-dom"
import './ArticleCard.css'

type CategoryItemsProps={
    imgUrl:string,
    category:string,
    imgPath:string
}


const ArticleCard = ({imgPath,imgUrl,category}:CategoryItemsProps) => {
  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
        <Link to={imgPath} style={{textDecoration:"none"}}>
        <Card className="articleCard">
            <Card.Img variant='top' 
            src={imgUrl} 
            style={{height:"200px",width:'170px',objectFit:'cover'}}
            /> 
            <Card.Body className='d-flex flex-column'>
                <Card.Title>
                    <h1 style={{color:'gray',fontSize:'23px',marginTop:'2px'}}>{category}</h1>
                     <p>{category}</p>
                </Card.Title>
                <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                    <p>sifra</p>
                     <h1>cena</h1>
                </Card.Title>
            </Card.Body>
        </Card>
        </Link>
      </div>
  )
}

export default ArticleCard