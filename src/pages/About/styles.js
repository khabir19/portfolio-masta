import styled from 'styled-components';
import imgBgAbout from "../../assets/portfolio/aliceSo/aliceSo.jpg";
import clientPhoto from "../../assets/misc/masta.png";

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
export const FadedCircle = styled.div`
  height: 520px;
  width: 500px;
  background: url(${clientPhoto});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 
    inset -5px -5px 100px white, 
    inset 0 0 90px white, 
    inset 0 0 80px white, 
    inset 0 0 70px white, 
    inset 0 0 60px white, 
    inset 0 0 50px white, 
    inset 0 0 40px white, 
    inset 0 0 30px white, 
    inset 0 0 20px white, 
    inset 0 0 10px red; 
`;



