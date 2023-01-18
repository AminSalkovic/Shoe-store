import React from 'react'
import categoryItems from './categoryMen.json'

const MenDropdown = () => {
  return (
    <div style={{
        position:'absolute',top:'135px',zIndex:'1',
        width:'100%',height:'320px',background:'red'}}>
         <ul>
             {categoryItems.map((item,id)=>{
                return(
                     <li key={id}>{item.category}</li>
                  )
             })}
         </ul>
    </div>
  )
}

export default MenDropdown