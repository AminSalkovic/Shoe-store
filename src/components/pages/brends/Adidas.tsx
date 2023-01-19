import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import ArticleCard from '../../ArticleCard'
import articleAdidas from '../../articles.json'

const Adidas = () => {
  return (
    <Container>
            <Row md={2} xs={1} lg={4} className='g-3'>
                {articleAdidas.map((item)=>{
                  if(item.brend ==='Adidas'){
                    return(
                                <Col key={item.id}>
                                    <ArticleCard {...item}/>
                                 </Col> 
                            )
                          }
                        })}
                </Row>
            </Container>
  )
}

export default Adidas