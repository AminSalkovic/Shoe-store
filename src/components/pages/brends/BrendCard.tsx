import { Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type BrendCardProps={
    imgUrl:string,
    imgPath:string,
}
const BrendCard = ({imgPath,imgUrl}:BrendCardProps) => {
  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
    <Card  style={{width:'240px',height:'220px'}}>
    <Link to={imgPath} style={{textDecoration:"none"}}>
        <Card.Img variant='top' 
        src={imgUrl} 
        style={{height:"220px",width:'240px',objectFit:'cover'}}
        /> 
     </Link>
    </Card>
  </div>
  )
}

export default BrendCard