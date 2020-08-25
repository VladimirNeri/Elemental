import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import slide01 from '../../data/images/1.jpg'; 
import slide02 from '../../data/images/2.jpg';
import slide03 from '../../data/images/11.jpg'

import { HeroStyl } from './hero.style'; 

const Hero = () => {
  return (
    <HeroStyl>
    <Carousel bsPrefix='carousel'>
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
  </HeroStyl>
  );
};

export default Hero;
