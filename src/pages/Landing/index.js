/* eslint-disable no-undef */
import React from "react";
import '../../App.css';
import styled from 'styled-components';

import backMandala from "../../assets/mandala.png";
import clientPhoto from "../../assets/masta.png";

const padding = '1em'

const Section = styled.div`
  padding: ${padding};
  color: darkorchid;
  font-size: 50px;
  background: ${props => props.background};

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const BgImage = styled.image`
  height: 80vmin;
  pointer-events: none;
  animation: App-logo-spin infinite 350s linear;    
`

const IconPLay = styled.image`
  position: absolute;
  
  width: 560px;
  height: 560px;
`

const Landing = () => {
  return (
    <>
      <Section background="whitesmoke">
        <h1>
          Masta Ariane
        </h1>
        <BgImage>
          <img alt="Rotating Mandala" src={backMandala} />
        </BgImage>
        <IconPLay>
          <img alt="Mugshot" src={clientPhoto} />
        </IconPLay>
      </Section>
      <Section background="whitesmoke">
        S
      </Section>
    </>
  );
}

export default Landing;
