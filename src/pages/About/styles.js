import styled from 'styled-components';
import imgBgAbout from "../../assets/portfolio/aliceSo/aliceSo.jpg";

export const WrapperNavAbout = styled.div`
  display: flex;  
  background-image: url(${imgBgAbout});
  height: 860px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 700px) {
    background-position-x: -1070px;
  }
  @media (min-width: 768px) {
    background-position-x: -860px;
  }
  @media (min-width: 1300px) {
    background-position-x: 0px;
  }
`;

export const WrapperArtist = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`




