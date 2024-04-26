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
              image={"https://upload.wikimedia.org/wikipedia/pt/2/2a/O_Palhaco_poster_vert.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Quincas Berro d'Água */}
          <LinkWrapper>
            <PosterSlide
              image={"https://upload.wikimedia.org/wikipedia/pt/b/b1/Quincas_Berro_d%27%C3%81gua.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Trinta */}
          <LinkWrapper>
            <PosterSlide
              image={"https://m.media-amazon.com/images/M/MV5BMjcxNTI5NDU1MV5BMl5BanBnXkFtZTgwMTM3Nzc2MjE@._V1_FMjpg_UX1000_.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Deserto */}
          <LinkWrapper>
            <PosterSlide
              image={"https://br.web.img3.acsta.net/pictures/17/09/18/01/19/5955481.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* O Grande Circo Místico */}
          <LinkWrapper>
            <PosterSlide
              image={"https://upload.wikimedia.org/wikipedia/pt/0/00/O_grande_circo_mistico.png"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Impuros */}
          <LinkWrapper>
            <PosterSlide
              image={"https://m.media-amazon.com/images/M/MV5BNTg3MDhiYjgtZDhiNi00MTcwLWJmYWEtMGNkNWMxZjAyMTEzXkEyXkFqcGdeQXVyMTA0NTc5MQ@@._V1_FMjpg_UX1000_.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* É Fada! */}
          <LinkWrapper>
            <PosterSlide
              image={"https://upload.wikimedia.org/wikipedia/pt/e/ea/%C3%89_Fada.jpeg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Magnífica 70 */}
          <LinkWrapper>
            <PosterSlide
              image={"https://f001.backblazeb2.com/file/papocine/2015/05/20181016-magnifica-70-papo-de-cinema-poster-t1.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Infância */}
          <LinkWrapper>
            <PosterSlide
              image={"https://br.web.img3.acsta.net/c_310_420/pictures/15/07/21/20/21/023044.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Casa da Mãe Joana 2 */}
          <LinkWrapper>
            <PosterSlide
              image={"https://www.filmeb.com.br/sites/default/files/styles/large/public/calendario-de-estreias/cartazes/Poster-do-filme-Casa-da-Mae-Joana%3D2.jpg?itok=vtHTsoyY"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Gonzaga: De Pai pra Filho */}
          <LinkWrapper>
            <PosterSlide
              image={"https://image.tmdb.org/t/p/w500/rFSUhUpMqYgLZOnkRGwDleFQg44.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Entre Vales */}
          <LinkWrapper>
            <PosterSlide
              image={"https://upload.wikimedia.org/wikipedia/pt/a/a8/EntreVales.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* O Homem do Futuro */}
          <LinkWrapper>
            <PosterSlide
              image={"https://image.tmdb.org/t/p/w500/ajjvpHJcO9TD45Y0aLZU5yBeW2G.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Ouro Negro */}
          <LinkWrapper>
            <PosterSlide
              image={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/182qFudWibaXMRtpZx8xhScapsP.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Budapeste */}
          <LinkWrapper>
            <PosterSlide
              image={"https://image.tmdb.org/t/p/w500/aZLulrPvexxbM101r0UkcenahnF.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Natale a Rio */}
          <LinkWrapper>
            <PosterSlide
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b77Mv9O2Nw1ZAxm2uX0LeAPogmX.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Juventude */}
          <LinkWrapper>
            <PosterSlide
              image={"https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/88/79/24/20005407.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* A Festa da Menina Morta */}
          <LinkWrapper>
            <PosterSlide
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2PWfoFg4pX8bMG8W5dIOzwZ2bsz.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Os Desafinados */}
          <LinkWrapper>
            <PosterSlide
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eaxtPesOxtpSus8WCxSumxFeB0Z.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Haru e Natsu: As Cartas que Não Chegaram */}
          <LinkWrapper>
            <PosterSlide
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hns10QEsMsoq4p37SAXuX0TtvfU.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {/* Uma Onda no Ar */}
          <LinkWrapper>
            <PosterSlide
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cUZBCwhGsOE2BZJGgpo7mdRQkq9.jpg"}
            />
          </LinkWrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default CarouselAssinaturas;