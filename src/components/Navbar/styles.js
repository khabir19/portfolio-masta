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

  @media (max-width: 700px) {
    flex: 30%
  }
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;

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
  color: whitesmoke;
  font-size: x-large;
  font-family: Quicksand;
  text-decoration: none;
  font-weight: bold;
  margin: 20px;
  padding: -20px;

  &:hover{
    color: black;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: whitesmoke;
  font-size: x-large;
  font-family: Quicksand;
  text-decoration: none;
  text-align: left;
  font-weight: bold;
  margin: 25px 25px 0px 25px;
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  height: 100px;
  background: none;
  border: none;
  color: whitesmoke;
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
  font-size: 40px;
  margin-top: 20px;
  white-space: nowrap;

  @media (max-width: 700px) {
    font-size: 35px;
    margin-right: -30px;
  }
`;
