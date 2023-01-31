import { Button, Card, Container,} from "react-bootstrap"
import { Link } from "react-router-dom"


type CategoryItemsProps={
    imgUrl:string,
    category:string,
    imgPath:string
}

const CategoryItems = ({imgUrl,category,imgPath}:CategoryItemsProps) => {
  return (
    <div  style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:'center',marginTop:'20px'}}>
        <Link to={imgPath} style={{textDecoration:"none"}}>
        <Card style={{
            display:'flex',alignItems:'center',justifyContent:'center',
            width:'200px',height:'200px',borderRadius:'100%',}}>
            <Card.Img variant='top' 
            src={imgUrl} 
            style={{height:"200px",width:'200px',objectFit:'cover',borderRadius:'100%'}}
            /> 
        </Card>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                    <h1 style={{color:'gray',fontSize:'23px',marginTop:'2px'}}>{category.toLocaleUpperCase()}</h1>
                </Card.Title>
            </Card.Body>
       </Link>
      </div>
  )
}

export default CategoryItems