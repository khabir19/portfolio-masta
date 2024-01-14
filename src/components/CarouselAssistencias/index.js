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
          slidesPerView: 6,
        },
      }}
      spaceBetween={2}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {/* O Palhaço */}
      <SwiperSlide>
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/2/2a/O_Palhaco_poster_vert.jpg"}
        />
      </SwiperSlide>
       {/* Quincas Berro d'Água */}
       <SwiperSlide>
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/b/b1/Quincas_Berro_d%27%C3%81gua.jpg"}
        />
      </SwiperSlide>
      {/* O Grande Circo Místico */}
      <SwiperSlide>
        <Container
          image={"https://br.web.img3.acsta.net/pictures/19/02/28/03/19/0706332.jpg"}
        />
      </SwiperSlide>
      {/* Deserto */}
      <SwiperSlide>
        <Container
          image={"https://br.web.img3.acsta.net/pictures/17/09/18/01/19/5955481.jpg"}
        />
      </SwiperSlide>
      {/* Trinta */}
      <SwiperSlide>
        <Container
          image={"https://m.media-amazon.com/images/M/MV5BMjcxNTI5NDU1MV5BMl5BanBnXkFtZTgwMTM3Nzc2MjE@._V1_FMjpg_UX1000_.jpg"}
        />
      </SwiperSlide>      
      {/* O Outro Lado do Paraíso */}
      <SwiperSlide>
        <Container
          image={"https://assets.cinebelasartes.com.br/wp-content/uploads/2016/07/Poster_OOutro.jpg"}
        />
      </SwiperSlide>
         {/* Impuros */}
         <SwiperSlide>
        <Container
          image={"https://m.media-amazon.com/images/M/MV5BNTg3MDhiYjgtZDhiNi00MTcwLWJmYWEtMGNkNWMxZjAyMTEzXkEyXkFqcGdeQXVyMTA0NTc5MQ@@._V1_FMjpg_UX1000_.jpg"}
        />
      </SwiperSlide>
      {/* No Gogó do Paulinho */}
      <SwiperSlide>
        <Container
          image={"https://image.tmdb.org/t/p/w500/qmCAciCurvDWZJY8wo3lvo9S9b2.jpg"}
        />
      </SwiperSlide>
      {/* Os Parças 2 */}
      <SwiperSlide>
        <Container
          image={"https://image.tmdb.org/t/p/w500/ggv4bKNHKbzD4wqr520X8n5AkBV.jpg"}
        />
      </SwiperSlide>
      {/* É Fada! */}
      <SwiperSlide>
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/e/ea/%C3%89_Fada.jpeg"}
        />
      </SwiperSlide>
      {/* Magnífica 70 */}
      <SwiperSlide>
        <Container
          image={"https://f001.backblazeb2.com/file/papocine/2015/05/20181016-magnifica-70-papo-de-cinema-poster-t1.jpg"}
        />
      </SwiperSlide>
      {/* Infância */}
      <SwiperSlide>
        <Container
          image={"https://br.web.img3.acsta.net/c_310_420/pictures/15/07/21/20/21/023044.jpg"}
        />
      </SwiperSlide>
      {/* Não Pare na Pista: A Melhor História de Paulo Coelho */}
      <SwiperSlide>
        <Container
          image={"https://br.web.img3.acsta.net/pictures/14/06/22/14/30/367791.jpg"}
        />
      </SwiperSlide>
      {/* Meu Passado Me Condena: O Filme */}
      <SwiperSlide>
        <Container
          image={"https://www.filmeb.com.br/sites/default/files/styles/large/public/calendario-de-estreias/cartazes/meupassadomecondena_2.jpg?itok=poKKaiq7"}
        />
      </SwiperSlide>
      {/* Casa da Mãe Joana 2 */}
      <SwiperSlide>
        <Container
          image={"https://www.filmeb.com.br/sites/default/files/styles/large/public/calendario-de-estreias/cartazes/Poster-do-filme-Casa-da-Mae-Joana%3D2.jpg?itok=vtHTsoyY"}
        />
      </SwiperSlide>
      {/* Gonzaga: De Pai pra Filho */}
      <SwiperSlide>
        <Container
          image={"https://image.tmdb.org/t/p/w500/rFSUhUpMqYgLZOnkRGwDleFQg44.jpg"}
        />
      </SwiperSlide>
      {/* Entre Vales */}
      <SwiperSlide>
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/a/a8/EntreVales.jpg"}
        />
      </SwiperSlide>      
      {/* O Homem do Futuro */}
      <SwiperSlide>
        <Container
          image={"https://image.tmdb.org/t/p/w500/ajjvpHJcO9TD45Y0aLZU5yBeW2G.jpg"}
        />
      </SwiperSlide>
      {/* Todas as Canções de Amor */}
      <SwiperSlide>
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/33R4G252vCNs1yf2JEzt7nD6HjI.jpg"}
        />
      </SwiperSlide>     
      {/* Amor Sem Medida */}
      <SwiperSlide>
        <Container
          image={"https://image.tmdb.org/t/p/w500/1cCzz0tb8rmFw90gwM3idRud46X.jpg"}
        />
      </SwiperSlide>
      {/* Ouro Negro */}
      <SwiperSlide>
        <Container
          image={"https://image.tmdb.org/t/p/w500/aPecXyNGxWVGNl2jDAjyox7SC0R.jpg"}
        />
      </SwiperSlide>
      {/* Budapeste */}
      <SwiperSlide>
        <Container
          image={"https://image.tmdb.org/t/p/w500/aZLulrPvexxbM101r0UkcenahnF.jpg"}
        />
      </SwiperSlide>
      {/* Natale a Rio */}
      <SwiperSlide>
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b77Mv9O2Nw1ZAxm2uX0LeAPogmX.jpg"}
        />
      </SwiperSlide>
      {/* Juventude */}
      <SwiperSlide>
        <Container
          image={"https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/88/79/24/20005407.jpg"}
        />
      </SwiperSlide>
      {/* A Festa da Menina Morta */}
      <SwiperSlide>
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2PWfoFg4pX8bMG8W5dIOzwZ2bsz.jpg"}
        />
      </SwiperSlide>
      {/* Os Desafinados */}
      <SwiperSlide>
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eaxtPesOxtpSus8WCxSumxFeB0Z.jpg"}
        />
      </SwiperSlide>
      {/* Haru e Natsu: As Cartas que Não Chegaram */}
      <SwiperSlide>
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hns10QEsMsoq4p37SAXuX0TtvfU.jpg"}
        />
      </SwiperSlide>
      {/* Uma Onda no Ar */}
      <SwiperSlide>
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cUZBCwhGsOE2BZJGgpo7mdRQkq9.jpg"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselAssinaturas;