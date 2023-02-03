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

  
    
    const fashionShoesFunction=()=>{setFashionShoes(true);setCategory('MODNE PATIKE')}
    const bootsFunction=()=>{setCategory('ČIZME&GLEŽNJAČE');setBoots(true)}
    const deepSnikersFunction=()=>setCategory('DUBOKE PATIKE');
    const elegantShoesFunction=()=>setCategory('ELEGANTNE CIPELE');
    const sportSnikersFunction=()=>setCategory('Sportske patike');
    const trekkingFunction=()=>setCategory('Trekking')
    const sandalsFunction=()=>setCategory('Sandale');
    const slippersFunction=()=>setCategory('Papuce')
    const kidsSnikersFunction=()=>setCategory('Deca patike');
    const kidsBootsFunction=()=>setCategory('Deca cizme');
    

  return (
    <Container>
     <div style={{display:'flex'}}>
     <div className='div-part-1'>
                <p style={{textAlign:'center'}}>Kategorija</p>
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
                      <li onClick={kidsSnikersFunction}>Deca Patike ({kidsSnikersCount}) </li>
                      <li onClick={kidsBootsFunction}>Deca Čizme ({kidsBootsCount}) </li>
                      <li>Deca gumene čizme ({kidsRubberBootsCount})</li>
                      <li>Deca duboke patike ({kidsDeepSnikersCount})</li>
                      <li>Deca kućne papuče ({kidsHomeSlippersCount})</li>
                  </ul>
                </div>
          </div>
    <Container>
             <h1 style={{fontWeight:'700',fontStretch:'ultra-expanded'}}>{brend.toUpperCase()}</h1>
            <Button variant='secondary' onClick={()=>{setCategory('');}}>Svi proizvodi ({count})</Button>
            {fashionShoes&&< Button variant="outline-danger" onClick={()=>{setFashionShoes(false);setCategory('')}}>Modne patike X ({fashionShoesCount})</ Button >}
            {boots&&< Button variant="outline-danger" onClick={()=>{setBoots(false);setCategory('')}}>Cizme i gleznjace X ({fashionShoesCount})</ Button >}
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