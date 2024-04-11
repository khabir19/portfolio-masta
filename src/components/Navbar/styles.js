import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoW from '../../assets/misc/mandalaWhite.png';

export const NavbarContainer = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  justify-content: space-around;

  position: sticky!;
  top: 0;
  background-color: rgba(158, 121, 140, 0.8);
  
  background-image: url(${LogoW});
  background-size: 100px;  
  background-repeat: no-repeat;
  background-position-x: 50.1%, center;
  background-position-y: center;

  @media (max-width: 900px) {    
    background-position-x: 50.2%, center;
    background-size: 60px;  
    height: 60px;  
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Artist = styled(Link)`
  color: #ffffff;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 200;
  text-decoration: none;
  font-size: 50px;
  word-spacing: 70px;

  &:hover{
    color: #000000;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  @media (max-width: 820px) {
    font-size: 30px;
    word-spacing: 40px;

    &:hover{
      color: #ffffff;
      -moz-transition: none;
      -o-transition: none;
      -webkit-transition: none;
      transition: none;
    }
  }
`;

export const NavbarLink = styled(Link)`
  color: #ffffff;
  font-size: 30px;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 200;
  text-decoration: none;
  margin: 20px;

  &:hover{
    color: #000000;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: #000000;
  font-size: x-large;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 300;
  text-decoration: none;
  padding: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  background: none;
  border: none;
  color: #f5f5f5;
  font-size: 45px;
  position: relative;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 25%;
  justify-content: center;

  @media (min-width: 700px) {
    display: none;    
  }
`;