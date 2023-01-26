import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
type HomeBrendCardProps={
    imgUrl:string,
    imgPath:string,
}
const HomeBrendCard = ({imgPath,imgUrl}:HomeBrendCardProps) => {
  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
    <Card  style={{width:'140px',height:'90px'}}>
    <Link to={imgPath} style={{textDecoration:"none"}}>
        <Card.Img variant='top' 
        src={imgUrl} 
        style={{height:"90px",width:'140px',objectFit:'cover'}}
        /> 
     </Link>
    </Card>
    </div>
  )
}

export default HomeBrendCard