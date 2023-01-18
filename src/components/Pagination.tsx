import React from 'react'
import { Button } from 'react-bootstrap'

type PaginationProps={
    totalPost:number,
    postPerPage:number,
    currentPage:number,
    setCurrentPages:({}:number)=>void|number
}

const Pagination = ({totalPost,postPerPage,setCurrentPages,currentPage}:PaginationProps) => {
   
        const style={
            color:'red'
        }
     let pages=[];
     
     for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pages.push(i)
     }

  return (
    <div>
        {pages.map((page,index)=>{
            return(
                <Button key={index} onClick={()=>setCurrentPages(page)} className={page==currentPage? 'bg-secondary' :''}>
                   {page}
                </Button>
            )
        })}
    </div>
  )
}

export default Pagination