import { Container,Row,Col} from "react-bootstrap"
import HomeCard from "./HomeCard"
import homeCards from './pages/men/categoryMen.json'
import homeKidsCards from './pages/kids/CategoryKids.json'
import homeBrendCards from './pages/brends/brend.json'
import HomeBrendCard from "./HomeBrendCard"
import articleCards from './articles.json'
import HomeKidsCard from "./HomeKidsCard"
import HomeArticleCard from "./HomeArticleCard"
import ArticleCardInformation from "./ArticleCardInformation"

const Home = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Container>
         <div style={{border:'2px solid green'}}>
             <h1 style={{textAlign:'center',color:'green'}}>DECA</h1>
          </div>
          <Container>
             <img style={{width:'100%',height:'500px',objectFit:'cover'}} src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"  />
          </Container>
          <h1 style={{textAlign:'center',marginTop:"20px"}}>VRHUNSKI BRENDOVI ZA DECU</h1>
              <Container style={{marginTop:'20px',}}>
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
          <Container style={{marginTop:'20px'}}>
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
          <div style={{border:'2px solid green'}}>
             <h1 style={{textAlign:'center',color:'green'}}>MUSKARCI</h1>
          </div>
          <Container>
             <img style={{width:'100%',height:'500px',objectFit:'cover'}} 
             src="https://images.unsplash.com/photo-1586882829491-b81178aa622e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  />
          </Container>
      </Container>
      <Container >
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

      <Container style={{marginTop:'20px'}}>
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
      <Container style={{marginTop:'30px'}}>
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