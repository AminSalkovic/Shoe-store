import { Container,Row,Col} from "react-bootstrap"
import HomeCard from "./HomeCard"
import homeCards from './pages/men/categoryMen.json'
import homeBrendCards from './pages/brends/brend.json'
import HomeBrendCard from "./HomeBrendCard"
import articleCards from './articles.json'
import HomeKidsCard from "./HomeKidsCard"
import HomeArticleCard from "./HomeArticleCard"
import ArticleCardInformation from "./ArticleCardInformation"

const Home = () => {
  return (
    <>
      <Container>
         <div style={{border:'2px solid green'}}>
             <h1 style={{textAlign:'center',color:'green'}}>DECA</h1>
          </div>
          <h1 style={{textAlign:'center',marginTop:"50px"}}>VRHUNSKI BRENDOVI ZA DECU</h1>
              <Container style={{marginTop:'20px'}}>
              <Row md={2} xs={2} lg={4} className='g-3'>
                {homeBrendCards.map((item,index)=>{
                  if(item.id>14 && item.id<20){
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
    </>
  )
}

export default Home