import { useState } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import { Row,Container,Col, Button } from 'react-bootstrap'
import CategoryItems from '../../CategoryItems'
import articles from '../../articles.json'
import ArticleCard from '../../ArticleCard'
import Pagination from '../../Pagination'
import categoryItems from './CategoryKids.json'
import './Kids.css'

const Kids = () => {
    const[currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(15);

    const  lastPostIndex=currentPage*postPerPage;
    const firstPostindex=lastPostIndex-postPerPage;
    const currentPost=articles.slice(firstPostindex,lastPostIndex)
     
    const[category,setCategory]=useState('')
    const kidsSnikers=()=>setCategory('Deca patike');
    const kidsDeepSnikers=()=>setCategory('Deca duboke patike')
    const kidsBoots=()=>setCategory('Deca cizme');
    const kidsRubberBoots=()=>setCategory('Deca gumene cizme');
    const kidsHomeSlippers=()=>setCategory('Deca kucne papuce')
    
    const[brend,setBrend]=useState('')

    const[adidas,setAdidas]=useState(false);
    const[nike,setNike]=useState(false);
    const[fila,setFila]=useState(false);
    const[puma,setPuma]=useState(false);
    const[skechers,setSkechers]=useState(false);
    const[helloKitty,setHelloKitty]=useState(false);
    const[miniMouse,setMiniMouse]=useState(false);
    const[elefanten,setElefanten]=useState(false)

    const adidasFunction=()=>{setBrend('Adidas');setAdidas(true)};
    const nikeFunction=()=>{setBrend('Nike');setNike(true)}
    const filaFunction=()=>{setBrend('Fila');setFila(true)}
    const pumaFunction=()=>{setBrend('Puma');setPuma(true)}
    const skechersFunction=()=>{setBrend('Skechers');setSkechers(true)}
    const helloKittyFunction=()=>{setBrend('Hello Kitty');setHelloKitty(true)}
    const miniMouseFunction=()=>{setBrend('Mini mouse');setMiniMouse(true)}
    const elefantenFunction=()=>{setBrend('Elefanten');setElefanten(true)}


  return (
    <Container>
      <div style={{display:'flex'}}>
        <div>
        <div className='div-part-1'>
                <p>Kategorija</p>
              <div className='scroll-div-men'>
                  <ul>
                       <li onClick={kidsSnikers}>Deca patike</li>
                       <li onClick={kidsDeepSnikers}>Deca duboke patike</li>
                       <li onClick={kidsBoots}>Deca cizme</li>
                       <li onClick={kidsRubberBoots}>Deca gumene čizme</li>
                       <li onClick={kidsHomeSlippers}>Deca kućne papuče</li>
                  </ul>
                </div>
          </div>
        <div className='div-part-1'>
                <p>Marka</p>
              <div className='scroll-div-men'>
                  <ul>
                    <li onClick={adidasFunction}>Adidas</li>
                    <li onClick={nikeFunction}>Nike</li>
                    <li onClick={filaFunction}>Fila</li>
                    <li onClick={pumaFunction}>Puma</li>
                    <li onClick={skechersFunction}>Skechers</li>
                    <li onClick={helloKittyFunction}>Hello Kitty</li>
                    <li onClick={miniMouseFunction}>Mini Mouse</li>
                    <li onClick={elefantenFunction}>Elefanten</li>
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
              <Button onClick={()=>{setCategory('');setBrend('')}}>Svi proizvodi</Button>
              {adidas&&< Button variant="outline-danger" onClick={()=>{setAdidas(false);setBrend('')}}>Adidas X ()</ Button >}
              {nike&&< Button variant="outline-danger" onClick={()=>{setNike(false);setBrend('')}}>Nike X ()</ Button >}
              {fila&&< Button variant="outline-danger" onClick={()=>{setFila(false);setBrend('')}}>Fila X ()</ Button >}
              {puma&&< Button variant="outline-danger" onClick={()=>{setPuma(false);setBrend('')}}>Puma X ()</ Button >}
              {skechers&&< Button variant="outline-danger" onClick={()=>{setSkechers(false);setBrend('')}}>Skechers X ()</ Button >}
              {helloKitty&&< Button variant="outline-danger" onClick={()=>{setHelloKitty(false);setBrend('')}}>Hello Kitty X ()</ Button >}
              {miniMouse&&< Button variant="outline-danger" onClick={()=>{setMiniMouse(false);setBrend('')}}>Mini mouse X ()</ Button >}
              {elefanten&&< Button variant="outline-danger" onClick={()=>{setElefanten(false);setBrend('')}}>Elefanten X ()</ Button >}
               
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
                    if(item.id > 191){
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
  );
}

export default Kids