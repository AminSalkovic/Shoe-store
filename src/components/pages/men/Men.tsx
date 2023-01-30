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

    const[number,setNumber]=useState(0);
    const [number2,setNumber2]=useState(0)
    
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


 
    return (
      <Container>
      <div style={{display:'flex'}}>
        <div>
        <div className='div-part-1'>
                <p>Kategorija</p>
              <div className='scroll-div-men'>
                  <ul>
                      {categoryItems.map((el,index)=>{
                        return(
                          <li key={index} onClick={()=>{
                                setNumber(el.num)
                                setNumber2(el.amin)
                              }}>{el.category}({el.count})</li>
                          )
                          })}
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
            <Button variant="secondary" onClick={()=>{setNumber(0);setNumber2(0);setCurrentPage(1)}}>Svi proizvodi (191)</Button>
            {adidas&&< Button variant="outline-danger" onClick={()=>{setAdidas(false);setCategories('')}}>Adidas X (46)</ Button >}
            {nike&& < Button variant="outline-danger" onClick={()=>{setNike(false);setCategories('')}}>Nike X (38)</ Button >}
            {fila&& < Button variant="outline-danger" onClick={()=>{setFila(false);setCategories('')}}>Fila X (23)</ Button >}
            {puma&& < Button variant="outline-danger" onClick={()=>{setPuma(false);setCategories('')}}>Puma X (27)</ Button >}
            {rebook&& < Button variant="outline-danger" onClick={()=>{setRebook(false);setCategories('')}}>Rebook X (20) </ Button >}
            {skechers&& < Button variant="outline-danger" onClick={()=>{setSkechers(false);setCategories('')}}>Skechers X (9)</ Button >}
            {kappa&& < Button variant="outline-danger" onClick={()=>{setKappa(false);setCategories('')}}>Kapa X (8) </ Button >}
            {highlandCreek && < Button variant="outline-danger" onClick={()=>{setHighlandCreek(false);setCategories('')}}>Highland Creek X (3)  </ Button >}
            {easyStreet&& < Button variant="outline-danger" onClick={()=>{setEasyStreet(false);setCategories('')}}>Easy street X (5) </ Button >}
            {venice&& < Button variant="outline-danger" onClick={()=>{setVenice(false);setCategories('')}}>Venice X (11) </ Button >}
            
            
              <Pagination 
              setCurrentPages={setCurrentPage}
              totalPost={articles.length} 
               postPerPage={postPerPage}
               currentPage={currentPage}
              />
            <Row md={2} xs={1} lg={3} className='g-3'>
            {currentPost.map((item,index)=>{
                     if(item.id<number && item.id>number2){
                        if(categories==='Adidas' || categories==='Nike' || categories==='Fila' 
                          || categories==='Puma' || categories==='Rebook' || categories==='Kapa'
                          || categories ==='Bench' || categories ==='Sprit'
                        ){
                          if(item.brend===categories){
                              return(
                                <Col key={index}>
                                   <ArticleCard {...item}/>
                                </Col> 
                            );
                          }
                        }else{
                            return(
                              <Col key={index}>
                                 <ArticleCard {...item}/>
                              </Col> 
                          );
                        }
                     }
                     else if(number===0){
                      if(categories==='Adidas' || categories==='Nike' || categories==='Fila'
                         || categories==='Puma' || categories==='Rebook' || categories==='Kapa'
                         || categories ==='Bench' || categories ==='Sprit'
                      ){
                        if(item.brend===categories){
                            return(
                              <Col key={index}>
                                 <ArticleCard {...item}/>
                              </Col> 
                          );
                        }
                      }else{
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
        </Container>
       </div>
    </Container>
  )
}

export default Men