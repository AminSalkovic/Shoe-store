import { Container,Row,Col} from "react-bootstrap"
import HomeCard from "./HomeCard"
import homeCards from './pages/men/categoryMen.json'
import homeKidsCards from './pages/kids/CategoryKids.json'
import homeBrendCards from './pages/brends/brend.json'
import HomeBrendCard from "./HomeBrendCard"
import articleCards from './articles.json'
import HomeArticleCard from "./HomeArticleCard"
import './Home.css'


const Home = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Container  className='picturesDiv'>
          <div style={{display:'flex'}}>
            <div className="picture1" style={{width:'50%'}}>
            <img style={{width:'100%',height:'500px',objectFit:'cover'}} 
               src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"  />
            </div>
            <div className="picture2" style={{width:'50%'}}>
            <img style={{width:'100%',height:'500px',objectFit:'cover'}} 
              src="https://images.unsplash.com/photo-1608230164697-c791326d284c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
            </div>
          </div>
      </Container>
      <Container>
         <div style={{border:'2px solid gray',marginTop:'50px'}}>
             <h1 style={{textAlign:'center',color:'gray'}}>DECA</h1>
          </div>
          <Container style={{marginTop:'50px'}}>
             <img style={{width:'100%',height:'500px',objectFit:'cover'}} src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"  />
          </Container>
          <h1 style={{textAlign:'center',marginTop:"50px"}}>VRHUNSKI BRENDOVI ZA DECU</h1>
              <Container style={{marginTop:'50px',}}>
              <Row md={3} xs={2} lg={3} className='g-3'>
             {homeBrendCards.map((item,index)=>{
               if(item.id>9 && item.id<13){
                return(
                  <Col key={index}>
                    <HomeBrendCard {...item}/>
                  </Col>
                )
               }
             })}
              </Row>
          </Container>
          <Container className="kidsContainer2">
            <Row md={2} xs={1} lg={4} className='g-3'>
                  {homeKidsCards.map((item,index)=>{
                    if(item.id<4){
                      return(
                        <Col key={index}>
                          <HomeCard {...item}/>
                        </Col>
                      )
                    }
                  })}
              </Row>
      </Container>
      </Container>
      <Container style={{marginTop:'80px'}}>
          <div style={{border:'2px solid gray',marginTop:'30px'}}>
             <h1 style={{textAlign:'center',color:'gray'}}>MUSKARCI</h1>
          </div>
          <Container style={{marginTop:'50px'}}>
             <img style={{width:'100%',height:'500px',objectFit:'cover'}} 
             src="https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
          </Container>
      </Container>
      <Container style={{marginTop:'40px'}}>
      <Row md={3} xs={2} lg={6} className='g-3'>
             {homeBrendCards.map((item,index)=>{
               if(item.id<6){
                return(
                  <Col key={index}>
                    <HomeBrendCard {...item}/>
                  </Col>
                )
               }
             })}
        </Row>
      </Container>
      <Container style={{marginTop:'50px'}} >
      <Row md={2} xs={1} lg={4} className='g-3'>
             {homeCards.map((item,index)=>{
               if(item.id>2 && item.id<7){
                return(
                  <Col key={index}>
                    <HomeCard {...item}/>
                  </Col>
                )
               }
             })}
        </Row>
      </Container>
      <Container style={{marginTop:'50px'}}>
          <Row md={2} xs={1} lg={5} className='g-3'>
                {articleCards.map((item,index)=>{
                  if(item.id>111 && item.id<118){
                    return(
                      <Col key={index}>
                        <HomeArticleCard {...item}/>
                      </Col>
                    )
                  }
                })}
            </Row>
      </Container>
    </div>
  )
}

export default Home