import styled from 'styled-components';
import '../../assets/styles/global.css';

import { Link } from "react-router-dom";

export const Container = styled.div``;

export const LinkWrapper = styled(Link)``;

export const PosterSlide = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;

  height: 450px;
  width: 300px;
  margin: 10vh 0vh 0vh 5vh;
`;
