import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;
  position: sticky;  
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  background-image: linear-gradient(90deg, rgba(245,245,245,0.8), transparent);
  

  @media (max-width: 700px) {
    flex: 30%
  }
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  background-image: linear-gradient(270deg, rgba(245,245,245,0.8), transparent);

  @media (max-width: 700px) {
    flex: 70%
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div``;

export const NavbarLink = styled(Link)`
  color: #000000;
  font-size: 30px;
  font-family: Quicksand;
  text-decoration: none;
  font-weight: bold;
  margin: 20px;

  &:hover{
    text-shadow: 0px 0px 15px #f5f5f5;
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
  font-family: Quicksand;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  margin: 25px 25px 0px 25px;
  background-image: linear-gradient(270deg, rgba(245,245,245,0.8), transparent);
  /* @media (max-width: 700px) {
    display: none;
  } */
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  height: 100px;
  background: none;
  border: none;
  color: #f5f5f5;
  font-size: 45px;
  cursor: pointer;
  position: relative;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25%;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const Artist = styled.h1`
  color: white;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 60px;
  margin: 1px 0px 0px 20px;
  white-space: nowrap;

  @media (max-width: 700px) {
    font-size: 35px;
    margin-right: -30px;
  }
`;
