import React from 'react'
import data from '../articles.json'
import { Container,Row } from 'react-bootstrap'
import ArticleCard from '../ArticleCard'
const SpecialPrices = () => {
  return (
    <Container>
    <h1>SPECIJALNE CENE</h1>
        <Row md={2} xs={1} lg={4} className='g-3'>
            {data.map((item)=>{
            if(item.price < 5000){
                return(
                    <ArticleCard {...item}/>
                )
            }
            })}
        </Row>
</Container>
  )
}

export default SpecialPrices