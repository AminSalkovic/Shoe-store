import { Card} from "react-bootstrap"
import { Link } from "react-router-dom"

type homeCardProps={
    imgUrl:string,
    category:string,
    imgPath:string,
    
}

const HomeKidsCard = ({imgUrl,category,imgPath}:homeCardProps) => {
  return (
    <div style={{width:'250px',height:'300px',display:"flex",flexDirection:'column',alignItems:"center",border:'1px solid gray',borderRadius:'10px'}}>
    <Card  style={{width:'240px',height:'220px'}}>
    <Link to={imgPath} style={{textDecoration:"none"}}>
        <Card.Img variant='top' 
        src={imgUrl} 
        style={{height:"220px",width:'240px',objectFit:'cover'}}
        /> 
     </Link>
     <Card.Body><h1 style={{color:'gray',fontSize:'27px',textAlign:'center'}}>{category}</h1></Card.Body>
    </Card>
  </div>
  )
}

export default HomeKidsCard