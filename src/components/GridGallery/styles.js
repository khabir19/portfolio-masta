import { styled, keyframes } from 'styled-components';
import { Link } from "react-router-dom";

const fadeIn = keyframes`
0%
{
    opacity: 0.5;
    transform: translateY(10px);
}
100%
{
    opacity: 1;
    transform: translateY(0px);
}
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  background-color: rgba(0, 0, 0, 1);
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 80vh;
  transition: .5s ease;
  object-fit: cover;

  &:hover{
    opacity: 0.5;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 20vh;
  }
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s ease;  
  
  &:hover > p {
    animation: ${fadeIn} 2s forwards;
    }
    overflow: hidden;

  @media (max-width: 1200px) {
  display: flex;
  align-items: flex-end;
  justify-content: left;
  transition: none;  
  
  &:hover > p {
    animation: none;
    }
    overflow: hidden;
  }
`;

export const MiddleText = styled.p`
  opacity: 0;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 200;
  position: absolute;
  color: rgba(255, 255, 255, 1);
  
  font-size: 45px;
  padding: 16px 32px;  
  
  @media (max-width: 900px) {
    opacity: 10;
    font-size: 10px;
    padding: 0px 0px; 
    font-weight: 300;
    background-color: rgba(0, 0, 0, 0.3); ; 
  }
`;

export const GalleryMagal = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
`;
export const GalleryRioDesejo = styled(Link)`  
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 3;
`;
export const GalleryFogareu = styled(Link)`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 6;
`;
export const GalleryTungstenio = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 6;
`;
export const GallerySemSeuSangue = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 10;
  grid-row-end: 10;
`;
export const GalleryDoresAmores = styled(Link)`
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 6;
`;
export const GalleryAliceSo = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 8;
  grid-row-end: 8;
`;
export const GallerySambandoBrasas = styled(Link)`
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 9;
  grid-row-end: 9;
`;
export const GallerySanto = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 5;
  grid-row-end: 5;
`;
export const GalleryPerdido = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 9;
  grid-row-end: 9;
`;
export const GalleryMusicopolis = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 11;
  grid-row-end: 11;
`;
export const GalleryItem12 = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
`;
export const GalleryItem13 = styled(Link)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
`;
export const GalleryItem14 = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
`;
export const GalleryItem15 = styled(Link)`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 8;
  grid-row-end: 9;
`;
export const GalleryItem16 = styled(Link)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 7;
`;
