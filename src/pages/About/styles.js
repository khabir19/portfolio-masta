import styled from 'styled-components';
import imgBgAbout from "../../assets/misc/masta08.jpg";

export const WrapperNavAbout = styled.div`
  display: flex;  
  background-image: url(${imgBgAbout});
  height: 720px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 700px) {
    background-image: url(${imgBgAbout});
  }
`;


