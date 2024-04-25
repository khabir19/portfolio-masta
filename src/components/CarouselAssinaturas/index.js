import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkWrapper, Container, PosterSlide, Title } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function CarouselAssinaturas() {
  return (
    <Container>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
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
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {/* <Title>
          Assinaturas
        </Title> */}
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/meu-sangue-ferve-por-voce">
            <PosterSlide
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tdrx8LEYbIIwD9qrFQIVcRsj2au.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/santo">
            <PosterSlide
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9LVVSd2K724lwSChMCv0ENsikgm.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/rio-do-desejo">
            <PosterSlide
              image={"https://upload.wikimedia.org/wikipedia/pt/5/5c/O_Rio_do_Desejo.png"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/fogareu">
            <PosterSlide
              image={"https://br.web.img2.acsta.net/pictures/22/02/17/08/04/5758181.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/alice-e-so">
            <PosterSlide
              image={"https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Alice_%26_S%C3%B3.jpg/230px-Alice_%26_S%C3%B3.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/perdido">
            <PosterSlide
              image={"https://m.media-amazon.com/images/M/MV5BOWExNGQ5MDQtMjQ3Mi00OTQ2LWI2YjMtNmYxZGIxZDBjNzExXkEyXkFqcGdeQXVyNjkyMjgxOTM@._V1_.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/sem-seu-sangue">
            <PosterSlide
              image={"https://br.web.img2.acsta.net/pictures/20/11/25/15/08/0885111.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/dores-de-amores">
            <PosterSlide
              image={"https://vejasp.abril.com.br/wp-content/uploads/2016/12/poster-filme-final-kombat-pra-internet.jpeg?quality=70"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/musicopolis">
            <PosterSlide
              image={"https://s2-globo-play.glbimg.com/ujZErJd5YbViNU-YB3AzUYPLRLo=/362x536/https://s2-globo-play.glbimg.com/uIEO2bNP_1zDOtH-k-zNfZBfBTI=/https://s2.glbimg.com/FMsbenFy5ULCJxBCYMh-iNfYnLc=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/3/I/kukhcSRfyAS7GOn7KYow/2022-65-musicopolis-poster-1-.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/sambando-nas-brasas-moro">
            <PosterSlide
              image={"https://m.media-amazon.com/images/M/MV5BNmM1ZGUzMGYtNTA5NS00NGFmLTk0MDgtMmY0MzA5OWMzNDZiXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_FMjpg_UX1000_.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/">
            <PosterSlide
              image={"https://caliban.com.br/wp-content/uploads/2016/02/MMEb.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/rio-da-duvida">
            <PosterSlide
              image={"https://rondonriodaduvida.com/wp-content/uploads/2023/10/banner-28-09-23-web-2-725x1024.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/assinaturas/">
            <PosterSlide
              image={"https://caliban.com.br/wp-content/uploads/2016/02/OSWALDO-CRUZb.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default CarouselAssinaturas;