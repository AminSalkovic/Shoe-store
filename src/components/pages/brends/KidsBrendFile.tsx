import {useState} from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import ArticleCard from '../../ArticleCard'
import articles from '../../articles.json'

type KidsBrendFileProps={
    brend:string,
}

const KidsBrendFile = ({brend}:KidsBrendFileProps) => {
    
    const[category,setCategory]=useState('')
    const kidsSnikers=()=>setCategory('Deca patike');
    const kidsBoots=()=>setCategory('Deca cizme');
    
  
  return (
    <Container>
     <div style={{display:'flex'}}>
     <div className='div-part-1'>
                <p style={{textAlign:'center'}}>Kategorija</p>
              <div className='scroll-div-men'>
                  <ul>
                      <li onClick={kidsSnikers}>Deca Patike</li>
                      <li onClick={kidsBoots}>Deca Čizme</li>
                      <li>Deca gumene čizme</li>
                      <li>Deca duboke patike</li>
                      <li>Deca kućne papuče</li>
                  </ul>
                </div>
          </div>
    <Container>
             <h1 style={{fontWeight:'700',fontStretch:'ultra-expanded'}}>{brend.toUpperCase()}</h1>
             <Button onClick={()=>{setCategory('');}}>Svi proizvodi</Button>
            <Row md={2} xs={1} lg={3} className='g-3'>
              {articles.map((item,index)=>{
                if(item.brend===brend){    
                  if(item.category===category){
                    return(
                        <Col key={index}>
                           <ArticleCard {...item}/>
                        </Col>
                  )
                  }else if(category===''){
                    if(item.brend===brend){
                        return(
                            <Col key={index}>
                               <ArticleCard {...item}/>
                            </Col>
                      ) 
                    }
                  }
                }
                 })}
                </Row>
            </Container>
        </div>
      </Container>
  )
}

export default KidsBrendFile