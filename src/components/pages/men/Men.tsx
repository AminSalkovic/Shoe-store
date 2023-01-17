import { Row,Container,Col } from 'react-bootstrap'
import CategoryItems from '../../CategoryItems'
import categoryItems from './categoryMen.json'

const Men = () => {
  return (
    <Container>
      <div style={{display:'flex'}}>
        <div style={{width:'300px'}}>
            amin
        </div>
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
       </div>
    </Container>
  )
}

export default Men