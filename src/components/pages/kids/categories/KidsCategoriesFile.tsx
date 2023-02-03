import {useState} from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import ArticleCard from '../../../ArticleCard'
import articles from '../../../articles.json'

type KidsCategoriesFileProps={
    category:string,
    heading:string
}

const KidsCategoriesFile = ({category,heading}:KidsCategoriesFileProps) => {
    

    const[brend,setBrend]=useState('')

    const[adidas,setAdidas]=useState(false);
    const[nike,setNike]=useState(false);
    const[fila,setFila]=useState(false);
    const[puma,setPuma]=useState(false);
    const[skechers,setSkechers]=useState(false);
    const[helloKitty,setHelloKitty]=useState(false);
    const[miniMouse,setMiniMouse]=useState(false)

    const adidasFunction=()=>{setBrend('Adidas');setAdidas(true)};
    const nikeFunction=()=>{setBrend('Nike');setNike(true)}
    const filaFunction=()=>{setBrend('Fila');setFila(true)}
    const pumaFunction=()=>{setBrend('Puma');setPuma(true)}
    const skechersFunction=()=>{setBrend('Skechers');setSkechers(true)}
    const helloKittyFunction=()=>{setBrend('Hello Kitty');setHelloKitty(true)}
    const miniMouseFunction=()=>{setBrend('Mini mouse');setMiniMouse(true)}
  
  return (
    <Container>
     <div style={{display:'flex'}}>

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
                    <li>Bobbi shoes</li>
                    <li>Elefanten</li>
                  </ul>
                </div>
          </div>
    <Container>
    <h1>{heading.toUpperCase()}</h1>
    <Button onClick={()=>{setBrend('')}}>Svi proizvodi</Button>
              {adidas&&< Button variant="outline-danger" onClick={()=>{setAdidas(false);setBrend('')}}>Adidas X ()</ Button >}
              {nike&&< Button variant="outline-danger" onClick={()=>{setNike(false);setBrend('')}}>Nike X ()</ Button >}
              {fila&&< Button variant="outline-danger" onClick={()=>{setFila(false);setBrend('')}}>Fila X ()</ Button >}
              {puma&&< Button variant="outline-danger" onClick={()=>{setPuma(false);setBrend('')}}>Puma X ()</ Button >}
              {skechers&&< Button variant="outline-danger" onClick={()=>{setSkechers(false);setBrend('')}}>Skechers X ()</ Button >}
              {helloKitty&&< Button variant="outline-danger" onClick={()=>{setHelloKitty(false);setBrend('')}}>Hello Kitty X ()</ Button >}
              {miniMouse&&< Button variant="outline-danger" onClick={()=>{setMiniMouse(false);setBrend('')}}>Mini mouse X ()</ Button >}

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