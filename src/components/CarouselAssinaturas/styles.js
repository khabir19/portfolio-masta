import styled from 'styled-components';
import '../../assets/styles/global.css';

export const Container = styled.div`
  height: 500px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

export const MovieTitle = styled.h2`
  color: #ffffff;
  font-family: Inter;
  font-weight: 500;
  font-size: 70px;
  opacity: 80%;
  margin: 0.5rem 100rem 0.5rem 1rem;
  line-height: 0.9;
  text-shadow: 4px 4px 5px #000000;
`;

export const MovieDate = styled.h1`
  color: #ffffff;
  font-family: Inter;
  font-weight: 300;
  font-size: 38px;
  margin: 0.5px 0rem 0rem 1rem;  
  text-shadow: 4px 4px 5px #000000;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SliderButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  width: 100%;
  padding: 1rem 2rem 0rem 2rem;
  margin-bottom: 2rem;
  font-size: x-large;
  font-family: Quicksand;
  font-weight: bold;
  border: none;
  color: black;
 
  
  @media (max-width: 700px) {
    font-size: 20px;
    color: black;
    margin-bottom: -20px;

  }
`;

export const PortImage = styled.div`
  background-image: url(${props => props.imageUrl});
  display: flex;
  height: 100vh;
  
  @media (max-width: 700px) {
    background-position: ${props => props.mobilePosition};
  }
`;