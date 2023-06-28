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
  width: 50%;
  
  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    height: 150px;
  }
`;

export const PageBrake = styled.div`
  color: black;
  background-color: whitesmoke;
  font-family: Quicksand;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  height: 150px;
`;

export const Title = styled.h1`
  color: whitesmoke;
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
  padding: 1rem;
  border-radius: 0.5rem;
  border-color: whitesmoke;
  color: whitesmoke;
  font-family: Quicksand;
  background-color: transparent;
  
  @media (min-width: 700px) {
    font-size: 20px;
    margin-top: 3rem;
  }

`;
