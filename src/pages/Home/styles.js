import styled from 'styled-components';

import imgBgHome from "../../assets/portfolio/assinaturas/meuSangueFerve/MF1.jpg";

export const WrapperNavHome = styled.div`
  display: flex;  

  background-image: url(${imgBgHome});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;  
  
  @media (max-width: 700px) {
    background-position-x: -370px;
  }
  @media (min-width: 768px) {
    background-position-x: -620px;
  }
  @media (min-width: 1300px) {
    background-position-x: 0px;
  }
`;
