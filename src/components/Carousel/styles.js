import styled from 'styled-components';

export const WrapperText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

export const SlideGrid = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(90deg, #000000 2%, transparent),
    url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
  }
/* display: flex;
  flex-direction: row;
  background-color: linear-gradient(90deg, black 20%, transparent);
  background-image: url(${props => props.imageUrl});
  height: 40vh;
  background-repeat: no-repeat; */
`;

export const MovieTitle = styled.h2`
  color: #ffffff;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 38px;
  margin-bottom: -1rem;
`;

export const MovieDate = styled.h1`
  color: #ffffff;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 28px;  
`;

export const SliderButton = styled.button`
  cursor: pointer;
  width: auto;
  margin-bottom: 4rem;
  padding: ${props => props.pad};
  font-size: x-large;
  font-family: Quicksand;
  font-weight: bold;
  border-radius: 0.5rem;
  border-color: black;
  color: black;
  background-color: ${props => props.bgcolor};

  &:hover {
    background-color: ${props => props.hovercolor};
    color: black;
    border-color: gray;
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
  /* display: flex; */
  height: 40vh;
  /* background-position: right; */
  background-repeat: no-repeat;
  
  @media (max-width: 700px) {
    background-position: ${props => props.mobilePosition};
  }
`;