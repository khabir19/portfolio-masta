import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { 
  CarouselItemImg, 
  CarouselCaptionFade,
  CarouselButton 
} from '../styles/Carousel.style';

import aliceSo from "../assets/aliceSo.png";
import fogareu from "../assets/fogareu.png";
import rioDesejo2 from "../assets/rioDesejo2.png";
import carousel4 from "../assets/carousel4.JPG";

const CarouselFade = () => {
  return (
    <>
      <Carousel
        fade
        controls={false}
        pause={'hover' | false}
        indicators={false}
      >
        <Carousel.Item>
          <CarouselItemImg
            src={aliceSo}
            alt="Alice e Só"
          />
          <Carousel.Caption>
            <CarouselCaptionFade>
              Masta Ariane é uma figurinista do Rio de Janeiro.
            </CarouselCaptionFade>
            <CarouselButton href='/portfolio'> Meu Trabalho</CarouselButton>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImg
            src={fogareu}
            alt="Fogaréu"
          />
          <Carousel.Caption>
            <CarouselCaptionFade>
              Masta Ariane é uma figurinista do Rio de Janeiro.
            </CarouselCaptionFade>
            <CarouselButton href='/portfolio'> Meu Trabalho</CarouselButton>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImg
            src={rioDesejo2}
            alt="Rio dos Desejos"
          />
          <Carousel.Caption>
            <CarouselCaptionFade>
              Masta Ariane é uma figurinista do Rio de Janeiro.
            </CarouselCaptionFade>
            <CarouselButton href='/portfolio'> Meu Trabalho</CarouselButton>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselFade;