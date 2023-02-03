import { useState } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import { Row,Container,Col, Button } from 'react-bootstrap'
import CategoryItems from '../../CategoryItems'
import categoryItems from './categoryMen.json'
import articles from '../../articles.json'
import ArticleCard from '../../ArticleCard'
import Pagination from '../../Pagination'
import './Men.css'


const Men = () => {
     
    const[currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(15);

    const  lastPostIndex=currentPage*postPerPage;
    const firstPostindex=lastPostIndex-postPerPage;
    const currentPost=articles.slice(firstPostindex,lastPostIndex)


    
    const[category,setCategory]=useState('')

    
    const fashionShoesFunction=()=>setCategory('MODNE PATIKE')
    const bootsFunction=()=>setCategory('ČIZME&GLEŽNJAČE')
    const deepSnikersFunction=()=>setCategory('DUBOKE PATIKE');
    const elegantShoesFunction=()=>setCategory('ELEGANTNE CIPELE');
    const sportSnikersFunction=()=>setCategory('Sportske patike');
    const trekkingFunction=()=>setCategory('Trekking')
    const sandalsFunction=()=>setCategory('Sandale');
    const slippersFunction=()=>setCategory('Papuce')
    
    
    const[brend,setBrend]=useState('')

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
    
    const adidasFunction=()=>{setAdidas(true);setBrend('Adidas');}
    const nikeFunction=()=>{setNike(true);setBrend('Nike')}
    const filaFunction=()=>{setFila(true);setBrend('Fila')}
    const pumaFunction=()=>{setPuma(true);setBrend('Puma')}
    const rebookFunction=()=>{setRebook(true);setBrend('Rebook')}
    const skechersFunction=()=>{setSkechers(true);setBrend('Skechers')}
    const kappaFunction=()=>{setKappa(true);setBrend('Kappa')}
    const highlandCreekFunction=()=>{setHighlandCreek(true);setBrend('Highland Creek')}
    const easyStreetFunction=()=>{setEasyStreet(true);setBrend('Easy street')}
    const veniceFunction=()=>{setVenice(true);setBrend('Venice')}


 
    return (
      <Container>
      <div style={{display:'flex'}}>
        <div>
        <div className='div-part-1'>
                <p>Kategorija</p>
              <div className='scroll-div-men'>
                  <ul>
                      <li onClick={fashionShoesFunction}>Modne Patike</li>
                      <li onClick={bootsFunction}>Cizme</li>
                      <li onClick={elegantShoesFunction}>Elegantne Cipele</li>
                      <li onClick={deepSnikersFunction}>Duboke Patike</li>
                      <li onClick={sportSnikersFunction}>Sportske Patike</li>
                      <li onClick={trekkingFunction}>Trekking </li>
                      <li onClick={sandalsFunction}>Sandale</li>
                      <li onClick={slippersFunction}>Papuce</li>
                  </ul>
                </div>
          </div>
        <div className='div-part-1'>
                <p>Marke</p>
              <div className='scroll-div-men'>
                  <ul>
                    <li onClick={adidasFunction}>Adidas (46)</li>
                     <li onClick={nikeFunction}>Nike (39)</li>
                     <li onClick={pumaFunction}>Puma (27)</li>
                     <li onClick={filaFunction}>Fila (23) </li>
                     <li onClick={rebookFunction}>Rebook (20) </li>
                     <li onClick={skechersFunction}>Skechers (9)</li>
                     <li onClick={kappaFunction}>Kappa (8)</li>
                     <li onClick={highlandCreekFunction}>Highland Creek (3)</li>
                     <li onClick={easyStreetFunction}>Easy street (5)</li>
                     <li onClick={veniceFunction}>Venice (11)</li>
                  </ul>
                </div>
        </div>
    </div>
        <Container>
            <Container>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {categoryItems.map((item)=>{
                  if(item.id<4){
                    return(
                                <Col  key={item.id}>
                                    <CategoryItems {...item}/>
                                 </Col> 
                            )
                          }
                        })}
                </Row>
            </Container>
          <Container>
            <Button variant="secondary">Svi proizvodi (191)</Button>
            {adidas&&< Button variant="outline-danger" onClick={()=>{setAdidas(false);setBrend('')}}>Adidas X (46)</ Button >}
            {nike&& < Button variant="outline-danger" onClick={()=>{setNike(false);setBrend('')}}>Nike X (38)</ Button >}
            {fila&& < Button variant="outline-danger" onClick={()=>{setFila(false);setBrend('')}}>Fila X (23)</ Button >}
            {puma&& < Button variant="outline-danger" onClick={()=>{setPuma(false);setBrend('')}}>Puma X (27)</ Button >}
            {rebook&& < Button variant="outline-danger" onClick={()=>{setRebook(false);setBrend('')}}>Rebook X (20) </ Button >}
            {skechers&& < Button variant="outline-danger" onClick={()=>{setSkechers(false);setBrend('')}}>Skechers X (9)</ Button >}
            {kappa&& < Button variant="outline-danger" onClick={()=>{setKappa(false);setBrend('')}}>Kapa X (8) </ Button >}
            {highlandCreek && < Button variant="outline-danger" onClick={()=>{setHighlandCreek(false);setBrend('')}}>Highland Creek X (3)  </ Button >}
            {easyStreet&& < Button variant="outline-danger" onClick={()=>{setEasyStreet(false);setBrend('')}}>Easy street X (5) </ Button >}
            {venice&& < Button variant="outline-danger" onClick={()=>{setVenice(false);setBrend('')}}>Venice X (11) </ Button >}
            
            
              <Pagination 
              setCurrentPages={setCurrentPage}
              totalPost={articles.length} 
               postPerPage={postPerPage}
               currentPage={currentPage}
              />
            <Row md={2} xs={1} lg={3} className='g-3'>
            {articles.map((item,index)=>{
                if(item.category===category){
                    if(item.brend === brend){
                        return(
                            <Col key={index}>
                               <ArticleCard {...item}/>
                         </Col> )
                    }else if(brend===''){
                        return(
                            <Col key={index}>
                               <ArticleCard {...item}/>
                             </Col>
                          ) 
                    }
                }else if(category===''){
                    if(item.id < 191){
                      if(item.brend === brend){
                        return(
                            <Col key={index}>
                               <ArticleCard {...item}/>
                         </Col> )
                      }else if(brend===''){
                        return(
                            <Col key={index}>
                               <ArticleCard {...item}/>
                         </Col> )
                      }
                    }
                }
             })}

                </Row>
            </Container>
        </Container>
       </div>
    </Container>
  )
}

export default Men