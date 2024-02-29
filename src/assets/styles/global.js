import styled from 'styled-components';
import '../styles/global.css';

export const PageBrake = styled.div`
  align-items: center;
  background-color: inherit;
  display: flex;
  font-family: Inter;
  font-size: 2rem;
  justify-content: center;
  text-align: center;
  height: 800px;
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