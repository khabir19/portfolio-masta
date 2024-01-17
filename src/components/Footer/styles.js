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
`;

export const FooterLink = styled(Link)`
  color: black;
  font-size: 30px;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 200;
  text-decoration: none;
  margin: 0px 10px;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const SocialsLink = styled(Link)`
  display: flex;
  margin: 5px 15px;
`;

export const FooterArtist = styled.h1`
  color: black;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 50px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const Disclaimer = styled.h3`  
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 100;
  text-align: center;
  color: black;
  font-size: 20px;
  margin-top: 10px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;