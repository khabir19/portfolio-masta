import styled from 'styled-components';

export const Container = styled.div`
  height: 550px;
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
  font-family: Quicksand;
  font-weight: bold;
  font-size: 120px;
  opacity: 50%;
  margin: 2rem 80rem 0rem 3rem;
  line-height: 0.8;
  text-shadow: 4px 4px 5px #000000;
`;

export const MovieDate = styled.h1`
  color: #ffffff;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 38px;  
  opacity: 50%;
  margin: 10px 0rem 0rem 3rem;  
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