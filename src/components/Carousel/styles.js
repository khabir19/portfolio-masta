import styled from 'styled-components';


export const Container = styled.div`
  height: 600px;
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
  background-image: url(${(props) => props.image});
  background-image: url(${(props) => props.image}), 
    linear-gradient(to right, #d7d2cc 0%, #304352 100%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  & > div {
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
  }
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
  background-color: #f5f5f5;
  
  &:hover {
    background-color: #ffffff;
    color: black;
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

export const PortImage = styled.div`
  background-image: url(${props => props.imageUrl});
  display: flex;
  height: 100vh;
  
  @media (max-width: 700px) {
    background-position: ${props => props.mobilePosition};
  }
`;