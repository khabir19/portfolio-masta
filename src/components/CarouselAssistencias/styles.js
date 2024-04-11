import styled from 'styled-components';
import '../../assets/styles/global.css';

import { Link } from "react-router-dom";

export const Title = styled.h1`
  color: black;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 30px;
  display: flex;
  justify-content: center;

  @media(max-width: 700px) {
    font-size: 30px;
  }
`;

export const Container = styled.div`
 padding: 100px 10px 100px 10px;  
  height: 60vh;
  width: 100vw;
  background-color: whitesmoke;
  @media screen and (max-width: 1015px) {
    height: auto;
    width: 100vw;
  }
`;

export const LinkWrapper = styled(Link)``;

export const PosterSlide = styled.div`
  height: 600px;
  width: 600px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
`;
