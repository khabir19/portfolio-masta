import styled from 'styled-components';
import '../../assets/styles/global.css';

import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 100px 10px 100px 10px;  
  height: 60vh;
  width: 100vw;
  @media screen and (max-width: 1015px) {
      /* padding: 80px 10px 90px 10px;     */
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

  @media screen and (max-width: 900px) {
      /* height: 400px;
      width: 460px; */
    }
`;
