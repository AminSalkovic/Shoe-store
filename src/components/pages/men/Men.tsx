import { useState } from 'react'
import { Row,Container,Col } from 'react-bootstrap'
import CategoryItems from '../../CategoryItems'
import categoryItems from './categoryMen.json'
import articles from '../../articles.json'
import ArticleCard from '../../ArticleCard'
import Pagination from '../../Pagination'

const Men = () => {
     
    const[currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(6);

    const lastPostIndex=currentPage*postPerPage;
    const firstPostindex=lastPostIndex-postPerPage;
    const currentPost=articles.slice(firstPostindex,lastPostIndex)

  return (
    <Container>
      <div style={{display:'flex'}}>
        <div style={{width:'300px'}}>
            <ul>
                 <h1>kategorija</h1>
                 {categoryItems.map((el)=>{
                   return(
                    <li>{el.category}</li>
                   )
                 })}
            </ul>
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