import styled from 'styled-components';

export const Grid = styled.div` 
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
`;

export const Col = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  width: 80%;
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

  @media(max-width: 700px) {
    margin-top: -40px;
    font-size: x-large;
  }
`;

export const Text = styled.h2`
  color: black;
  font-family: Quicksand;

  @media(max-width: 700px) {
    font-size: large;
  }
`;

export const Subtitle = styled.h4`
  color: black;
  font-family: Quicksand;
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
  cursor: pointer;
  width: auto;
  margin: 2rem;
  padding: ${props => props.pad};
  font-size: x-large;
  font-family: Quicksand;
  font-weight: bold;
  border-radius: 0.5rem;
  border-color: black;
  color: black;
  background-color: ${props => props.bgcolor};

  &:hover {
    background-color: ${props => props.hovercolor};
    color: black;
    border-color: gray;
  }
  
  @media (max-width: 700px) {
    font-size: 20px;
    color: black;
    margin-bottom: -20px;

    &:hover {
    background-color: whitesmoke;
    border-color: black;
  }
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
