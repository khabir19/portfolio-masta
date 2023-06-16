/* eslint-disable no-undef */
import React from "react";
import '../../App.css';
import '../../styles/global.css'
import styled from 'styled-components';
import Navbar from '../../Components/navbar';

import backMandala from "../../assets/misc/mandalaWhite.png";
import clientPhoto from "../../assets/misc/masta.png";


export const Grid = styled.div` 
 
`;

export const Row = styled.div`
  display: flex;
`;

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `,
}

export const Col = styled.div`
  flex: ${(props) => props.size};
  justify-content: ${(props) => props.align};
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)}
`;

export const Title = styled.h1`
  color: darkcyan;

  font-family: Quicksand;
`;

export const BgImage = styled.image`
  position: absolute;

  mask-image: url(backMandala.png);
  height: 560px;
  /* pointer-events: none;
  animation: App-logo-spin infinite 350s linear;     */
`;

export const IconPLay = styled.image`
  position: absolute;
  
  width: 560px;
  height: 560px;
`;

const About = () => {
  return (
    <>
      <Navbar />
      <Grid>
        <Row>
          <Col size="1" align="center">
            <Title>
              Masta Ariane
            </Title>
          </Col>
          <Col size="2" align="flex-end">
            <BgImage>
              <img alt="Rotating Mandala" src={backMandala} collapse="xs" />
            </BgImage>
            <IconPLay>
              <img alt="Mugshot" src={clientPhoto} />
            </IconPLay>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default About;
