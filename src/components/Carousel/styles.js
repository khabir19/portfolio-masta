import styled from "styled-components";

export const CarouselItemImg = styled.img`
  width: 100%;
`
export const CarouselCaptionFade = styled.div`
  font-size: 50px;
  font-family: Quicksand, Helvetica, sans-serif;
  display: flex;
  opacity: 80%;
  color: white; 
  text-align: justify;

  @media (max-width: 700px){
    font-size: 20px;  
  }
`

export const CarouselButton = styled.a`
  padding: 10px 60px;  

  border-style: solid;
  
  background-color: none;
  color: white;
  border: 2px solid white;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  opacity: 50%;
  font-family: Quicksand, Helvetica, sans-serif;
  
  &:hover {
    opacity: 100%;
    color: #FFF;
  }  
  
  @media (max-width: 700px) {
    padding: 5px 20px;    
    display: block;
    margin-bottom: -25px;
    opacity: 80%;
  }  
  
  `
