import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  SwiperWrapper,
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
  GalleryItem16,
  GalleryItem17,
  GalleryItem18
} from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Port1 from "../../assets/portfolio/assinaturas/rioDesejo/RD1.jpg";
import Port2 from "../../assets/portfolio/assistencias/gonzaga/GZ1.jpg";
import Port3 from "../../assets/portfolio/assistencias/palhaco/PL5.jpg";
import Port4 from "../../assets/portfolio/assinaturas/semSeuSangue/SS3.jpg";
import Port5 from "../../assets/portfolio/assistencias/deserto/DS3.jpg";
import Port6 from "../../assets/portfolio/assistencias/homemFuturo/HF2.jpg";
import Port7 from "../../assets/portfolio/assinaturas/oswaldoCruz/OC2.jpg";
import Port8 from "../../assets/portfolio/assistencias/magnifica70/MG4.webp";
import Port9 from "../../assets/portfolio/assinaturas/fogareu/fogareu.jpg";

import Port10 from "../../assets/portfolio/assistencias/circoMistico/CM7.webp";
import Port11 from "../../assets/portfolio/assinaturas/sambandoBrasas/SB1.jpg";
import Port12 from "../../assets/portfolio/assistencias/gonzaga/GZ4.jpg";
import Port13 from "../../assets/portfolio/assistencias/deserto/DS2.jpg";
import Port14 from "../../assets/portfolio/assinaturas/doresAmores/DA4.jpg";
import Port15 from "../../assets/portfolio/assistencias/homemFuturo/HF2.jpg";
import Port16 from "../../assets/portfolio/assinaturas/oswaldoCruz/OC2.jpg";
import Port17 from "../../assets/portfolio/assistencias/magnifica70/MG4.webp";
import Port18 from "../../assets/portfolio/assinaturas/fogareu/fogareu.jpg";

function Mosaic() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={true}
      speed={8000}
    >
      <SwiperSlide>
        <SwiperWrapper>
          <GalleryItem1>
            <GalleryImg src={Port1} />
          </GalleryItem1>
          <GalleryItem2>
            <GalleryImg src={Port2} />
          </GalleryItem2>
          <GalleryItem3>
            <GalleryImg src={Port3} />
          </GalleryItem3>
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
          <GalleryItem1>
            <GalleryImg src={Port1} />
          </GalleryItem1>
          <GalleryItem2>
            <GalleryImg src={Port2} />
          </GalleryItem2>
          <GalleryItem3>
            <GalleryImg src={Port3} />
          </GalleryItem3>
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
        </SwiperWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperWrapper>
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
        </SwiperWrapper>
      </SwiperSlide>
    </Swiper>
  );
};

export default Mosaic;
