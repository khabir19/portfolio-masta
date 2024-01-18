import React from 'react';
import {
  GridWrapper,
  GalleryImg,
  GalleryItem1,
  GalleryItem2,
  GalleryItem3,
  GalleryItem4,
  GalleryItem5,
  GalleryItem6,
  GalleryItem7,
  GalleryItem8,
  GalleryItem9,
  GalleryItem10,
  GalleryItem11,
  GalleryItem12,
  GalleryItem13,
  GalleryItem14,
  GalleryItem15,
  GalleryItem16
} from './styles';

import Port1 from "../../assets/portfolio/assinaturas/fogareu/FG1.jpg";
import Port2 from "../../assets/portfolio/assinaturas/perdido/PD5.jpg";
import Port3 from "../../assets/portfolio/assinaturas/rioDesejo/RD4.jpg";

import Port4 from "../../assets/portfolio/assinaturas/tungstenio/TG1.png";
import Port5 from "../../assets/portfolio/assinaturas/rioDesejo/RD3.jpg";
import Port6 from "../../assets/portfolio/assinaturas/doresAmores/DA6.jpg";
import Port7 from "../../assets/portfolio/assinaturas/semSeuSangue/SS9.jpg";
import Port8 from "../../assets/portfolio/assinaturas/perdido/PD6.jpg";
import Port9 from "../../assets/portfolio/assinaturas/fogareu/FG4.jpg";

import Port10 from "../../assets/portfolio/assinaturas/rioDesejo/RD13.webp";
import Port11 from "../../assets/portfolio/assinaturas/aliceSo/AS6.png";
import Port12 from "../../assets/portfolio/assinaturas/rioDesejo/RD12.jpg";
import Port13 from "../../assets/portfolio/assinaturas/fogareu/FG6.jpg";
import Port14 from "../../assets/portfolio/assinaturas/meuSangueFerve/MF4.jpg";
import Port15 from "../../assets/portfolio/assinaturas/fogareu/FG9.jpg";
import Port16 from "../../assets/portfolio/assinaturas/sambandoBrasas/SB3.jpg";

function GridGallery() {
  return (
    <>
      <GridWrapper>
        <GalleryItem1>
          <GalleryImg src={Port1} />
        </GalleryItem1>
        <GalleryItem2>
          <GalleryImg src={Port2} />
        </GalleryItem2>
        <GalleryItem3>
          <GalleryImg src={Port3} />
        </GalleryItem3>
      </GridWrapper>
      <GridWrapper>
        <GalleryItem4>
          <GalleryImg src={Port4} />
        </GalleryItem4>
        <GalleryItem5>
          <GalleryImg src={Port5} />
        </GalleryItem5>
        <GalleryItem6>
          <GalleryImg src={Port6} />
        </GalleryItem6>
        <GalleryItem7>
          <GalleryImg src={Port7} />
        </GalleryItem7>
        <GalleryItem8>
          <GalleryImg src={Port8} />
        </GalleryItem8>
        <GalleryItem9>
          <GalleryImg src={Port9} />
        </GalleryItem9>
      </GridWrapper>
      <GridWrapper>
        <GalleryItem10>
          <GalleryImg src={Port10} />
        </GalleryItem10>
        <GalleryItem11>
          <GalleryImg src={Port11} />
        </GalleryItem11>
        <GalleryItem12>
          <GalleryImg src={Port12} />
        </GalleryItem12>
        <GalleryItem13>
          <GalleryImg src={Port13} />
        </GalleryItem13>
        <GalleryItem14>
          <GalleryImg src={Port14} />
        </GalleryItem14>
        <GalleryItem15>
          <GalleryImg src={Port15} />
        </GalleryItem15>
        <GalleryItem16>
          <GalleryImg src={Port16} />
        </GalleryItem16>
      </GridWrapper>
    </>
  );
};

export default GridGallery;
