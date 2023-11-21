// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { WrapperText, Container, MovieTitle, MovieDate, SliderButton } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

function Carousel() {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/5/5c/O_Rio_do_Desejo.png"}
        >
          <WrapperText>
            <MovieTitle>
              O Rio do Desejo
            </MovieTitle>
            <MovieDate>
              Longa - 2022
            </MovieDate>
            <SliderButton>
              Mais Fotos
            </SliderButton>
          </WrapperText>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://br.web.img2.acsta.net/pictures/22/02/17/08/04/5758181.jpg"}
        >
          <WrapperText>
            <MovieTitle>
              Fogaréu
            </MovieTitle>
            <MovieDate>
              Longa - 2022
            </MovieDate>
            <SliderButton>
              Mais Fotos
            </SliderButton>
          </WrapperText>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Alice_%26_S%C3%B3.jpg/230px-Alice_%26_S%C3%B3.jpg"}
        >
          <WrapperText>
            <MovieTitle>
              Alice e Só
            </MovieTitle>
            <MovieDate>
              Longa - 2020
            </MovieDate>
            <SliderButton>
              Mais Fotos
            </SliderButton>
          </WrapperText>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://m.media-amazon.com/images/M/MV5BOWExNGQ5MDQtMjQ3Mi00OTQ2LWI2YjMtNmYxZGIxZDBjNzExXkEyXkFqcGdeQXVyNjkyMjgxOTM@._V1_.jpg"}
        >
          <WrapperText>
            <MovieTitle>
              Perdido
            </MovieTitle>
            <MovieDate>
              Série - 2020
            </MovieDate>
            <SliderButton>
              Mais Fotos
            </SliderButton>
          </WrapperText>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://vejasp.abril.com.br/wp-content/uploads/2020/10/Sem-seu-sangue-2.jpg?quality=70&strip=info"}
        >
          <WrapperText>
            <MovieTitle>
              Sem Seu Sangue
            </MovieTitle>
            <MovieDate>
              Longa - 2019
            </MovieDate>
            <SliderButton>
              Mais Fotos
            </SliderButton>
          </WrapperText>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://vejasp.abril.com.br/wp-content/uploads/2016/12/poster-filme-final-kombat-pra-internet.jpeg?quality=70"}
        >
          <WrapperText>
            <MovieTitle>
              Dores de Amores
            </MovieTitle>
            <MovieDate>
              Longa - 2013
            </MovieDate>
            <SliderButton>
              Mais Fotos
            </SliderButton>
          </WrapperText>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://m.media-amazon.com/images/M/MV5BNmM1ZGUzMGYtNTA5NS00NGFmLTk0MDgtMmY0MzA5OWMzNDZiXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_FMjpg_UX1000_.jpg"}
        >
          <WrapperText>
            <MovieTitle>
              Sambando nas Brasas, Morô?
            </MovieTitle>
            <MovieDate>
              Longa - 2007
            </MovieDate>
            <SliderButton>
              Mais Fotos
            </SliderButton>
          </WrapperText>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://caliban.com.br/wp-content/uploads/2016/02/MMEb.jpg"}
        >
          <WrapperText>
            <MovieTitle>
              Memórias do Movimento Estudantil
            </MovieTitle>
            <MovieDate>
              Documentário - 2007
            </MovieDate>
            <SliderButton>
              Mais Fotos
            </SliderButton>
          </WrapperText>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://caliban.com.br/wp-content/uploads/2016/02/OSWALDO-CRUZb.jpg"}
        >
          <WrapperText>
            <MovieTitle>
              Oswaldo Cruz - O Médico do Brasil
            </MovieTitle>
            <MovieDate>
              Documentário - 2003
            </MovieDate>
            <SliderButton>
              Mais Fotos
            </SliderButton>
          </WrapperText>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;