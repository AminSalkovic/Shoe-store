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
     
    const[category,setCategory]=useState('');
    const[header,setHeader]=useState('')

    const kidsSnikers=()=>{
    setCategory('Deca patike');
    setAdidasCount(5);setNikeCount(6);
    setPumaCount(5);setMiniMouseCount(3);setRebookCount(0);
    setHeader('Deca patike')
    }
    const kidsDeepSnikers=()=>{
      setCategory('Deca duboke patike');setAdidasCount(4);
      setNikeCount(3);setPumaCount(2);setFilaCount(0);setSkechersCount(0);
      setHelloKittyCount(0);setMiniMouseCount(0);setElefantenCount(0);setRebookCount(0);
      setHeader('Deca duboke patike')
    }
    const kidsBoots=()=>{
      setCategory('Deca cizme');
      setAdidasCount(4);
      setNikeCount(1);setPumaCount(2);setFilaCount(0);setSkechersCount(0);
      setHelloKittyCount(0);setMiniMouseCount(0);setElefantenCount(0);setRebookCount(1);
      setHeader('Deca Čizme')
    }
    const kidsRubberBoots=()=>{
      setCategory('Deca gumene cizme');
      setAdidasCount(0);
      setNikeCount(0);setPumaCount(0);setFilaCount(0);setSkechersCount(0);
      setHelloKittyCount(0);setMiniMouseCount(2);setElefantenCount(0);setRebookCount(0);
      setHeader('Deca gumene čizme')
    }
    const kidsHomeSlippers=()=>{
      setCategory('Deca kucne papuce');
      setAdidasCount(0);
      setNikeCount(0);setPumaCount(0);setFilaCount(0);setSkechersCount(0);
      setHelloKittyCount(0);setMiniMouseCount(2);setElefantenCount(0);setRebookCount(0);
      setHeader('Deca kućne papuče')
    }

    const buttonCount=()=>{
      setCategory('');setBrend('');
      setAdidasCount(13);setNikeCount(10);setPumaCount(9);setFilaCount(3);setSkechersCount(4);
      setHelloKittyCount(2);setMiniMouseCount(7);setElefantenCount(3);setRebookCount(1);
      setHeader('')
    }

    const[brend,setBrend]=useState('');

    const[adidasCount,setAdidasCount]=useState(13);
    const[nikeCount,setNikeCount]=useState(10);
    const[filaCount,setFilaCount]=useState(3);
    const[pumaCount,setPumaCount]=useState(9);
    const[rebookCount,setRebookCount]=useState(1)
    const[skechersCount,setSkechersCount]=useState(4);
    const[helloKittyCount,setHelloKittyCount]=useState(2);
    const[miniMouseCount,setMiniMouseCount]=useState(7);
    const[elefantenCount,setElefantenCount]=useState(3)
    


    const[adidas,setAdidas]=useState(false);
    const[nike,setNike]=useState(false);
    const[fila,setFila]=useState(false);
    const[puma,setPuma]=useState(false);
    const[rebook,setRebook]=useState(false);
    const[skechers,setSkechers]=useState(false);
    const[helloKitty,setHelloKitty]=useState(false);
    const[miniMouse,setMiniMouse]=useState(false);
    const[elefanten,setElefanten]=useState(false)

    const adidasFunction=()=>{setBrend('Adidas');setAdidas(true)};
    const nikeFunction=()=>{setBrend('Nike');setNike(true)}
    const filaFunction=()=>{setBrend('Fila');setFila(true)}
    const pumaFunction=()=>{setBrend('Puma');setPuma(true)}
    const rebookFunction=()=>{setBrend('Rebook');setRebook(true)}
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
                       <li onClick={kidsSnikers}>Deca patike (31)</li>
                       <li onClick={kidsDeepSnikers}>Deca duboke patike (9)</li>
                       <li onClick={kidsBoots}>Deca cizme (7)</li>
                       <li onClick={kidsRubberBoots}>Deca gumene čizme (2)</li>
                       <li onClick={kidsHomeSlippers}>Deca kućne papuče (2)</li>
                  </ul>
                </div>
          </div>
        <div className='div-part-1'>
                <p>Marka</p>
              <div className='scroll-div-men'>
                  <ul>
                    <li onClick={adidasFunction}>Adidas ({adidasCount})</li>
                    <li onClick={nikeFunction}>Nike ({nikeCount})</li>
                    <li onClick={filaFunction}>Fila ({filaCount})</li>
                    <li onClick={pumaFunction}>Puma ({pumaCount})</li>
                    <li onClick={rebookFunction}>Rebook ({rebookCount})</li>
                    <li onClick={skechersFunction}>Skechers ({skechersCount})</li>
                    <li onClick={helloKittyFunction}>Hello Kitty ({helloKittyCount})</li>
                    <li onClick={miniMouseFunction}>Mini Mouse ({miniMouseCount})</li>
                    <li onClick={elefantenFunction}>Elefanten ({elefantenCount})</li>
                  </ul>
                </div>
        </div>
    </div>
        <Container>
            <Container>
              <Row md={2} xs={1} lg={3} className='g-3'>
                {categoryItems.map((item)=>{
                  if(item.id<3){
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
              <Button onClick={buttonCount}>Svi proizvodi (51)</Button>
              {adidas&&< Button variant="outline-danger" onClick={()=>{setAdidas(false);setBrend('')}}>Adidas X ({adidasCount})</ Button >}
              {nike&&< Button variant="outline-danger" onClick={()=>{setNike(false);setBrend('')}}>Nike X ({nikeCount})</ Button >}
              {fila&&< Button variant="outline-danger" onClick={()=>{setFila(false);setBrend('')}}>Fila X ({filaCount})</ Button >}
              {puma&&< Button variant="outline-danger" onClick={()=>{setPuma(false);setBrend('')}}>Puma X ({pumaCount})</ Button >}
              {rebook&&< Button variant="outline-danger" onClick={()=>{setRebook(false);setBrend('')}}>Rebook X ({rebookCount})</ Button >}
              {skechers&&< Button variant="outline-danger" onClick={()=>{setSkechers(false);setBrend('')}}>Skechers X ({skechersCount})</ Button >}
              {helloKitty&&< Button variant="outline-danger" onClick={()=>{setHelloKitty(false);setBrend('')}}>Hello Kitty X ({helloKittyCount})</ Button >}
              {miniMouse&&< Button variant="outline-danger" onClick={()=>{setMiniMouse(false);setBrend('')}}>Mini mouse X ({miniMouseCount})</ Button >}
              {elefanten&&< Button variant="outline-danger" onClick={()=>{setElefanten(false);setBrend('')}}>Elefanten X ({elefantenCount})</ Button >}
               
              <Pagination 
              setCurrentPages={setCurrentPage}
              totalPost={articles.length} 
               postPerPage={postPerPage}
               currentPage={currentPage}
              />
              <h1>{header.toUpperCase()}</h1>
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