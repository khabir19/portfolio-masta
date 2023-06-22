import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`;

export const SocialMediaContainer = styled.div`
  width: 100%;
  height: 80px; 
  flex-direction: row;
  text-align: center;
`;

export const FooterLink = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: Quicksand, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover{
    color: black;
  }
`;

export const FooterLinkImage = styled(Link)`
  margin: 10px;
  width: 50%;
  
`;