/* eslint-disable no-undef */
import React from "react";
import '../../App.css';
import { Grid, Row, Col } from '../../styles/global.js'
import Navbar from '../../Components/navbar';
import CarouselFade from "../../Components/carousel";

import backMandala from "../../assets/mandala.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <CarouselFade />
      <Grid>
        <Row>
          {/* <Col size="1">
            <img alt="1" src={backMandala} />
          </Col>
          <Col size="1">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Col> */}
        </Row>
      </Grid>
    </>
  );
}

export default Home;
