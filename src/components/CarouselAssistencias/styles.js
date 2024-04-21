import styled from 'styled-components';
import '../../assets/styles/global.css';

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  padding-left: 7px;
  
  @media screen and (min-width: 360px) {
    margin: 0px 0px 0px 0px; 
    padding-left: 0px;
  }
  @media screen and (min-width: 375px) {
    margin: 10px 0px 0px 0px; 
    padding-left: 0px;
  }
  @media screen and (min-width: 390px) {
    margin: 10px 0px -50px 0px; 
    padding-left: 7px;
  }
  @media screen and (min-width: 414px) {
    margin: -80px 0px -50px 0px; 
    padding-left: 7px;
  }
  @media screen and (min-width: 430px) {
    margin: -80px 0px -50px 0px; 
    padding-left: 15px;
  }
`;

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

export const LinkWrapper = styled(Link)``;

export const PosterSlide = styled.div`
  height: 600px;
  width: 600px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
 
  @media(max-width: 400px) {
    height: 570px;
    width: 450px;
  }
  @media(max-width: 360px) {
    height: 550px;
    width: 450px;
  }
`;
