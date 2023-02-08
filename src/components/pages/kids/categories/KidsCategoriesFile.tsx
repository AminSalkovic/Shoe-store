import {useState} from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import ArticleCard from '../../../ArticleCard'
import articles from '../../../articles.json'

type KidsCategoriesFileProps={
    category:string,
    heading:string,
    adidasCount:number,
    nikeCount:number,
    filaCount:number,
    pumaCount:number,
    rebookCount:number,
    skechersCount:number,
    helloKittyCount:number,
    miniMouseCount:number,
    elefantenCount:number,
    countButton:number,
}

const KidsCategoriesFile = ({category,heading,adidasCount,nikeCount,pumaCount,skechersCount,
filaCount,rebookCount,helloKittyCount,miniMouseCount,elefantenCount,countButton,}:KidsCategoriesFileProps) => {
    

    const[brend,setBrend]=useState('');
    
    const[adidas,setAdidas]=useState(false);
    const[nike,setNike]=useState(false);
    const[fila,setFila]=useState(false);
    const[puma,setPuma]=useState(false);
    const[rebook,setRebook]=useState(false);
    const[skechers,setSkechers]=useState(false);
    const[helloKitty,setHelloKitty]=useState(false);
    const[miniMouse,setMiniMouse]=useState(false);
    const[elefanten,setElefanten]=useState(false);


    const adidasFunction=()=>{setBrend('Adidas');setAdidas(true)};
    const nikeFunction=()=>{setBrend('Nike');setNike(true)}
    const filaFunction=()=>{setBrend('Fila');setFila(true)}
    const pumaFunction=()=>{setBrend('Puma');setPuma(true)}
    const rebookFunction=()=>{setBrend('Rebook');setRebook(true)}
    const skechersFunction=()=>{setBrend('Skechers');setSkechers(true)}
    const helloKittyFunction=()=>{setBrend('Hello Kitty');setHelloKitty(true)}
    const miniMouseFunction=()=>{setBrend('Mini mouse');setMiniMouse(true)}
    const elefantenFunction=()=>{setBrend('Elefanten');setElefanten(true)}
     
    const buttonFunction=()=>{
      setBrend('');setAdidas(false);setNike(false);
      setFila(false);setPuma(false);setRebook(false);
      setHelloKitty(false);setSkechers(false);
      setMiniMouse(false);setElefanten(false)
    }
    
  return (
    <Container>
     <div className='categoriesFile'>

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
    <Container>
    <h1>{heading.toUpperCase()}</h1>
    <Button variant='secondary' onClick={buttonFunction}>Svi proizvodi ({countButton})</Button>
              {adidas&&< Button variant="outline-danger" onClick={()=>{setAdidas(false);setBrend('')}}>Adidas X ({adidasCount})</ Button >}
              {nike&&< Button variant="outline-danger" onClick={()=>{setNike(false);setBrend('')}}>Nike X ({nikeCount})</ Button >}
              {fila&&< Button variant="outline-danger" onClick={()=>{setFila(false);setBrend('')}}>Fila X ({filaCount})</ Button >}
              {puma&&< Button variant="outline-danger" onClick={()=>{setPuma(false);setBrend('')}}>Puma X ({pumaCount})</ Button >}
              {skechers&&< Button variant="outline-danger" onClick={()=>{setSkechers(false);setBrend('')}}>Skechers X ({skechersCount})</ Button >}
              {rebook&&< Button variant="outline-danger" onClick={()=>{setRebook(false);setBrend('')}}>Rebook X ({rebookCount})</ Button >}
              {helloKitty&&< Button variant="outline-danger" onClick={()=>{setHelloKitty(false);setBrend('')}}>Hello Kitty X ({helloKittyCount})</ Button >}
              {miniMouse&&< Button variant="outline-danger" onClick={()=>{setMiniMouse(false);setBrend('')}}>Mini mouse X ({miniMouseCount})</ Button >}
              {elefanten&&< Button variant="outline-danger" onClick={()=>{setElefanten(false);setBrend('')}}>Elefanten X ({elefantenCount})</ Button >}

            <Row md={2} xs={1} lg={3} className='g-3'>
              {articles.map((item,index)=>{
                  if(item.category===category){
                    if(item.brend===brend){
                        return(
                            <Col key={index}>
                               <ArticleCard {...item}/>
                            </Col> 
                          )
                    }else if(brend===''){
                        return(
                            <Col key={index}>
                               <ArticleCard {...item}/>
                             </Col>
                          ) 
                    }
                  }
                 })}
                </Row>
            </Container>
        </div>
      </Container>
  )
}

export default KidsCategoriesFile