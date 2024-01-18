import styled from 'styled-components';
import imgBgAbout from "../../assets/portfolio/assinaturas/fogareu/FG8.jpg";
import clientPhoto from "../../assets/misc/masta.png";

export const WrapperNavAbout = styled.div`
  display: flex;  
  background-image: url(${imgBgAbout});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 700px) {
    /* background-position-x: -1070px; */
  }
  @media (min-width: 768px) {
    /* background-position-x: -860px; */
  }
  @media (min-width: 1300px) {
    background-position-x: -300px;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 16vw);
  grid-gap: 2px;
  margin: 2px 2px 0px 0px;

  background-color: whitesmoke;
`;

export const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AboutItem1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 6;
  }
`;
export const AboutItem2 = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 8;
  }
`;

export const AboutText = styled.h1`
  color: black;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 50px;
  text-align: justify;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;