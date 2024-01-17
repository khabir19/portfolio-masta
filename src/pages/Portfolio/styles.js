import styled from 'styled-components';
import imgBgPortfolio from '../../assets/portfolio/assinaturas/rioDesejo/RD8.jpg';

export const WrapperNavPorfolio = styled.div`
  display: flex;

  background-image: url(${imgBgPortfolio});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position-y: bottom; */
  
  @media (max-width: 700px) {
    background-position-x: -950px;
  }
  @media (min-width: 768px) {
    background-position-x: -1200px;
  }
  @media (min-width: 1300px) {
    background-position-x: -250px;
  }
`;