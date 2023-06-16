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
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;  
`;

export const NavbarLink = styled(Link)`
  color: snow;
  font-size: x-large;
  font-family: Quicksand, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover{
    color: bisque;
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

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
  position: relative;
  @media (max-width: 450px) {
    margin: 5px;
    margin-right: -20px;
  }
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
  align-items: stretch;
  background-color: black;
  margin: 0px;

  @media (min-width: 700px) {
    display: none;
  }
`;