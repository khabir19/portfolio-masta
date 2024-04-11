import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkWrapper, Container, PosterSlide } from './styles';

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
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            // spaceBetween: 50,
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
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/meu-sangue-ferve-por-voce">
            <PosterSlide
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tdrx8LEYbIIwD9qrFQIVcRsj2au.jpg"}

            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/santo">
            <PosterSlide
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9LVVSd2K724lwSChMCv0ENsikgm.jpg"}
            >

            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/rio-do-desejo">
            <PosterSlide
              image={"https://upload.wikimedia.org/wikipedia/pt/5/5c/O_Rio_do_Desejo.png"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/fogareu">
            <PosterSlide
              image={"https://br.web.img2.acsta.net/pictures/22/02/17/08/04/5758181.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/alice-e-so">
            <PosterSlide
              image={"https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Alice_%26_S%C3%B3.jpg/230px-Alice_%26_S%C3%B3.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/perdido">
            <PosterSlide
              image={"https://m.media-amazon.com/images/M/MV5BOWExNGQ5MDQtMjQ3Mi00OTQ2LWI2YjMtNmYxZGIxZDBjNzExXkEyXkFqcGdeQXVyNjkyMjgxOTM@._V1_.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/sem-seu-sangue">
            <PosterSlide
              image={"https://br.web.img2.acsta.net/pictures/20/11/25/15/08/0885111.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/dores-de-amores">
            <PosterSlide
              image={"https://vejasp.abril.com.br/wp-content/uploads/2016/12/poster-filme-final-kombat-pra-internet.jpeg?quality=70"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/sambando-nas-brasas-moro">
            <PosterSlide
              image={"https://m.media-amazon.com/images/M/MV5BNmM1ZGUzMGYtNTA5NS00NGFmLTk0MDgtMmY0MzA5OWMzNDZiXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_FMjpg_UX1000_.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/memoria-do-movimento-estudantil">
            <PosterSlide
              image={"https://caliban.com.br/wp-content/uploads/2016/02/MMEb.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/rio-da-duvida">
            <PosterSlide
              image={"https://br.web.img3.acsta.net/pictures/18/12/11/23/34/2379375.jpg"}
            >
            </PosterSlide>
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <LinkWrapper to="/filmeseseries/oswaldo-cruz">
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