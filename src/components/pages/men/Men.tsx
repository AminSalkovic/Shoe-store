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
    const[kapa,setKapa]=useState(false)
    const[bench,setBench]=useState(false)
    const[sprit,setSprit]=useState(false)

    
    const adidasFunction=()=>{setAdidas(true);setCategories('Adidas');}
    const nikeFunction=()=>{setNike(true);setCategories('Nike')}
    const filaFunction=()=>{setFila(true);setCategories('Fila')}
    const pumaFunction=()=>{setPuma(true);setCategories('Puma')}
    const rebookFunction=()=>{setRebook(true);setCategories('Rebook')}
    const kapaFunction=()=>{setKapa(true);setCategories('Kapa')}
    const benchFunction=()=>{setBench(true);setCategories('Bench')}
    const spritFunction=()=>{setSprit(true);setCategories('Sprit')}


    const cipele=()=>setCategories('cipele');
    const cizme=()=>setCategories('ČIZME&GLEŽNJAČE')
     

      
    
    

    return (
      <Container>
      <div style={{display:'flex'}}>
        <div>
        <div className='div-part-1'>
                <h1>kategorija</h1>
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
                <h1>MARKE</h1>
              <div className='scroll-div-men'>
                  <ul>
                     <li onClick={adidasFunction}>Adidas</li>
                     <li onClick={nikeFunction}>Nike</li>
                     <li onClick={filaFunction}>Fila</li>
                     <li onClick={pumaFunction}>Puma</li>
                     <li onClick={rebookFunction}>Rebook</li>
                     <li onClick={kapaFunction}>Kapa</li>
                     <li onClick={benchFunction}>Bench</li>
                     <li onClick={spritFunction}>Sprit</li>
                     <li onClick={cizme}>Venice</li>
                     <li onClick={cizme}>Cortina</li>
                     <li onClick={cizme}>Victory</li>
                     <li onClick={cizme}>Highland Creek</li>
                     <li onClick={cizme}>Croscs</li>
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
            <button onClick={()=>{setNumber(0);setNumber2(0);setCurrentPage(1)}}>Svi proizvodi</button>
            {adidas&& <button onClick={()=>{setAdidas(false);setCategories('')}}>Adidas &times;</button>}
            {nike&& <button onClick={()=>{setNike(false);setCategories('')}}>Nike &times;</button>}
            {fila&& <button onClick={()=>{setFila(false);setCategories('')}}>Fila &times;</button>}
            {puma&& <button onClick={()=>{setPuma(false);setCategories('')}}>Puma &times;</button>}
            {rebook&& <button onClick={()=>{setRebook(false);setCategories('')}}>Rebook &times;</button>}
            {kapa&& <button onClick={()=>{setKapa(false);setCategories('')}}>Kapa &times;</button>}
            {bench&& <button onClick={()=>{setBench(false);setCategories('')}}>Bench &times;</button>}
            {sprit&& <button onClick={()=>{setSprit(false);setCategories('')}}>Sprit &times;</button>}

            
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