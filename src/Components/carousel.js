import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {CarouselContainer, CarouselItemImg} from '../styles/Carousel.style';

import aliceSo from "../assets/aliceSo.png";
import fogareu from "../assets/fogareu.png";
import rioDesejo2 from "../assets/rioDesejo2.png";
import carousel4 from "../assets/carousel4.JPG";

const CarouselFade = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <CarouselItemImg
          src={aliceSo}
          alt="Alice e Só"
        />
        <Carousel.Caption>
          <h3>Alice e Só</h3>
          <p>2020</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselItemImg          
          src={fogareu}
          alt="Fogaréu"
        />
        <Carousel.Caption>
          <h3>Fogaréu</h3>
          <p>2022</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselItemImg          
          src={rioDesejo2}
          alt="Rio dos Desejos"
        />
        <Carousel.Caption>
          <h3>Rio dos Desejos</h3>
          <p>2022</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;