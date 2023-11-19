import styled from 'styled-components';
import imgBgPorfolio from '../../assets/portfolio/perdido/perdido3.jpg';

export const WrapperNavPorfolio = styled.div`
  display: flex;

  background-image: url(${imgBgPorfolio});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (max-width: 700px) {
    background-position-x: -650px;
  }
  @media (min-width: 768px) {
    background-position-x: -680px;
  }
  @media (min-width: 1300px) {
    background-position-x: -250px;
  }
`;