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
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  margin-top: 1rem;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div``;

export const NavbarLink = styled(Link)`
  color: snow;
  font-size: x-large;
  font-family: Quicksand, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover{
    color: black;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: snow;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  height: 100px;
  background: none;
  border: none;
  color: snow;
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
  text-align: center;
  background-color: transparent;
  height: 100%;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const Artist = styled.h1`
  color: white;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 40px
`;
