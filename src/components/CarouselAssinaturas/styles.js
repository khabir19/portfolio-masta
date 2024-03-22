import styled from 'styled-components';
import '../../assets/styles/global.css';

import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 100px;
  @media screen and (max-width: 1015px) {
      padding: 0px;
    }
`;

export const LinkWrapper = styled(Link)``;

export const PosterSlide = styled.div`
  height: 600px;
  width: 400px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 900px) {
      height: 400px;
      width: 200px;
    }
`;
