import {useState} from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import ArticleCard from '../../../ArticleCard'
import articles from '../../../articles.json'

type CategoriesFileProps={
    category:string
    count:number
}

const CategoriesFile = ({category,count}:CategoriesFileProps) => {
    
    const[categories,setCategories]=useState('')


    const[adidas,setAdidas]=useState(false);
    const[nike,setNike]=useState(false)
    const[fila,setFila]=useState(false)
    const[puma,setPuma]=useState(false)
    const[rebook,setRebook]=useState(false)
    const[kapa,setKapa]=useState(false)
    const[highlandCreek,setHighlandCreek]=useState(false)
    const[bench,setBench]=useState(false)
    const[sprit,setSprit]=useState(false)

    
    const adidasFunction=()=>{setAdidas(true);setCategories('Adidas');}
    const nikeFunction=()=>{setNike(true);setCategories('Nike')}
    const filaFunction=()=>{setFila(true);setCategories('Fila')}
    const pumaFunction=()=>{setPuma(true);setCategories('Puma')}
    const rebookFunction=()=>{setRebook(true);setCategories('Rebook')}
    const kapaFunction=()=>{setKapa(true);setCategories('Kapa')}
    const highlandCreekFunction=()=>{setHighlandCreek(true);setCategories('Highland Creek')}
    const benchFunction=()=>{setBench(true);setCategories('Bench')}
    const spritFunction=()=>{setSprit(true);setCategories('Sprit')}



  return (
    <Container>
     <div style={{display:'flex'}}>

     <div className='div-part-1'>
                <p>Kategorija</p>
              <div className='scroll-div-men'>
                  <ul>
                  <li onClick={adidasFunction}>Adidas</li>
                     <li onClick={nikeFunction}>Nike</li>
                     <li onClick={filaFunction}>Fila</li>
                     <li onClick={pumaFunction}>Puma</li>
                     <li onClick={rebookFunction}>Rebook</li>
                     <li onClick={kapaFunction}>Kapa</li>
                     <li onClick={highlandCreekFunction}>Highland Creek</li>
                     <li onClick={benchFunction}>Bench</li>
                     <li onClick={spritFunction}>Sprit</li>
                  </ul>
                </div>
          </div>
    <Container>
     <Button variant='secondary' onClick={()=>setCategories('')}>Svi proizvodi ({count})</Button>
    {adidas&&< Button variant="outline-danger" onClick={()=>{setAdidas(false);setCategories('')}}>Adidas X</ Button >}
            {nike&& < Button variant="outline-danger" onClick={()=>{setNike(false);setCategories('')}}>Nike X</ Button >}
            {fila&& < Button variant="outline-danger" onClick={()=>{setFila(false);setCategories('')}}>Fila &times;</ Button >}
            {puma&& < Button variant="outline-danger" onClick={()=>{setPuma(false);setCategories('')}}>Puma &times;</ Button >}
            {rebook&& < Button variant="outline-danger" onClick={()=>{setRebook(false);setCategories('')}}>Rebook &times;</ Button >}
            {highlandCreek && < Button variant="outline-danger" onClick={()=>{setHighlandCreek(false);setCategories('')}}>Highland Creek &times;</ Button >}
            {kapa&& < Button variant="outline-danger" onClick={()=>{setKapa(false);setCategories('')}}>Kapa &times;</ Button >}
            {bench&& < Button variant="outline-danger" onClick={()=>{setBench(false);setCategories('')}}>Bench &times;</ Button >}
            {sprit&& < Button variant="outline-danger" onClick={()=>{setSprit(false);setCategories('')}}>Sprit &times;</ Button >}
            <Row md={2} xs={1} lg={3} className='g-3'>
              {articles.map((item,index)=>{
                  if(item.category===category){ 
                      if(categories==='Adidas' || categories==='Nike' || categories==='Fila' 
                      || categories==='Puma' || categories==='Rebook' || categories==='Kapa'
                      || categories ==='Bench' || categories ==='Sprit' || categories==='Highland Creek'){
                          if(item.brend === categories){
                              return(
                                  <Col key={index}>
                                 <ArticleCard {...item}/>
                              </Col> 
                          );
                        }
                    }else if(categories===''){
                            return(
                              <Col key={index}>
                                 <ArticleCard {...item}/>
                              </Col> 
                          );
                        }
                } 
                 })}
                </Row>
            </Container>
        </div>
      </Container>
  )
}

export default CategoriesFile