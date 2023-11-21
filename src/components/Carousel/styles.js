import styled from 'styled-components';


export const Container = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-image: url(${(props) => props.image}), radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 50%, rgba(160,6,6,1) 10% );
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
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
  font-size: 38px;
  margin-bottom: -1rem;
`;

export const MovieDate = styled.h1`
  color: #ffffff;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 28px;  
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SliderButton = styled.button`
  cursor: pointer;
  width: auto;
  margin-bottom: 4rem;
  padding: 1rem 2rem 1rem 2rem;
  font-size: x-large;
  font-family: Quicksand;
  font-weight: bold;
  border-radius: 0.5rem;
  border-color: black;
  color: black;
  background-color: #f5f5f5;
  

  &:hover {
    background-color: #ffffff;
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