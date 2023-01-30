import { useState } from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import ArticleCard from '../../ArticleCard'
import articles from '../../articles.json'
import categoryItems from '../men/categoryMen.json'

type BrendFileProps={
    brend:string,
    count:number
}

const BrendFile = ({brend,count}:BrendFileProps) => {
   
  const[number,setNumber]=useState(0);
  const [number2,setNumber2]=useState(0)

  return (
    <Container>
     <div style={{display:'flex'}}>
     <div className='div-part-1'>
                <p style={{textAlign:'center'}}>Kategorija</p>
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
          </div>
    <Container>
            <Button onClick={()=>{setNumber(0);setNumber2(0)}}>Svi proizvodi ({count})</Button>
            <Row md={2} xs={1} lg={3} className='g-3'>
              {articles.map((item,index)=>{
                if(item.brend===brend){    
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

export default BrendFile