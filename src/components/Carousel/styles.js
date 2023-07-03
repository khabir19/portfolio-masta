import styled, { keyframes } from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 20px;
  overflow: hidden;
  position: relative;
  `;
  
  const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% * 3));
  }
  `;

export const CarouselWrapper = styled.div`
  display: flex;
  width: 200%;
  animation: ${scrollAnimation} 60s linear infinite;
`;

export const CarouselItem = styled.div`
  flex: 0 0 33.3333%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselImage = styled.img`
  max-width: 100%;
  height: 100%;
`;

