import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: whitesmoke;  
`;

export const LinkContainer = styled.div`  
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const FooterLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 25px;
  font-family: Quicksand, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const SocialsLink = styled(Link)`
  margin: 10px;
  display: flex;
`;

export const FooterArtist = styled.h1`
  color: black;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
`;

export const Disclaimer = styled.h3`
  text-align: center;
  color: black;
  opacity: 40%;

  @media (max-width: 700px) {
    margin-top: 25px;
    font-size: 15px;
  }
`;