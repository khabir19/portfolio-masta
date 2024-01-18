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
        {/* O Palhaço */}
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/2/2a/O_Palhaco_poster_vert.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Quincas Berro d'Água */}
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/b/b1/Quincas_Berro_d%27%C3%81gua.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* O Grande Circo Místico */}
        <Container
          image={"https://br.web.img3.acsta.net/pictures/19/02/28/03/19/0706332.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Deserto */}
        <Container
          image={"https://br.web.img3.acsta.net/pictures/17/09/18/01/19/5955481.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Trinta */}
        <Container
          image={"https://m.media-amazon.com/images/M/MV5BMjcxNTI5NDU1MV5BMl5BanBnXkFtZTgwMTM3Nzc2MjE@._V1_FMjpg_UX1000_.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* O Outro Lado do Paraíso */}
        <Container
          image={"https://images.justwatch.com/poster/300672635/s592/o-outro-lado-do-paraiso"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Impuros */}
        <Container
          image={"https://m.media-amazon.com/images/M/MV5BNTg3MDhiYjgtZDhiNi00MTcwLWJmYWEtMGNkNWMxZjAyMTEzXkEyXkFqcGdeQXVyMTA0NTc5MQ@@._V1_FMjpg_UX1000_.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* No Gogó do Paulinho */}
        <Container
          image={"https://image.tmdb.org/t/p/w500/qmCAciCurvDWZJY8wo3lvo9S9b2.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Os Parças 2 */}
        <Container
          image={"https://image.tmdb.org/t/p/w500/ggv4bKNHKbzD4wqr520X8n5AkBV.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* É Fada! */}
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/e/ea/%C3%89_Fada.jpeg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Magnífica 70 */}
        <Container
          image={"https://f001.backblazeb2.com/file/papocine/2015/05/20181016-magnifica-70-papo-de-cinema-poster-t1.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Infância */}
        <Container
          image={"https://br.web.img3.acsta.net/c_310_420/pictures/15/07/21/20/21/023044.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Não Pare na Pista: A Melhor História de Paulo Coelho */}
        <Container
          image={"https://br.web.img3.acsta.net/pictures/14/06/22/14/30/367791.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Meu Passado Me Condena: O Filme */}
        <Container
          image={"https://www.filmeb.com.br/sites/default/files/styles/large/public/calendario-de-estreias/cartazes/meupassadomecondena_2.jpg?itok=poKKaiq7"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Casa da Mãe Joana 2 */}
        <Container
          image={"https://www.filmeb.com.br/sites/default/files/styles/large/public/calendario-de-estreias/cartazes/Poster-do-filme-Casa-da-Mae-Joana%3D2.jpg?itok=vtHTsoyY"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Gonzaga: De Pai pra Filho */}
        <Container
          image={"https://image.tmdb.org/t/p/w500/rFSUhUpMqYgLZOnkRGwDleFQg44.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Entre Vales */}
        <Container
          image={"https://upload.wikimedia.org/wikipedia/pt/a/a8/EntreVales.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* O Homem do Futuro */}
        <Container
          image={"https://image.tmdb.org/t/p/w500/ajjvpHJcO9TD45Y0aLZU5yBeW2G.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Todas as Canções de Amor */}
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/33R4G252vCNs1yf2JEzt7nD6HjI.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Amor Sem Medida */}
        <Container
          image={"https://image.tmdb.org/t/p/w500/1cCzz0tb8rmFw90gwM3idRud46X.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Ouro Negro */}
        <Container
          image={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/182qFudWibaXMRtpZx8xhScapsP.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Budapeste */}
        <Container
          image={"https://image.tmdb.org/t/p/w500/aZLulrPvexxbM101r0UkcenahnF.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Natale a Rio */}
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b77Mv9O2Nw1ZAxm2uX0LeAPogmX.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Juventude */}
        <Container
          image={"https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/88/79/24/20005407.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* A Festa da Menina Morta */}
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2PWfoFg4pX8bMG8W5dIOzwZ2bsz.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Os Desafinados */}
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eaxtPesOxtpSus8WCxSumxFeB0Z.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Haru e Natsu: As Cartas que Não Chegaram */}
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hns10QEsMsoq4p37SAXuX0TtvfU.jpg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* Uma Onda no Ar */}
        <Container
          image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cUZBCwhGsOE2BZJGgpo7mdRQkq9.jpg"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselAssinaturas;