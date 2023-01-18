import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row,Container,Col } from 'react-bootstrap'
import CategoryItems from '../../CategoryItems'
import categoryItems from './categoryMen.json'
import articles from '../../articles.json'
import ArticleCard from '../../ArticleCard'
import Pagination from '../../Pagination'
import './Men.css'

const Men = () => {
     
    const[currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(20);

    const lastPostIndex=currentPage*postPerPage;
    const firstPostindex=lastPostIndex-postPerPage;
    const currentPost=articles.slice(firstPostindex,lastPostIndex)

  return (
    <Container>
      <div style={{display:'flex'}}>
        <div className='div-part-1'>
                <h1>kategorija</h1>
              <div className='scroll-div-men'>
                  <ul>
                      {categoryItems.map((el)=>{
                        return(
                           <Link to={el.imgPath}>
                              <li>{el.category}({el.count})</li>
                           </Link>
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
                                <Col key={item.id}>
                                    <CategoryItems {...item}/>
                                 </Col> 
                            )
                          }
                        })}
                </Row>
            </Container>
            <Container>
              <Pagination 
              setCurrentPages={setCurrentPage}
              totalPost={articles.length} 
               postPerPage={postPerPage}
               currentPage={currentPage}
              />
            <Row md={2} xs={1} lg={3} className='g-3'>
                  {currentPost.map((item,id)=>{
                    return(
                      <Col key={id}>
                         <ArticleCard {...item}/>
                      </Col> 
                    )
                  })}
                </Row>
            </Container>
          </Container>
       </div>
    </Container>
  )
}

export default Men