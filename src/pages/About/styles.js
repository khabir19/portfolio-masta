import styled from 'styled-components';

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

export const AboutText = styled.h1`
    color: black;
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 30px;
    text-align: justify;
    margin: 20px;
  
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 5;

    @media (max-width: 700px) {
      font-size: 30px;
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 6;
    }
`;

export const AboutItem1 = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 4;
  }
`;

export const AboutItem2 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 8;
  }
`;

export const AboutItem3 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 8;
  }
`;

export const AboutItem4 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 8;
  }
`;

export const AboutItem5 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 8;
  }
`;

export const AboutItem6 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 5;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 8;
  }
`;

export const AboutItem7 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 8;
  }
`;