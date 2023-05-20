import styled from 'styled-components';


export const Grid = styled.div` 
 
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 700px) {
    flex-direction: column;
  }
  `;

const media = {
  xs: (styles) => `
  @media only screen and (max-width: 480px) {
    ${styles}
  }
  `,
}

export const ColText = styled.div`
  flex: ${(props) => props.size};
  margin: 30px;
  padding: 30px;
  text-align: justify;
  
  @media (max-width: 700px) {
    border: 1px solid #ddd; 
    margin: 10px 80px 0px 80px;
    padding-top: 1px;
    justify-content: flex-end;
  }
`;

export const ColImage = styled.img`
  flex: ${(props) => props.size};  
  border: 1px solid #ddd; 
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  @media (max-width: 700px) {
    width: 80%;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  color: darkcyan;

  font-family: Quicksand;
`;