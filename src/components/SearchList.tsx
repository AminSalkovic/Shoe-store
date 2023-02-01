import React from 'react'
import { Link } from 'react-router-dom'
import data from '../components/pages/men/categoryMen.json'
import './SearchList.css'

type searchTextProps={
    searchText:string,
    showInput:boolean
}

const SearchList = ({searchText,showInput}:searchTextProps) => {

    const newData=data.filter((el)=>el.category.toLowerCase().includes(searchText))

  return (
    <div className='searchList'>
        {newData.map((item,index)=>{
            if(searchText.length > 0 || showInput===true){
                return(
                    <>
                       <Link to={item.imgPath}>
                           <li key={index}>{item.category}</li>
                       </Link>
                    </>
                )
            }
        })}
    </div>
  )
}

export default SearchList