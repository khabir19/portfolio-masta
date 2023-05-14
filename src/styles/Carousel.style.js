import styled from "styled-components";

export const CarouselContainer = styled.div`
  margin: auto;
  max-width: 800px;
  height: 450px;
  box-shadow: 0 1em 5em black;


`
export const CarouselItemImg = styled.img`
  width: 100%;
  src: ${(props) => props.sourceImg};


`