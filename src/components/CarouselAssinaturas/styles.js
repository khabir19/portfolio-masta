import styled from 'styled-components';
import '../../assets/styles/global.css';

import { Link } from "react-router-dom";

export const Container = styled.div``;

export const LinkWrapper = styled(Link)``;

export const PosterSlide = styled.div`
  height: 450px;
  width: 300px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  
  margin: 20vh auto;

  @media (max-width: 1024px) {
    margin: 25vh auto;
  }
  @media (max-width: 900px) {
    margin: 20vh auto;
  }
  @media (max-width: 768px) {
    margin: 20vh auto;
  }
  @media (max-width: 450px) {
    margin: 0vh auto;
  }
  @media (max-width: 430px) {
    margin: 18vh auto;
  }
  @media (max-width: 390px) {
    margin: 18vh auto;
  }
  @media (max-width: 375px) {
    margin: 8vh auto;
  }
  @media (max-width: 360px) {
    margin: 12vh auto;
  }
`;
