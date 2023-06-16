/* eslint-disable no-undef */
import React from "react";
import '../../App.css';
import { Grid, Row, ColText, ColImage, WrapperNavHeadear, WrapperElements } from '../../styles/global.js'
import Navbar from '../../Components/navbar';
import CarouselFade from "../../Components/carousel";

import Port1 from "../../assets/misc/masta10.jpg";

const Home = () => {
  return (
    <>
    <WrapperNavHeadear>
      <Navbar />
    </WrapperNavHeadear>
      {/* <CarouselFade /> */}
      <Grid>
        <Row>
          <ColImage
            alt="teste"
            src={Port1}
          />
          <ColText>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </ColText>
        </Row>
        <WrapperElements>
          <ColText>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </ColText>
          <ColImage
            alt="teste"
            src={Port1}
          />
        </WrapperElements>
      </Grid>
    </>
  );
}

export default Home;
