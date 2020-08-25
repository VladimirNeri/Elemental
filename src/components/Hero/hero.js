import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide01 from '../../data/images/1.jpg';
import slide02 from '../../data/images/9.jpg';
import slide03 from '../../data/images/7.jpg';

import { HeroStyl } from './hero.style';

const Hero = () => {
  return (
    <HeroStyl>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={slide01} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={slide02} alt='Third slide' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={slide03} alt='Third slide' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </HeroStyl>
  );
};

export default Hero;
