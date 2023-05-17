import styled from 'styled-components';

export const Grid = styled.div` 
 
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  justify-content: ${(props) => props.align};
  flex-direction: column;
`;

export const Title = styled.h1`
  color: darkcyan;

  font-family: Quicksand;
`;