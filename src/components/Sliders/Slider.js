import React from 'react';
import slider1 from '../../Imagenes/slider1.jpg';
import slider2 from '../../Imagenes/slider2.jpg';
import slider3 from '../../Imagenes/slider3.jpg';
import Carousel from 'react-bootstrap/Carousel'

export const Slider = () => {
  return (
      <>
      <div className='slider-container'>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
      height="450px"
      
    />
    
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
      height="450px"
      
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
      height="450px"
      
      
    />
    

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
     </>
    
    
  )
}
