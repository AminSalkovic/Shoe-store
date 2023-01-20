import {useState} from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import ArticleCard from '../../ArticleCard'
import articleFila from '../../articles.json'
import categoryItems from '../men/categoryMen.json'

const Fila = () => {
 
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
                                }}>{el.category}</li>
                                )
                            })}
                    </ul>
                  </div>
              <button onClick={()=>{setNumber(0);setNumber2(0)}}>Svi proizvodi</button>
            </div>
      <Container>
              <Row md={2} xs={1} lg={3} className='g-3'>
                {articleFila.map((item,index)=>{
                  if(item.brend==='Fila'){    
                    if(item.id<number && item.id>number2){
                      return(
                          <Col key={index}>
                             <ArticleCard {...item}/>
                          </Col> 
                      )
                     }else if(number===0){
                      return(
                        <Col key={index}>
                           <ArticleCard {...item}/>
                        </Col> 
                    )}
                   }
                   })}
                  </Row>
              </Container>
          </div>
        </Container>
    )
}

export default Fila