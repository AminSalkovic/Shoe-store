import { useState } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import { Row,Container,Col, Button } from 'react-bootstrap'
import CategoryItems from '../../CategoryItems'
import articles from '../../articles.json'
import ArticleCard from '../../ArticleCard'
import Pagination from '../../Pagination'
import './Kids.css'

const Kids = () => {
    const[currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(15);

    const  lastPostIndex=currentPage*postPerPage;
    const firstPostindex=lastPostIndex-postPerPage;
    const currentPost=articles.slice(firstPostindex,lastPostIndex)
     
    const[category,setCategory]=useState('')
    const kidsSnikers=()=>setCategory('Deca patike');
    const kidsBoots=()=>setCategory('Deca cizme');
    
    const[brend,setBrend]=useState('')
    const [adidas,setAdidas]=useState(false);
    const[nike,setNike]=useState(false)
    const adidasFunction=()=>{setBrend('Adidas');setAdidas(!adidas)};
    const nikeFunction=()=>{setBrend('Nike');setNike(!nike)}

  return (
    <Container>
      <div style={{display:'flex'}}>
        <div>
        <div className='div-part-1'>
                <p>Kategorija</p>
              <div className='scroll-div-men'>
                  <ul>
                      <li onClick={kidsSnikers}>Deca Patike</li>
                      <li onClick={kidsBoots}>Deca Čizme</li>
                       <li>Deca gumene čizme</li>
                        <li>Deca duboke patike</li>
                       <li>Deca kućne papuče</li>
                  </ul>
                </div>
          </div>
        <div className='div-part-1'>
                <p>Marka</p>
              <div className='scroll-div-men'>
                  <ul>
                    <li onClick={adidasFunction}>Adidas</li>
                    <li onClick={nikeFunction}>Nike</li>
                    <li>Fila</li>
                    <li>Puma</li>
                    <li>Skechers</li>
                    <li>Hello Kitty</li>
                    <li>Victory</li>
                    <li>Mini Mouse</li>
                    <li>Bobbi shoes</li>
                    <li>Elefanten</li>
                  </ul>
                </div>
        </div>
    </div>
        <Container>
            <Container>
        
            </Container>
          <Container>
              <Button onClick={()=>{setCategory('');setBrend('')}}>Svi proizvodi</Button>
              {adidas&&< Button variant="outline-danger" onClick={()=>{setAdidas(false);setBrend('')}}>Adidas X ()</ Button >}
              {nike&&< Button variant="outline-danger" onClick={()=>{setNike(false);setBrend('')}}>Nike X ()</ Button >}
               
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