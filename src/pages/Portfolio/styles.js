import styled from 'styled-components';
import imgBgPorfolio from '../../assets/portfolio/doresAmores/doresAmores2.jpg';

export const WrapperNavPorfolio = styled.div`
  display: flex;  

  background-image: url(${imgBgPorfolio});
  height: 720px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 700px) {
    background-image: url(${imgBgPorfolio});
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
