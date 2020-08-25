import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import slide01 from '../../data/images/1.jpg'; 
import slide02 from '../../data/images/2.jpg';
import slide03 from '../../data/images/3.jpg'

const Hero = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className='d-block w-100'
        src={slide01}
        alt='First slide'
      />

    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className='d-block w-100'
        src={slide02}
        alt='Third slide'
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
        className='d-block w-100'
        src={slide03}
        alt='Third slide'
      />
    </Carousel.Item>
    
  </Carousel>
   
  );
};

export default Hero;
