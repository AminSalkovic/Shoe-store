

import { Button, Card, Container,} from "react-bootstrap"
import { Link } from "react-router-dom"


type CategoryItemsProps={
    imgUrl:string,
    category:string,
    imgPath:string
}

const CategoryItems = ({imgUrl,category,imgPath}:CategoryItemsProps) => {
  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
        <Link to={imgPath} style={{textDecoration:"none"}}>
        <Card style={{
            display:'flex',alignItems:'center',justifyContent:'center',
            width:'180px',height:'180px',borderRadius:'100%',border:'1px solid black'}}>
            <Card.Img variant='top' 
            src={imgUrl} 
            style={{height:"120px",width:'120px',objectFit:'cover'}}
            /> 
        </Card>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                    <h1 style={{color:'gray',fontSize:'23px',marginTop:'2px'}}>{category}</h1>
                </Card.Title>
            </Card.Body>
        </Link>
      </div>
  )
}

export default CategoryItems