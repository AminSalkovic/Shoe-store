import React from 'react'
import { Container ,Row} from 'react-bootstrap'
import BrendCard from './BrendCard'
import brend from './brend.json'
const Brends = () => {
  return (
    <Container>
            <Container>
                <h1>SPORT</h1>
             <Row md={2} xs={1} lg={4} className='g-3'>
                 {brend.map((item)=>{
                   if(item.id<7){
                    return(
                        <BrendCard {...item}/>
                    )
                   }
                 })}
             </Row>
            </Container>
            <Container>
                <h1>UNIVERSAL</h1>
             <Row md={2} xs={1} lg={4} className='g-3'>
                 {brend.map((item)=>{
                   if(item.id>7 && item.id<14){
                    return(
                        <BrendCard {...item}/>
                    )
                   }
                 })}
             </Row>
            </Container>
            <Container>
                <h1>UDOBNA OBUCA</h1>
             <Row md={2} xs={1} lg={4} className='g-3'>
                 {brend.map((item)=>{
                   if(item.id>14 && item.id<18){
                    return(
                        <BrendCard {...item}/>
                    )
                   }
                 })}
             </Row>
            </Container>
            <Container>
                <h1>DECA</h1>
             <Row md={2} xs={1} lg={4} className='g-3'>
                 {brend.map((item)=>{
                   if(item.id>18){
                    return(
                        <BrendCard {...item}/>
                    )
                   }
                 })}
             </Row>
            </Container>
    </Container>
  )
}

export default Brends