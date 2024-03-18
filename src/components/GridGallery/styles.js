import styled from 'styled-components';
import { Link } from "react-router-dom";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 2px;
  /* margin: 2px 2px 2px 2px;   */
`;

export const GalleryImg = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: 100%;
  transition: .5s ease;
  backface-visibility: hidden;
  object-fit: cover;

  &:hover{
    opacity: 0.7;
  }
`;

export const Middle = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  
  &:hover{
    opacity: 1;
  }
  `;

export const MiddleText = styled.h3`
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
`

export const GalleryItem1 = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`;
export const GalleryItem2 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
`;
export const GalleryItem3 = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;
`;

export const GalleryItem4 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
`;
export const GalleryItem5 = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 4;
`;
export const GalleryItem6 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 5;
`;
export const GalleryItem7 = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
`;
export const GalleryItem8 = styled.div`
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 5;
`;
export const GalleryItem9 = styled.div`
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 4;
`;

export const GalleryItem10 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 7;
`;
export const GalleryItem11 = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 7;
  grid-row-end: 8;
`;
export const GalleryItem12 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
`;
export const GalleryItem13 = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
`;
export const GalleryItem14 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
`;
export const GalleryItem15 = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 8;
  grid-row-end: 9;
`;
export const GalleryItem16 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 7;
`;
