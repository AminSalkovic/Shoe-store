import React from 'react'
import carouselData from './carousel.json'
import { Carousel } from 'react-bootstrap'

const CarouselImage = () => {
  return (
      <Carousel variant='dark'>
          {carouselData.map((item)=>{
            return (
              <Carousel.Item key={item.id} interval={2000}>
                        <img style={{width:'100%',height:'520px',objectFit:'contain'}}
                        src={item.imgUrl}/>
              </Carousel.Item>
            )
          })}
        </Carousel>
  )
}

export default CarouselImage;