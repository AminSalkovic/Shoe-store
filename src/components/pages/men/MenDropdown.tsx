import { Link } from 'react-router-dom'
import categoryItems from './categoryMen.json'
import './MenDropDown.css'

type MenDropDownProps={
  closeMenDropDown:()=>void
}

const MenDropdown = ({closeMenDropDown}:MenDropDownProps) => {
  return (
    <div  className='men-drop-down' onMouseLeave={closeMenDropDown}>
         <ul>
             {categoryItems.map((item,id)=>{
                return(
                    <Link to={item.imgPath}>
                     <li onClick={closeMenDropDown} key={id}>{item.category}</li>
                    </Link>
                  )
             })}
         </ul>
    </div>
  )
}

export default MenDropdown