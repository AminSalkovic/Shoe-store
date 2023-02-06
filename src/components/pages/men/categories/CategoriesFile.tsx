import {useState} from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import ArticleCard from '../../../ArticleCard'
import articles from '../../../articles.json'

type CategoriesFileProps={
    adidasCount:number,
    nikeCount:number,
    filaCount:number,
    pumaCount:number,
    rebookCount:number,
    skechersCount:number,
    kappaCount:number,
    highlandCreekCount:number,
    easyStreetCount:number,
    veniceCount:number,
    category:string
    count:number,
    heading:string
}

const CategoriesFile = ({category,count,adidasCount,nikeCount,filaCount,
  pumaCount,rebookCount,skechersCount,kappaCount,
  highlandCreekCount,easyStreetCount,veniceCount,heading}:CategoriesFileProps) => {
    
    const[categories,setCategories]=useState('')

    const[adidas,setAdidas]=useState(false);
    const[nike,setNike]=useState(false)
    const[fila,setFila]=useState(false)
    const[puma,setPuma]=useState(false)
    const[rebook,setRebook]=useState(false)
    const[skechers,setSkechers]=useState(false)
    const[kappa,setKappa]=useState(false)
    const[highlandCreek,setHighlandCreek]=useState(false)
    const[easyStreet,setEasyStreet]=useState(false)
    const[venice,setVenice]=useState(false)

    const adidasFunction=()=>{setAdidas(true);setCategories('Adidas');}
    const nikeFunction=()=>{setNike(true);setCategories('Nike')}
    const filaFunction=()=>{setFila(true);setCategories('Fila')}
    const pumaFunction=()=>{setPuma(true);setCategories('Puma')}
    const rebookFunction=()=>{setRebook(true);setCategories('Rebook')}
    const skechersFunction=()=>{setSkechers(true);setCategories('Skechers')}
    const kappaFunction=()=>{setKappa(true);setCategories('Kappa')}
    const highlandCreekFunction=()=>{setHighlandCreek(true);setCategories('Highland Creek')}
    const easyStreetFunction=()=>{setEasyStreet(true);setCategories('Easy street')}
    const veniceFunction=()=>{setVenice(true);setCategories('Venice')}

    const buttonFunction=()=>{
      setCategories('');setAdidas(false);setNike(false);
      setFila(false);setPuma(false);setRebook(false);setSkechers(false);
      setKappa(false);setHighlandCreek(false);setEasyStreet(false)
      ;setEasyStreet(false);setVenice(false)
    }
  
  return (
    <Container>
     <div style={{display:'flex'}}>

     <div className='div-part-1'>
                <p>Kategorija</p>
              <div className='scroll-div-men'>
                  <ul>
                     <li onClick={adidasFunction}>Adidas ({adidasCount})</li>
                     <li onClick={nikeFunction}>Nike ({nikeCount})</li>
                     <li onClick={pumaFunction}>Puma ({pumaCount})</li>
                     <li onClick={filaFunction}>Fila ({filaCount}) </li>
                     <li onClick={rebookFunction}>Rebook ({rebookCount}) </li>
                     <li onClick={skechersFunction}>Skechers ({skechersCount})</li>
                     <li onClick={kappaFunction}>Kapa ({kappaCount})</li>
                     <li onClick={highlandCreekFunction}>Highland Creek ({highlandCreekCount})</li>
                     <li onClick={easyStreetFunction}>Easy street ({easyStreetCount})</li>
                     <li onClick={veniceFunction}>Venice ({veniceCount})</li>
                  </ul>
                </div>
          </div>
    <Container>
              <h1>{heading.toUpperCase()}</h1>
     <Button variant='secondary' onClick={buttonFunction}>Svi proizvodi ({count})</Button>
    {adidas&&< Button variant="outline-danger" onClick={()=>{setAdidas(false);setCategories('')}}>Adidas X ({adidasCount})</ Button >}
            {nike&& < Button variant="outline-danger" onClick={()=>{setNike(false);setCategories('')}}>Nike X ({nikeCount})</ Button >}
            {fila&& < Button variant="outline-danger" onClick={()=>{setFila(false);setCategories('')}}>Fila X ({filaCount}) </ Button >}
            {puma&& < Button variant="outline-danger" onClick={()=>{setPuma(false);setCategories('')}}>Puma X ({pumaCount}) </ Button >}
            {rebook&& < Button variant="outline-danger" onClick={()=>{setRebook(false);setCategories('')}}>Rebook X ({rebookCount}) </ Button >}
            {skechers&& < Button variant="outline-danger" onClick={()=>{setSkechers(false);setCategories('')}}>Skechers X ({skechersCount})</ Button >}
            {kappa&& < Button variant="outline-danger" onClick={()=>{setKapa(false);setCategories('')}}>Kappa X ({kappaCount}) </ Button >}
            {highlandCreek && < Button variant="outline-danger" onClick={()=>{setHighlandCreek(false);setCategories('')}}>Highland Creek X ({highlandCreekCount})  </ Button >}
            {easyStreet&& < Button variant="outline-danger" onClick={()=>{setEasyStreet(false);setCategories('')}}>Easy street X ({easyStreetCount}) </ Button >}
            {venice&& < Button variant="outline-danger" onClick={()=>{setVenice(false);setCategories('')}}>Venice X ({veniceCount}) </ Button >}
            <Row md={2} xs={1} lg={3} className='g-3'>
              {articles.map((item,index)=>{
                  if(item.category===category){ 
                      if(categories==='Adidas' || categories==='Nike' || categories==='Fila' 
                      || categories==='Puma' || categories==='Rebook' || categories==='Kappa'
                      ||  categories==='Highland Creek' 
                      || categories==='Skechers' || categories==='Easy street' || categories==='Venice'){
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