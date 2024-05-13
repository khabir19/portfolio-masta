import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkWrapper, Container, PosterSlide } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import budapeste from '../../assets/portfolio/cartazesAssist/BDCZ.jpg'
import deserto from '../../assets/portfolio/cartazesAssist/DSCZ.jpg'
import desafinados from '../../assets/portfolio/cartazesAssist/DSFCZ.jpg'
import entreVales from '../../assets/portfolio/cartazesAssist/EVCZ.jpg'
import fada from '../../assets/portfolio/cartazesAssist/FDCZ.jpg'
import meninaMorta from '../../assets/portfolio/cartazesAssist/FMMCZ.jpg'
import circoMistico from '../../assets/portfolio/cartazesAssist/GCCZ.jpg'
import gonzaga from '../../assets/portfolio/cartazesAssist/GZCZ.jpg'
import homemFuturo from '../../assets/portfolio/cartazesAssist/HFCZ.jpg'
import haruNatsu from '../../assets/portfolio/cartazesAssist/HNCZ.jpg'
import infancia from '../../assets/portfolio/cartazesAssist/IFCZ.jpg'
import impuros from '../../assets/portfolio/cartazesAssist/IPCZ.jpg'
import juventude from '../../assets/portfolio/cartazesAssist/JVCZ.jpg'
import magnifica from '../../assets/portfolio/cartazesAssist/MGCZ.jpg'
import maeJoana from '../../assets/portfolio/cartazesAssist/MJCZ.jpg'
import natalieRio from '../../assets/portfolio/cartazesAssist/NRCZ.jpg'
import ondaAr from '../../assets/portfolio/cartazesAssist/OACZ.jpg'
import ouroNegro from '../../assets/portfolio/cartazesAssist/ONCZ.jpg'
import palhaco from '../../assets/portfolio/cartazesAssist/PLCZ.jpg'
import quincas from '../../assets/portfolio/cartazesAssist/QBCZ.jpg'
import trinta from '../../assets/portfolio/cartazesAssist/TRCZ.jpg'

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
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        >
        <SwiperSlide>
          {/* O Palhaço */}
          <LinkWrapper>
            <PosterSlide
              image={palhaco}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Quincas Berro d'Água */}
          <LinkWrapper>
            <PosterSlide
              image={quincas}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Trinta */}
          <LinkWrapper>
            <PosterSlide
              image={trinta}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Deserto */}
          <LinkWrapper>
            <PosterSlide
              image={deserto}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* O Grande Circo Místico */}
          <LinkWrapper>
            <PosterSlide
              image={circoMistico}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Impuros */}
          <LinkWrapper>
            <PosterSlide
              image={impuros}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* É Fada! */}
          <LinkWrapper>
            <PosterSlide
              image={fada}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Magnífica 70 */}
          <LinkWrapper>
            <PosterSlide
              image={magnifica}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Infância */}
          <LinkWrapper>
            <PosterSlide
              image={infancia}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Casa da Mãe Joana 2 */}
          <LinkWrapper>
            <PosterSlide
              image={maeJoana}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Gonzaga: De Pai pra Filho */}
          <LinkWrapper>
            <PosterSlide
              image={gonzaga}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Entre Vales */}
          <LinkWrapper>
            <PosterSlide
              image={entreVales}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* O Homem do Futuro */}
          <LinkWrapper>
            <PosterSlide
              image={homemFuturo}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Ouro Negro */}
          <LinkWrapper>
            <PosterSlide
              image={ouroNegro}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Budapeste */}
          <LinkWrapper>
            <PosterSlide
              image={budapeste}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Natale a Rio */}
          <LinkWrapper>
            <PosterSlide
              image={natalieRio}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Juventude */}
          <LinkWrapper>
            <PosterSlide
              image={juventude}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* A Festa da Menina Morta */}
          <LinkWrapper>
            <PosterSlide
              image={meninaMorta}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Os Desafinados */}
          <LinkWrapper>
            <PosterSlide
              image={desafinados}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Haru e Natsu: As Cartas que Não Chegaram */}
          <LinkWrapper>
            <PosterSlide
              image={haruNatsu}/>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Uma Onda no Ar */}
          <LinkWrapper>
            <PosterSlide
              image={ondaAr}/>
          </LinkWrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default CarouselAssinaturas;