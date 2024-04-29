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

export const LinkWrapper = styled(Link)``;

export const PosterSlide = styled.div`
  height: 630px;
  width: auto;
  background-image: url(${(props) => props.image});
  background-size: 420px;
  background-repeat: no-repeat;

  @media(max-width: 1024px) {
      background-size: 420px;
  }
  @media(max-width: 900px) {
      background-size: 420px; 
  }
  @media(max-width: 820px) {
      background-size: 420px;
  }
  @media(max-width: 768px) {
      /* background-size: 540px; */
      height: 630px;
      width: 480px;
  }
  @media(max-width: 450px) {
      background-size: 420px;
  }
  @media(max-width: 430px) {
      background-size: 430px;
  }
  @media(max-width: 414px) {
      background-size: 414px;
  }
  @media(max-width: 375px) {
      background-size: 375px;
  }
`;
