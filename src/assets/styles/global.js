import styled from 'styled-components';
import clientPhoto from "../../assets/misc/masta.png";

export const Grid = styled.div` 
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: row;
  
  @media (max-width: 700px) {
    flex-direction: row;
  }
`;

export const Col = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  background-color: whitesmoke;
  
  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    height: 150px;
  }
`;

export const PageBrake = styled.div`
  align-items: center;
  background-color: inherit;
  display: flex;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  height: auto;
`;

export const Title = styled.h1`
  color: black;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
`;

export const Subtitle = styled.h2`
  color: whitesmoke;
  font-family: Quicksand;
`;

export const Text = styled.h4`
  color: whitesmoke;
  font-family: Quicksand;
  font-size: 1.3rem;
`;

export const RowCol = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const GlobalButton = styled.button`
  width: auto;
  padding: 2rem;
  border-radius: 0.5rem;
  border-color: black;
  color: black;
  font-size: x-large;
  font-family: Quicksand;
  font-weight: bold;
  background-color: transparent;
  margin: 2rem;
  
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const Parallax = styled.div`
  background-image: url(${props => props.imageUrl});
  background-attachment: fixed;
  background-position: ${props => props.position};
  background-size: ${props => props.size};
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    background-position: ${props => props.mobilePosition};
  }

`;
