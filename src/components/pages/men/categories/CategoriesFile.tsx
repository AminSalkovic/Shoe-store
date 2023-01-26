import { Container,Row,Col} from 'react-bootstrap'
import ArticleCard from '../../../ArticleCard'
import articles from '../../../articles.json'

type CategoriesFileProps={
    category:string
}

const CategoriesFile = ({category}:CategoriesFileProps) => {

  return (
    <Container>
     <div style={{display:'flex'}}>

     <div className='div-part-1'>
                <h1>kategorija</h1>
              <div className='scroll-div-men'>
                  <ul>
                     <li>adidas</li>
                     <li>nike</li>
                  </ul>
                </div>
            <button onClick={()=>{}}>Svi proizvodi</button>
          </div>
    <Container>
            <Row md={2} xs={1} lg={4} className='g-3'>
              {articles.map((item,index)=>{
                if(item.category===category){    
                    return(
                        <Col key={index}>
                           <ArticleCard {...item}/>
                        </Col> 
                    )
                 }
                 })}
                </Row>
            </Container>
        </div>
      </Container>
  )
}

export default CategoriesFile