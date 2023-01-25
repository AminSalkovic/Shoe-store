import { useState } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import { Row,Container,Col, Button } from 'react-bootstrap'
import CategoryItems from '../../CategoryItems'
import categoryItems from './categoryMen.json'
import articles from '../../articles.json'
import ArticleCard from '../../ArticleCard'
import Pagination from '../../Pagination'
import './Men.css'



const Men = () => {
     
    const[currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(15);

    const  lastPostIndex=currentPage*postPerPage;
    const firstPostindex=lastPostIndex-postPerPage;
    const currentPost=articles.slice(firstPostindex,lastPostIndex)

    const[number,setNumber]=useState(0);
    const [number2,setNumber2]=useState(0)
    
    const[category,setCategory]=useState('')


    const[adidas,setAdidas]=useState(false);
    const[nike,setNike]=useState(false)
    
    const adidasFunction=()=>setAdidas(true);
    const nikeFunction=()=>setNike(true)

    const cipele=()=>setCategory('cipele');
    const cizme=()=>setCategory('ČIZME&GLEŽNJAČE')
     

      
    
    

    return (
      <Container>
      <div style={{display:'flex'}}>
        <div>
        <div className='div-part-1'>
                <h1>kategorija</h1>
              <div className='scroll-div-men'>
                  <ul>
                      {categoryItems.map((el,index)=>{
                        return(
                          <li key={index} onClick={()=>{
                            setNumber(el.num)
                                setNumber2(el.amin)
                             
                              }}>{el.category}({el.count})</li>
                          )
                          })}
                  </ul>
                </div>
          </div>
        <div className='div-part-1'>
                <h1>MARKE</h1>
              <div className='scroll-div-men'>
                  <ul>
                     <li onClick={adidasFunction}>Adidas</li>
                     <li onClick={nikeFunction}>Nike</li>
                     <li onClick={cipele}>cipele</li>
                     <li onClick={cizme}>cizme</li>
                  </ul>
                </div>
        </div>
    </div>
        <Container>
            <Container>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {categoryItems.map((item)=>{
                  if(item.id<4){
                    return(
                                <Col  key={item.id}>
                                    <CategoryItems {...item}/>
                                 </Col> 
                            )
                          }
                        })}
                </Row>
            </Container>
          <Container>
            <button onClick={()=>{setNumber(0);setNumber2(0);setCurrentPage(1);setCategory('')}}>Svi proizvodi</button>
            {adidas&& <button onClick={()=>setAdidas(false)}>Adidas</button>}
            {nike&& <button onClick={()=>setNike(false)}>Nike</button>}
            
              <Pagination 
              setCurrentPages={setCurrentPage}
              totalPost={articles.length} 
               postPerPage={postPerPage}
               currentPage={currentPage}
              />
            <Row md={2} xs={1} lg={3} className='g-3'>
            {currentPost.map((item,index)=>{
                     if(it){
                      return(
                          <Col key={index}>
                             <ArticleCard {...item}/>
                          </Col> 
                      )
                     }
                     else if(number===0){
                      return(
                        <Col key={index}>
                           <ArticleCard {...item}/>
                        </Col> 
                    )
                     }
                  })}

                </Row>
            </Container>
        </Container>
       </div>
    </Container>
  )
}

export default Men