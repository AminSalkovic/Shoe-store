import { Card} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./HomeKidsCard.css"

type homeCardProps={
    imgUrl:string,
    category:string,
    imgPath:string,
}


const HomeKidsCard = ({imgUrl,category,imgPath}:homeCardProps) => {
  return (
    <div  className="homeCardKids">
    <Card >
    <Link to={imgPath} style={{textDecoration:"none"}}>
        <Card.Img variant='top' 
        src={imgUrl} 
        className='homeCardKidsImg'
        /> 
     </Link>
     <Card.Body><h1>{category}</h1></Card.Body>
    </Card>
  </div>
  )
}

export default HomeKidsCard