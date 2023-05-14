/* eslint-disable no-undef */
import React from "react";
import '../../App.css';
import '../../styles/global.css'
import styled from 'styled-components';
import Navbar from '../../Components/navbar';
import CarouselFade from "../../Components/carousel";

import backMandala from "../../assets/mandala.png";

export const Grid = styled.div` 
 
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  justify-content: ${(props) => props.align};
`;

export const Title = styled.h1`
  color: darkcyan;

  font-family: Quicksand;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <CarouselFade/>
      <Grid>
        <Row>
          <Col size="1">
             

          </Col>
        </Row>        
      </Grid>
    </>
  );
}

export default Home;
