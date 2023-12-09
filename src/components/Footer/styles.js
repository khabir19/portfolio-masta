import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: whitesmoke;
  height: 100%;
  padding: 1px;
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
  font-size: 30px;
  font-family: Quicksand, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const SocialsLink = styled(Link)`
  margin: 6px;
  display: flex;
  margin: 0px 15px 0px 15px;
`;

export const FooterArtist = styled.h1`
  color: black;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Disclaimer = styled.h3`
  text-align: center;
  color: black;
  opacity: 40%;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    margin-top: 25px;
    font-size: 15px;
  }
`;