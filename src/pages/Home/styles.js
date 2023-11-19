import styled from 'styled-components';

import imgBgHome from "../../assets/portfolio/assistencias/circoMistico/CM5.jpg";
export const WrapperNavHome = styled.div`
  display: flex;  

  background-image: url(${imgBgHome});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (max-width: 700px) {
    background-position-x: -700px;
  }
  @media (min-width: 768px) {
    background-position-x: -500px;
  }
  @media (min-width: 1300px) {
    background-position-x: 0px;
  }
`;

export const WrapperReverse = styled.div`
  display: flex;

  @media (max-width: 700px) {
      flex-direction: column-reverse;
    }
`;

export const WrapperText = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
`;
