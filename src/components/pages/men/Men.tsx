import { useState } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import { Row,Container,Col, Button } from 'react-bootstrap'
import CategoryItems from '../../CategoryItems'
import categoryItems from './categoryMen.json'
import articles from '../../articles.json'
import ArticleCard from '../../ArticleCard'
import './Men.css'


const Men = () => {
         
    const[category,setCategory]=useState('')
    const[header,setHeader]=useState('');

    const[adidasCount,setAdidasCount]=useState(13);
    const[nikeCount,setNikeCount]=useState(10);
    const[filaCount,setFilaCount]=useState(3);
    const[pumaCount,setPumaCount]=useState(9);
    const[rebookCount,setRebookCount]=useState(1)
    const[skechersCount,setSkechersCount]=useState(4);
    const[kappaCount,setKappaCount]=useState(0);
    const[highlandCounut,setHighlandCount]=useState(3);
    const[easyStreetCount,setEasyStreetCount]=useState(2);
    const[veniceCount,setVeniceCount]=useState(2)
    
    const fashionShoesFunction=()=>{
      setCategory('MODNE PATIKE');setHeader('Modne patike');
      setAdidasCount(4);setNikeCount(1);setPumaCount(2);setFilaCount(3);
      setRebookCount(5);setSkechersCount(3);setKappaCount(2)
    }
    const bootsFunction=()=>{
      setCategory('ČIZME&GLEŽNJAČE');setHeader('Čizme i gležnjače');
      setAdidasCount(5);setNikeCount(8);setPumaCount(6);setFilaCount(6);
      setRebookCount(0);setSkechersCount(0);setKappaCount(6);setHighlandCount(3);
      setEasyStreetCount(0);setVeniceCount(0)
    }
    const deepSnikersFunction=()=>{
      setCategory('DUBOKE PATIKE');setHeader('Duboke patike');
      setAdidasCount(10);setNikeCount(9);setPumaCount(5);setFilaCount(2);
      setRebookCount(4);setSkechersCount(0);setKappaCount(6);setHighlandCount(0);
      setEasyStreetCount(0);setVeniceCount(0)
    };
    const elegantShoesFunction=()=>{
      setCategory('ELEGANTNE CIPELE');setHeader('Elegantne cipele');
      setAdidasCount(0);setNikeCount(0);setPumaCount(0);setFilaCount(0);
      setRebookCount(0);setSkechersCount(0);setKappaCount(0);setHighlandCount(0);
      setEasyStreetCount(5);setVeniceCount(11)
  };
    const sportSnikersFunction=()=>{
      setCategory('Sportske patike');setHeader('Sportske patike');
      setAdidasCount(14);setNikeCount(13);setPumaCount(12);setFilaCount(7);
      setRebookCount(9);setSkechersCount(9);setKappaCount(0);setHighlandCount(0);
      setEasyStreetCount(0);setVeniceCount(0)
    };
    const trekkingFunction=()=>{
      setCategory('Trekking');setHeader('Trekking');
      setAdidasCount(6);setNikeCount(0);setPumaCount(0);setFilaCount(0);
      setRebookCount(0);setSkechersCount(0);setKappaCount(0);setHighlandCount(0);
      setEasyStreetCount(0);setVeniceCount(0)
    }
    const sandalsFunction=()=>{
      setCategory('Sandale');setHeader('Sandale');
      setAdidasCount(3);setNikeCount(4);setPumaCount(0);setFilaCount(0);
      setRebookCount(0);setSkechersCount(0);setKappaCount(0);setHighlandCount(0);
      setEasyStreetCount(0);setVeniceCount(0)
    };
    const slippersFunction=()=>{
      setCategory('Papuce');setHeader('Papuče');
      setAdidasCount(4);setNikeCount(4);setPumaCount(3);setFilaCount(5);
      setRebookCount(2);setSkechersCount(0);setKappaCount(0);setHighlandCount(0);
      setEasyStreetCount(0);setVeniceCount(0)
  }
    
    
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
    
    const buttonFunction=()=>{
      setCategory('');setBrend('');setHeader('');setAdidas(false);
      setNike(false);setFila(false);setPuma(false);setRebook(false);
      setSkechers(false);setKappa(false);setHighlandCreek(false);
      setEasyStreet(false);setVenice(false)
    }

 
    return (
      <Container>
      <div className='menDiv'>
        <div>
        <div className='div-part-1'>
                <p>Kategorija</p>
              <div className='scroll-div-men'>
                  <ul>
                      <li onClick={fashionShoesFunction}>Modne Patike (20)</li>
                      <li onClick={bootsFunction}>Cizme (34)</li>
                      <li onClick={elegantShoesFunction}>Elegantne Cipele (16)</li>
                      <li onClick={deepSnikersFunction}>Duboke Patike (30)</li>
                      <li onClick={sportSnikersFunction}>Sportske Patike (61)</li>
                      <li onClick={trekkingFunction}>Trekking (6) </li>
                      <li onClick={sandalsFunction}>Sandale (7)</li>
                      <li onClick={slippersFunction}>Papuce (18)</li>
                  </ul>
                </div>
          </div>
        <div className='div-part-1'>
                <p>Marke</p>
              <div className='scroll-div-men'>
                  <ul>
                    <li onClick={adidasFunction}>Adidas ({adidasCount})</li>
                     <li onClick={nikeFunction}>Nike ({nikeCount})</li>
                     <li onClick={pumaFunction}>Puma ({pumaCount})</li>
                     <li onClick={filaFunction}>Fila ({filaCount}) </li>
                     <li onClick={rebookFunction}>Rebook ({rebookCount}) </li>
                     <li onClick={skechersFunction}>Skechers ({skechersCount})</li>
                     <li onClick={kappaFunction}>Kappa ({kappaCount})</li>
                     <li onClick={highlandCreekFunction}>Highland Creek ({highlandCounut})</li>
                     <li onClick={easyStreetFunction}>Easy street ({easyStreetCount})</li>
                     <li onClick={veniceFunction}>Venice ({veniceCount})</li>
                  </ul>
                </div>
        </div>
    </div>
        <Container>
            <Container>
            <Row md={3} xs={1} lg={3} className='g-3'>
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
            <Button variant="secondary" onClick={buttonFunction}>Svi proizvodi (191)</Button> 
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