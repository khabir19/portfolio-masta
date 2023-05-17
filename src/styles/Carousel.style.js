import styled from "styled-components";

export const CarouselItemImg = styled.img`
  width: 100%;
`
export const CarouselCaptionFade = styled.div`
  font-size: 50px;
  font-family: Quicksand, Helvetica, sans-serif;
  display: flex;
  opacity: 50%;
  color: white; 

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
  font-family: Quicksand, Helvetica, sans-serif;


  @media (max-width: 700px) {
    padding: 5px 20px;    
    display: block;
  }  
  
`
