import styled from 'styled-components';
import imgBgHome from '../../assets/portfolio/semSeuSangue/semSeuSangue.jpg';

export const WrapperNavHome = styled.div`
  display: flex;  

  background-image: url(${imgBgHome});
  height: 720px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 700px) {
    background-image: url(${imgBgHome});
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
