import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkWrapper, Container, PosterSlide } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import aliceSo from '../../assets/portfolio/cartazesSign/ASCZ.jpg'
import doresAmores from '../../assets/portfolio/cartazesSign/DACZ.jpg'
import fogareu from '../../assets/portfolio/cartazesSign/FGCZ.jpg'
import musicopolis from '../../assets/portfolio/cartazesSign/MCCZ.jpg'
import magal from '../../assets/portfolio/cartazesSign/MFCZ.jpg'
import memoriasEstudantil from '../../assets/portfolio/cartazesSign/MMCZ.jpg'
import oswaldoCruz from '../../assets/portfolio/cartazesSign/OCCZ.jpg'
import perdido from '../../assets/portfolio/cartazesSign/PDCZ.jpg'
import rioDesejo from '../../assets/portfolio/cartazesSign/RDCZ.jpg'
import rioDuvida from '../../assets/portfolio/cartazesSign/RVCZ.jpg'
import sambandoBrasas from '../../assets/portfolio/cartazesSign/SBCZ.jpg'
import semSeuSangue from '../../assets/portfolio/cartazesSign/SSCZ.jpg'
import santo from '../../assets/portfolio/cartazesSign/STCZ.jpg'
import amigoPinguim from '../../assets/portfolio/cartazesSign/MPCZ.jpg'
import tungstenio from '../../assets/portfolio/cartazesSign/TGCZ.jpg'

import { Navigation } from 'swiper/modules';

function CarouselAssinaturas() {
  return (
    <Container>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1366: {
            slidesPerView: 3,
          },
          1501: {
            slidesPerView: 4,
          }
        }}
        spaceBetween={200}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
      <SwiperSlide>
        <LinkWrapper to="/assinaturas/meu-sangue-ferve-por-voce">
          <PosterSlide
            image={magal}
          >
          </PosterSlide>
        </LinkWrapper>
      </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas">
            <PosterSlide
              image={amigoPinguim}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/rio-do-desejo">
            <PosterSlide
              image={rioDesejo}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/fogareu">
            <PosterSlide
              image={fogareu}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/sem-seu-sangue">
            <PosterSlide
              image={semSeuSangue}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/tungstenio">
            <PosterSlide
              image={tungstenio}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/perdido">
            <PosterSlide
              image={perdido}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/dores-de-amores">
            <PosterSlide
              image={doresAmores}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/alice-e-so">
            <PosterSlide
              image={aliceSo}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/rio-da-duvida">
            <PosterSlide
              image={rioDuvida}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/santo">
            <PosterSlide
              image={santo}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/musicopolis">
            <PosterSlide
              image={musicopolis}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/sambando-nas-brasas-moro">
            <PosterSlide
              image={sambandoBrasas}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/">
            <PosterSlide
              image={memoriasEstudantil}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/">
            <PosterSlide
              image={oswaldoCruz}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default CarouselAssinaturas;