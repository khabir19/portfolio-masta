import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { 
  CarouselItemImg, 
  CarouselCaptionFade,
  CarouselButton 
} from './styles';

import AliceSo from "../../assets/portfolio/aliceSo/aliceSo.jpg";
import Fogareu from "../../assets/portfolio/fogareu/fogareu.jpg";
import RioDesejo2 from "../../assets/portfolio/rioDesejo/rioDesejo2.jpg";

const CarouselFade = () => {
  return (
    <>
      <Carousel
        fade
        controls={true}
        pause={'hover' | false}
        indicators={true}
      >
        <Carousel.Item>
          <CarouselItemImg
            src={AliceSo}
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
            src={Fogareu}
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
            src={RioDesejo2}
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