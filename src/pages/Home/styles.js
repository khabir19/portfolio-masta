import styled from 'styled-components';
import imgBgHome from '../../assets/portfolio/semSeuSangue/semSeuSangue.jpg';

export const WrapperNavHome = styled.div`
  display: flex;  

  background-image: url(${imgBgHome});
  height: 860px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 700px) {
    background-position-x: -700px;
  }
  @media (min-width: 768px) {
    background-position-x: -500px;
  }
  @media (min-width: 1300px) {
    background-position-x: 0px;
  }
`;

export const WrapperReverse = styled.div`
  display: flex;

  @media (max-width: 700px) {
      flex-direction: column-reverse;
    }
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  flex-direction: column;

`;
