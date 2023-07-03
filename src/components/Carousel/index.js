import React, { useRef, useEffect } from 'react';
import { CarouselContainer, CarouselWrapper, CarouselItem, CarouselImage } from './styles';

const Carousel = () => {
  const carouselRef = useRef(null);

  const images = [
    require("../../assets/portfolio/cartazes/aliceSoCartaz.jpg"),
    require("../../assets/portfolio/cartazes/doresAmoresCartaz.jpg"),
    require("../../assets/portfolio/cartazes/fogareuCartaz.jpg"),
    require("../../assets/portfolio/cartazes/perdidoCartaz2.jpg"),
    require("../../assets/portfolio/cartazes/rioDesejoCartaz.jpg"),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.style.animation = 'none';
        void carouselRef.current.offsetHeight; // Trigger reflow
        carouselRef.current.style.animation = 'scroll linear infinite';
      }
    }, 50000); // Adjust the interval value to control the scroll speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <CarouselContainer>
      <CarouselWrapper ref={carouselRef}>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <CarouselImage src={image} alt={`Image ${index}`} />
          </CarouselItem>
        ))}
        <CarouselItem>
          <CarouselImage src={images[0]} alt={`Image 0`} />
        </CarouselItem>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;

