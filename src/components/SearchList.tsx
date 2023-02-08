import React from 'react'
import { Link } from 'react-router-dom'
import data from '../components/pages/men/categoryMen.json'
import './SearchList.css'

type searchTextProps={
    searchText:string,
    showInput:boolean,
    closeInputForm:()=>void;
}

const SearchList = ({searchText,showInput,closeInputForm}:searchTextProps) => {

    const newData=data.filter((el)=>el.category.toLowerCase().includes(searchText))

  return (
    <div className='searchList'>
        {newData.map((item,index)=>{
            if(searchText.length > 0 || showInput===true){
                return(
                    <>
                       <Link to={item.imgPath}>
                           <li onClick={closeInputForm} key={index}>{item.category}</li>
                       </Link>
                    </>
                )
            }
        })}
        <Link to='/deca/patike'>
            <li onClick={closeInputForm}>Deca patike</li>
        </Link>
        <Link to='/deca/duboke-patike'>
            <li onClick={closeInputForm}>Deca duboke patike</li>
        </Link>
        <Link to='/deca/cizme'>
            <li onClick={closeInputForm}>Deca cizme</li>
        </Link>
        <Link to='/deca/gumene-cizme'>
            <li onClick={closeInputForm}>Deca gumene cizme</li>
        </Link>
        <Link to='/deca/kucne-papuce'>
            <li onClick={closeInputForm}>Deca kucne papuce</li>
        </Link>
    </div>
  )
}

export default SearchList