import styled from 'styled-components';

export const Grid = styled.div` 
  display: flex;
  flex-direction: column;
  background-color: black;
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

  
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: white;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 48px
`;

export const Subtitle = styled.h2`
  color: white;
  font-family: Quicksand;
`;

export const Text = styled.h4`
  color: white;
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
  width: 10rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border-color: white;
  color: white;
  font-family: Quicksand;
  background-color: transparent;
  margin-top: 3rem;
`;
