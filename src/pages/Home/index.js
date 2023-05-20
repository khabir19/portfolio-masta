/* eslint-disable no-undef */
import React from "react";
import '../../App.css';
import { Grid, Row, ColText, ColImage } from '../../styles/global.js'
import Navbar from '../../Components/navbar';
import CarouselFade from "../../Components/carousel";

import Port1 from "../../assets/rioDesejo.png";
import Image from "../../assets/logo.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <CarouselFade />
      <Grid>
        <Row>
          <ColImage
            size={1}
            alt="teste"
            src={Port1}
          />
          <ColText size={4}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </ColText>
        </Row>
        <Row>
          <ColText size={4}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </ColText>
          <ColImage
            size={1}
            alt="teste"
            src={Port1}
          />
        </Row>
      </Grid>
    </>
  );
}

export default Home;
