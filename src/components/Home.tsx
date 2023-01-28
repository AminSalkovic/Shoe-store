import { Container,Row,Col} from "react-bootstrap"
import HomeCard from "./HomeCard"
import homeCards from './pages/men/categoryMen.json'
import homeBrendCards from './pages/brends/brend.json'
import HomeBrendCard from "./HomeBrendCard"
import ArticleCard from "./ArticleCard"
import articleCards from './articles.json'
import HomeKidsCard from "./HomeKidsCard"

const Home = () => {
  return (
    <>
      <Container>
         <div style={{border:'2px solid green'}}>
             <h1 style={{textAlign:'center',color:'green'}}>DECA</h1>
          </div>
          <h1 style={{textAlign:'center',marginTop:"50px"}}>VRHUNSKI BRENDOVI ZA DECU</h1>
              <Container style={{marginTop:'20px'}}>
              <Row md={2} xs={1} lg={4} className='g-3'>
                {homeBrendCards.map((item,index)=>{
                  if(item.id>15 && item.id<20){
                    return(
                      <Col key={index}>
                        <HomeKidsCard imgUrl={item.imgUrl}
                         category={item.name}
                         imgPath={item.imgPath}
                        />
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
      </Container>
      <Container>
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
      <Row md={2} xs={1} lg={6} className='g-3'>
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
      <Container style={{marginTop:'3..0px'}}>
          <Row md={2} xs={1} lg={5} className='g-3'>
                {articleCards.map((item,index)=>{
                  if(item.id>29 && item.id<35){
                    return(
                      <Col key={index}>
                        <ArticleCard {...item}/>
                      </Col>
                    )
                  }
                })}
            </Row>
      </Container>
    </>
  )
}

export default Home