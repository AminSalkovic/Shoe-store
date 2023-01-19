import { useState } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import { Row,Container,Col } from 'react-bootstrap'
import CategoryItems from '../../CategoryItems'
import categoryItems from './categoryMen.json'
import articles from '../../articles.json'
import ArticleCard from '../../ArticleCard'
import Pagination from '../../Pagination'
import './Men.css'



const Men = () => {
     
    const[currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(15);

    const lastPostIndex=currentPage*postPerPage;
    const firstPostindex=lastPostIndex-postPerPage;
    const currentPost=articles.slice(firstPostindex,lastPostIndex)

    const[number,setNumber]=useState(0);
    const [number2,setNumber2]=useState(0)
    

  return (
    <Container>
      <div style={{display:'flex'}}>
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
            <button onClick={()=>{setNumber(0)
              setNumber2(0)
            }}>Svi proizvodi</button>
              <Pagination 
              setCurrentPages={setCurrentPage}
              totalPost={articles.length} 
               postPerPage={postPerPage}
               currentPage={currentPage}
              />
            <Row md={2} xs={1} lg={3} className='g-3'>
                  {currentPost.map((item,index)=>{
                     if(item.id<number && item.id>number2){
                      return(
                          <Col key={index}>
                             <ArticleCard {...item}/>
                          </Col> 
                      )
                     }else if(number===0 ){
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