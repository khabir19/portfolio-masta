import styled from 'styled-components';
import '../../assets/styles/global.css';

import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 10vh 0px 10vh 0px;

  @media(max-width: 1024px) {
    margin: 23vh 0px 23vh 0px;
  }
  @media(max-width: 900px) {
    margin: 1vh 0px 1vh 0px;
  }
  @media(max-width: 820px) {
    margin: 21vh 0px 21vh 0px;
  }
  @media(max-width: 768px) {
    margin: 16vh 0px 16vh 0px;
  }
  @media(max-width: 450px) {
    margin: 11vh 0px 11vh 0px;
  }
  @media(max-width: 430px) {
    margin: 13vh 0px 13vh 0px;
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
`;
