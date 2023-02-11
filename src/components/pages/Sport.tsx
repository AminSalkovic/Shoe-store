import { Container,Col,Row} from "react-bootstrap"
import ArticleCard from "../ArticleCard"
import sportItems from '../articles.json'

const Sport = () => {
  return (
    <Container>
            <Row md={3} xs={1} lg={4} className='g-3'>
                {sportItems.map((item)=>{
                  if(item.category==='Sportske patike' || item.category==='Trekking'){
                    return(
                                <Col  key={item.id}>
                                    <ArticleCard {...item}/>
                                 </Col> 
                            )
                          }
                        })}
                </Row>
            </Container>
  )
}

export default Sport