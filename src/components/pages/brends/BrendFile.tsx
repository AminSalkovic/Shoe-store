import { useState } from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import ArticleCard from '../../ArticleCard'
import articles from '../../articles.json'
import categoryItems from '../men/categoryMen.json'

type BrendFileProps={
    brend:string,
    count:number,
    fashionShoesCount:number,
    bootsCount:number,
    elegantShoesCount:number,
    sportSnikersCount:number,
    deepSnikersCount:number,
    trekkingCount:number,
    sandalsCount:number,
    slippersCount:number,
    kidsBootsCount:number,
    kidsSnikersCount:number,
    kidsRubberBootsCount:number,
    kidsDeepSnikersCount:number,
    kidsHomeSlippersCount:number
}

const BrendFile = ({brend,count,fashionShoesCount,bootsCount,deepSnikersCount,elegantShoesCount,
trekkingCount,sandalsCount,slippersCount,kidsBootsCount,kidsDeepSnikersCount,
kidsHomeSlippersCount,kidsRubberBootsCount,kidsSnikersCount,sportSnikersCount}:BrendFileProps) => {

  const[category,setCategory]=useState('')

   const[fashionShoes,setFashionShoes]=useState(false);
   const[boots,setBoots]=useState(false);
   const[deepSnikers,setDeepSnikers]=useState(false);
   const[elegantShoes,setElegantShoes]=useState(false);
   const[sportSnikers,setSportSnikers]=useState(false)
   const[trekking,setTrekking]=useState(false)
   const[sandals,setSandals]=useState(false);
   const[slippers,setSlippers]=useState(false);
   const[kidsSnikers,setKidsSnikers]=useState(false);
   const[kidsBoots,setKidsBoots]=useState(false);
   const[kidsDeepSnikers,setKidsDeepSnikers]=useState(false);
   const[kidsHomeSlippers,setKidsHomeSlippers]=useState(false);
   const[kidsRubbrerBoots,setKidsRubberBoots]=useState(false)

   const buttonProducts=()=>{
    setCategory('');setFashionShoes(false);setBoots(false);setDeepSnikers(false);
    setElegantShoes(false);setSportSnikers(false);setTrekking(false);
    setSandals(false);setSlippers(false);setKidsSnikers(false);setKidsBoots(false);
    setKidsDeepSnikers(false);setKidsHomeSlippers(false);setKidsRubberBoots(false);
   }
  
    
    const fashionShoesFunction=()=>{setFashionShoes(true);setCategory('MODNE PATIKE')}
    const bootsFunction=()=>{setCategory('ČIZME&GLEŽNJAČE');setBoots(true)}
    const deepSnikersFunction=()=>{setCategory('DUBOKE PATIKE');setDeepSnikers(true)}
    const elegantShoesFunction=()=>{setCategory('ELEGANTNE CIPELE');setElegantShoes(true)}
    const sportSnikersFunction=()=>{setCategory('Sportske patike');setSportSnikers(true)}
    const trekkingFunction=()=>{setCategory('Trekking');setTrekking(true)}
    const sandalsFunction=()=>{setCategory('Sandale');setSandals(true)}
    const slippersFunction=()=>{setCategory('Papuce');setSlippers(true)}
    const kidsSnikersFunction=()=>{setCategory('Deca patike');setKidsSnikers(true)}
    const kidsBootsFunction=()=>{setCategory('Deca cizme');setKidsBoots(true)}
    const kidsDeepSnikersFunction=()=>{setCategory('Deca duboke patike');setKidsDeepSnikers(true)}
    const kidsHomeSlippersFunction=()=>{setCategory('Deca kucne papuce');setKidsHomeSlippers(true)}
    const kidsRubberBootsFunction=()=>{setCategory('Deca gumene cizme');setKidsRubberBoots(true)}

    

  return (
    <Container>
     <div style={{display:'flex'}}>
      <div>

     <div className='div-part-1'>
                <p style={{textAlign:'center'}}>Muskarci</p>
              <div className='scroll-div-men'>
                  <ul>
                      <li onClick={fashionShoesFunction}>Modne Patike ({fashionShoesCount})</li>
                      <li onClick={bootsFunction}>Cizme ({bootsCount})</li>
                      <li onClick={elegantShoesFunction}>Elegantne Cipele ({elegantShoesCount})</li>
                      <li onClick={deepSnikersFunction}>Duboke Patike ({deepSnikersCount})</li>
                      <li onClick={sportSnikersFunction}>Sportske Patike ({sportSnikersCount})</li>
                      <li onClick={trekkingFunction}>Trekking ({trekkingCount}) </li>
                      <li onClick={sandalsFunction}>Sandale ({sandalsCount})</li>
                      <li onClick={slippersFunction}>Papuce ({slippersCount}) </li>
                  </ul>
                </div>
          </div>
                <div className='div-part-1'>
                <p style={{textAlign:'center'}}>Deca</p>
              <div className='scroll-div-men'>
                  <ul>
                      <li onClick={kidsSnikersFunction}>Deca Patike ({kidsSnikersCount}) </li>
                      <li onClick={kidsDeepSnikersFunction}>Deca duboke patike ({kidsDeepSnikersCount})</li>
                      <li onClick={kidsBootsFunction}>Deca Čizme ({kidsBootsCount}) </li>
                      <li onClick={kidsRubberBootsFunction}>Deca gumene čizme ({kidsRubberBootsCount})</li>
                      <li onClick={kidsHomeSlippersFunction}>Deca kućne papuče ({kidsHomeSlippersCount})</li>
                  </ul>
                </div>
          </div>
      </div>
    <Container>
             <h1 style={{fontWeight:'700',fontStretch:'ultra-expanded'}}>{brend.toUpperCase()}</h1>
            <Button variant='secondary' onClick={buttonProducts}>Svi proizvodi ({count})</Button>
            {fashionShoes&&< Button variant="outline-danger" onClick={()=>{setFashionShoes(false);setCategory('')}}>Modne patike X ({fashionShoesCount})</ Button >}
            {boots&&< Button variant="outline-danger" onClick={()=>{setBoots(false);setCategory('')}}>Cizme i gleznjace X ({fashionShoesCount})</ Button >}
            {elegantShoes&&< Button variant="outline-danger" onClick={()=>{setElegantShoes(false);setCategory('')}}>Elegantne cipele X ({elegantShoesCount})</ Button >}
            {deepSnikers&&< Button variant="outline-danger" onClick={()=>{setDeepSnikers(false);setCategory('')}}>Duboke patike X ({deepSnikersCount})</ Button >}
            {sportSnikers&&< Button variant="outline-danger" onClick={()=>{setSportSnikers(false);setCategory('')}}>Sportske patike X ({sportSnikersCount})</ Button >}
            {trekking&&< Button variant="outline-danger" onClick={()=>{setTrekking(false);setCategory('')}}>Trekking X ({trekkingCount})</ Button >}
            {sandals&&< Button variant="outline-danger" onClick={()=>{setSandals(false);setCategory('')}}>Sandale X ({sandalsCount})</ Button >}
            {slippers&&< Button variant="outline-danger" onClick={()=>{setSlippers(false);setCategory('')}}>Papuce X ({slippersCount})</ Button >}
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

export default BrendFile