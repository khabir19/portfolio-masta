import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoB from '../../assets/misc/mandalaBlack.png';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr 0.5fr 1fr 1fr);
  grid-template-rows: repeat(1, 6vw);
  grid-template-areas:
    "a b c d e";
  grid-auto-flow: row;
  background-color: #c9c9c9;  

  @media (max-width: 900px) {
    grid-template-rows: repeat(1, 12vw);
    grid-template-columns: repeat(1, 1.5fr 0.5fr 1fr 0.5fr 1.5fr);
   }
`;

export const GridLogoWrapper = styled.div`
  grid-area: c; 

  background-image: url(${LogoB});
  background-size: contain;  
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  
`;

export const GridSocialsWrapper = styled.div`
  grid-area: e;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
`;

export const SocialsLink = styled(Link)`

`;

export const SocialsIcon = styled.img`
  width: 50px;
  padding: 25px;

  @media (max-width: 700px) {
    width: 21px;
    padding: 8px;
  }

  @media (min-width: 820px) {
    width: 40px;
    padding: 25px;
  }
`;

export const Disclaimer = styled.div`  
  grid-area: e;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 300;
  color: black;
  font-size: 15px;
  position: absolute;
  
  @media (max-width: 900px) {
    font-size: 4px;
  } 
  
  @media (min-width: 820px) {
    font-size: 10px;
  }
`;
  