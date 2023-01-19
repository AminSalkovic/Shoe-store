import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import ArticleCard from '../../ArticleCard'
import articleNike from '../../articles.json'

const Nike = () => {
  return (
    <Container>
            <Row md={2} xs={1} lg={4} className='g-3'>
                {articleNike.map((item,index)=>{
                  if(item.brend ==='Nike'){
                    return(
                                <Col key={index}>
                                    <ArticleCard {...item}/>
                                 </Col> 
                            )
                          }
                        })}
                </Row>
            </Container>
  )
}

export default Nike