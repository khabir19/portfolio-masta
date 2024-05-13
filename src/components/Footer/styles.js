import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaImdb, FaInstagram, FaWhatsapp } from "react-icons/fa6";

import LogoB from '../../assets/misc/mandalaBlack.png';

export const GridWrapper = styled.div`
  
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr 1fr 2fr 1fr 1fr 1fr);
  grid-template-rows: repeat(1, 6vw);
  grid-template-areas:
    "a b c d e f g";
  grid-auto-flow: row;
  background-color: rgba(158, 121, 140, 0.8);
  position: fixed;
  width: 100vw;
  bottom: 0;
  @media (max-width: 1200px) {
    grid-template-rows: repeat(1, 10vw);
  }
`;

export const GridLogoWrapper = styled.div`
  grid-area: d; 

  background-image: url(${LogoB});
  background-size: contain;  
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;  
`;

export const GridImdbWrapper = styled.div`
  grid-area: e;

  display: flex;
  align-items: center;
  justify-content: center;  
`;
export const GridInstagramWrapper = styled.div`
  grid-area: f;

  display: flex;
  align-items: center;
  justify-content: center;  
`;
export const GridWhatsappWrapper = styled.div`
  grid-area: g;

  display: flex;
  align-items: center;
  justify-content: center;  
`;

export const SocialsLink = styled(Link)``;

export const ImdbIcon = styled(FaImdb)`   
  width: 100px;
  height: 50px;
  text-decoration: none;
  color: black;
  
  &:hover {
    color: #c9c9c9;
    cursor: pointer;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  @media (max-width: 700px) {
    width: 21px;
    
    &:hover {
    color: black;
    }
  }
  @media (max-width: 768px) {
    width: 15px;
  }
  
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 100px;
  height: 50px;
  text-decoration: none;
  color: black;
  
  &:hover {
    color: #c9c9c9;
    cursor: pointer;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  @media (max-width: 700px) {
    width: 21px;
    
    &:hover {
    color: black;
    }
  }
  @media (max-width: 768px) {
    width: 15px;
  }  
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  width: 100px;
  height: 50px;
  text-decoration: none;
  color: black;
  
  &:hover {
    color: #c9c9c9;
    cursor: pointer;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  @media (max-width: 700px) {
    width: 21px;
    
    &:hover {
    color: black;
    }
  }
  @media (max-width: 768px) {
    width: 15px;
  }
`;

export const Disclaimer = styled.div`  
  grid-area: a;
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
  