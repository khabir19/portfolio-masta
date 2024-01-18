import React from 'react';
import { SlArrowDown } from "react-icons/sl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { WrapperText, Container, MovieTitle, MovieDate, SliderButton } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


function CarouselAssinaturas() {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 6,
        }
      }}
      spaceBetween={2}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tdrx8LEYbIIwD9qrFQIVcRsj2au.jpg"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Meu Sangue Ferve Por Você
              </MovieTitle>
              <MovieDate>
                Longa - 2024
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9LVVSd2K724lwSChMCv0ENsikgm.jpg"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Santo
              </MovieTitle>
              <MovieDate>
                Série - 2022
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/5/5c/O_Rio_do_Desejo.png"}
        >
          {/* <WrapperText>
              <MovieTitle>
                O Rio do Desejo
              </MovieTitle>
              <MovieDate>
                Longa - 2022
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://br.web.img2.acsta.net/pictures/22/02/17/08/04/5758181.jpg"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Fogaréu
              </MovieTitle>
              <MovieDate>
                Longa - 2022
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://pipocanamadrugada.com.br/site/wp-content/uploads/2020/11/Alice-So.png"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Alice e Só
              </MovieTitle>
              <MovieDate>
                Longa - 2020
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://m.media-amazon.com/images/M/MV5BOWExNGQ5MDQtMjQ3Mi00OTQ2LWI2YjMtNmYxZGIxZDBjNzExXkEyXkFqcGdeQXVyNjkyMjgxOTM@._V1_.jpg"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Perdido
              </MovieTitle>
              <MovieDate>
                Série - 2020
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://br.web.img2.acsta.net/pictures/20/11/25/15/08/0885111.jpg"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Sem Seu Sangue
              </MovieTitle>
              <MovieDate>
                Longa - 2019
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://vejasp.abril.com.br/wp-content/uploads/2016/12/poster-filme-final-kombat-pra-internet.jpeg?quality=70"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Dores de Amores
              </MovieTitle>
              <MovieDate>
                Longa - 2013
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://m.media-amazon.com/images/M/MV5BNmM1ZGUzMGYtNTA5NS00NGFmLTk0MDgtMmY0MzA5OWMzNDZiXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_FMjpg_UX1000_.jpg"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Sambando nas Brasas, Morô?
              </MovieTitle>
              <MovieDate>
                Longa - 2007
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://caliban.com.br/wp-content/uploads/2016/02/MMEb.jpg"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Memórias do Movimento Estudantil
              </MovieTitle>
              <MovieDate>
                Documentário - 2007
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://br.web.img3.acsta.net/pictures/18/12/11/23/34/2379375.jpg"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Rio da Dúvida
              </MovieTitle>
              <MovieDate>
                Documentário
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container
          image={"https://caliban.com.br/wp-content/uploads/2016/02/OSWALDO-CRUZb.jpg"}
        >
          {/* <WrapperText>
              <MovieTitle>
                Oswaldo Cruz
              </MovieTitle>
              <MovieDate>
                Documentário - 2003
              </MovieDate>
            </WrapperText> */}
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselAssinaturas;