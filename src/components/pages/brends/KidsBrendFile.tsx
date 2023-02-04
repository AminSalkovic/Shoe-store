import {useState} from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import ArticleCard from '../../ArticleCard'
import articles from '../../articles.json'

type KidsBrendFileProps={
    brend:string,
    kidsSnikersCount:number,
    kidsDeepSnikersCount:number,
    kidsBootsCount:number,
    kidsRubberBootsCount:number,
    kidsHomeSlippersCount:number,
    count:number
}

const KidsBrendFile = ({brend,kidsSnikersCount,kidsBootsCount,kidsDeepSnikersCount,
  kidsHomeSlippersCount,kidsRubberBootsCount,count}:KidsBrendFileProps) => {
    
    const[category,setCategory]=useState('')
     
    const[kidsSnikers,setKidsSnikers]=useState(false);
    const[kidsBoots,setKidsBoots]=useState(false);
    const[kidsDeepSnikers,setKidsDeepSnikers]=useState(false);
    const[kidsHomeSlippers,setKidsHomeSlippers]=useState(false);
    const[kidsRubbrerBoots,setKidsRubberBoots]=useState(false)

    const buttonProducts=()=>{
      setCategory('');setKidsSnikers(false);setKidsBoots(false);
      setKidsDeepSnikers(false);setKidsHomeSlippers(false);setKidsRubberBoots(false);
     }

    const kidsSnikersFunction=()=>{setCategory('Deca patike');setKidsSnikers(true)}
    const kidsBootsFunction=()=>{setCategory('Deca cizme');setKidsBoots(true)}
    const kidsDeepSnikersFunction=()=>{setCategory('Deca duboke patike');setKidsDeepSnikers(true)}
    const kidsHomeSlippersFunction=()=>{setCategory('Deca kucne papuce');setKidsHomeSlippers(true)}
    const kidsRubberBootsFunction=()=>{setCategory('Deca gumene cizme');setKidsRubberBoots(true)}
    
  
  return (
    <Container>
     <div style={{display:'flex'}}>
     <div className='div-part-1'>
                <p style={{textAlign:'center'}}>Kategorija</p>
              <div className='scroll-div-men'>
                  <ul>
                      <li onClick={kidsSnikersFunction}>Deca patike ({kidsSnikersCount})</li>
                       <li onClick={kidsDeepSnikersFunction}>Deca duboke patike ({kidsDeepSnikersCount})</li>
                       <li onClick={kidsBootsFunction}>Deca cizme ({kidsBootsCount})</li>
                       <li onClick={kidsRubberBootsFunction}>Deca gumene čizme ({kidsRubberBootsCount})</li>
                       <li onClick={kidsHomeSlippersFunction}>Deca kućne papuče ({kidsHomeSlippersCount})</li>
                  </ul>
                </div>
          </div>
    <Container>
             <h1 style={{fontWeight:'700',fontStretch:'ultra-expanded'}}>{brend.toUpperCase()}</h1>
             <Button onClick={buttonProducts}>Svi proizvodi ({count})</Button>
             {kidsSnikers&&< Button variant="outline-danger" onClick={()=>{setKidsSnikers(false);setCategory('')}}>Deca patike X ({kidsSnikersCount})</ Button >}
            {kidsDeepSnikers&&< Button variant="outline-danger" onClick={()=>{setKidsDeepSnikers(false);setCategory('')}}>Deca duboke patike X ({kidsDeepSnikersCount})</ Button >}
            {kidsBoots&&< Button variant="outline-danger" onClick={()=>{setKidsBoots(false);setCategory('')}}>Deca cizme X ({kidsBootsCount})</ Button >}
            {kidsRubbrerBoots&&< Button variant="outline-danger" onClick={()=>{setKidsRubberBoots(false);setCategory('')}}>Deca  gumene cizme X ({kidsRubberBootsCount})</ Button >}
            {kidsHomeSlippers&&< Button variant="outline-danger" onClick={()=>{setKidsHomeSlippers(false);setCategory('')}}>Deca kucne papuce X ({kidsHomeSlippersCount})</ Button >}
            <Row md={2} xs={1} lg={3} className='g-3'>
              {articles.map((item,index)=>{
                if(item.brend===brend){    
                  if(item.category===category){
                    return(
                        <Col key={index}>
                           <ArticleCard {...item}/>
                        </Col>
                  )
                  }else if(category===''){
                    if(item.brend===brend){
                        return(
                            <Col key={index}>
                               <ArticleCard {...item}/>
                            </Col>
                      ) 
                    }
                  }
                }
                 })}
                </Row>
            </Container>
        </div>
      </Container>
  )
}

export default KidsBrendFile