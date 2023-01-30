import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import brendList from './brend.json'
import './BrendDropDown.css'

type BrendDropDownPorps={
    closeBrendDropDown:()=>void
}

const BrendDropDown = ({closeBrendDropDown}:BrendDropDownPorps) => {
  return (
     <div className='brendDropDown' onMouseLeave={closeBrendDropDown}>
        <Row md={2} xs={1} lg={3} className='g-3'>          
        {brendList.map((items,index)=>{
            return(
                <Link key={index} to={items.imgPath}>
                <li key={index} onClick={closeBrendDropDown}>{items.name}</li>
            </Link>
            );
        })}
        </Row>
     </div>
  )
}

export default BrendDropDown