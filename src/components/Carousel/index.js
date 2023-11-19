// Import Swiper React components
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Col, Row, RowCol, Title, GlobalButton, Text } from '../../assets/styles/global';
import { WrapperText, PortImage, SlideGrid, MovieTitle, MovieDate, SliderButton } from './styles';

import Port1 from '../../assets/portfolio/cartazes/aliceSoCartaz.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

function Carousel() {
  return (
    <Swiper
      slidesPerView={3}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SlideGrid
          imageUrl={Port1}
        >
          <WrapperText>
            <MovieTitle>
              O Rio do Desejo
            </MovieTitle>

            <MovieDate>
              2022
            </MovieDate>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
              <SliderButton
                pad="1rem 2rem 1rem 2rem"
                hovercolor="white"
              >
                Trailer
              </SliderButton>
            </a>
          </WrapperText>
        </SlideGrid>
      </SwiperSlide>
      <SwiperSlide>
        <SlideGrid
          imageUrl={Port1}
        >
          <WrapperText>
            <MovieTitle>
              O Rio do Desejo
            </MovieTitle>

            <MovieDate>
              2022
            </MovieDate>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
              <SliderButton
                pad="1rem 2rem 1rem 2rem"
                hovercolor="white"
              >
                Trailer
              </SliderButton>
            </a>
          </WrapperText>
        </SlideGrid>
      </SwiperSlide>
      <SwiperSlide>
        <SlideGrid
          imageUrl={Port1}
        >
          <WrapperText>
            <MovieTitle>
              O Rio do Desejo
            </MovieTitle>

            <MovieDate>
              2022
            </MovieDate>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
              <SliderButton
                pad="1rem 2rem 1rem 2rem"
                hovercolor="white"
              >
                Trailer
              </SliderButton>
            </a>
          </WrapperText>
        </SlideGrid>
      </SwiperSlide>
      <SwiperSlide>
        <SlideGrid
          imageUrl={Port1}
        >
          <WrapperText>
            <MovieTitle>
              O Rio do Desejo
            </MovieTitle>

            <MovieDate>
              2022
            </MovieDate>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
              <SliderButton
                pad="1rem 2rem 1rem 2rem"
                hovercolor="white"
              >
                Trailer
              </SliderButton>
            </a>
          </WrapperText>
        </SlideGrid>
      </SwiperSlide>
      <SwiperSlide>
        <SlideGrid
          imageUrl={Port1}
        >
          <WrapperText>
            <MovieTitle>
              O Rio do Desejo
            </MovieTitle>

            <MovieDate>
              2022
            </MovieDate>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
              <SliderButton
                pad="1rem 2rem 1rem 2rem"
                hovercolor="white"
              >
                Trailer
              </SliderButton>
            </a>
          </WrapperText>
        </SlideGrid>
      </SwiperSlide>
      <SwiperSlide>
        <SlideGrid
          imageUrl={Port1}
        >
          <WrapperText>
            <MovieTitle>
              O Rio do Desejo
            </MovieTitle>

            <MovieDate>
              2022
            </MovieDate>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
              <SliderButton
                pad="1rem 2rem 1rem 2rem"
                hovercolor="white"
              >
                Trailer
              </SliderButton>
            </a>
          </WrapperText>
        </SlideGrid>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default Carousel;

<Grid>
  <RowCol>
    <Col>
      <PortImage
        imageUrl={Port1}
      />
      <WrapperText>
        <Title>
          O Rio do Desejo - 2022
        </Title>

        <Text>
          Figurinista
        </Text>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
          <GlobalButton
            pad="1rem 2rem 1rem 2rem"
            hovercolor="white"
          >
            Trailer
          </GlobalButton>
        </a>
      </WrapperText>
    </Col>
    <Col>
      <PortImage
        imageUrl={Port1}
      />
      <WrapperText>
        <Title>
          Fogaréu - 2022
        </Title>

        <Text>
          Figurinista
        </Text>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
          <GlobalButton
            pad="1rem 2rem 1rem 2rem"
            hovercolor="white"
          >
            Trailer
          </GlobalButton>
        </a>
      </WrapperText>
    </Col>
    <Col>
      <PortImage
        imageUrl={Port1}
      />
      <WrapperText>
        <Title>
          Alice e Só - 2020
        </Title>
        <Text>
          Figurinista
        </Text>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
          <GlobalButton
            pad="1rem 2rem 1rem 2rem"
            hovercolor="white"
          >
            Trailer
          </GlobalButton>
        </a>
      </WrapperText>
    </Col>
  </RowCol>
  <RowCol>
    <Col>
      <PortImage
        imageUrl={Port1}
      />
      <WrapperText>
        <Title>
          Perdido - 2020
        </Title>
        <Text>
          Figurinista
        </Text>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
          <GlobalButton
            pad="1rem 2rem 1rem 2rem"
            hovercolor="white"
          >
            Trailer
          </GlobalButton>
        </a>
      </WrapperText>
    </Col>
    <Col>
      <PortImage
        imageUrl={Port1}
      />
      <WrapperText>
        <Title>
          Sem Seu Sangue - 2019
        </Title>
        <Text>
          Figurinista
        </Text>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
          <GlobalButton
            pad="1rem 2rem 1rem 2rem"
            hovercolor="white"
          >
            Trailer
          </GlobalButton>
        </a>
      </WrapperText>
    </Col>
    <Col>
      <PortImage
        imageUrl={Port1}
      />
      <WrapperText>
        <Title>
          Dores de Amores - 2013
        </Title>

        <Text>
          Figurinista
        </Text>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
          <GlobalButton
            pad="1rem 2rem 1rem 2rem"
            hovercolor="white"
          >
            Trailer
          </GlobalButton>
        </a>
      </WrapperText>
    </Col>
  </RowCol>
  <RowCol>
    <Col>
      <PortImage
        imageUrl={Port1}
      />
      <WrapperText>
        <Title>
          Sambando nas Brasas, Morô? - 2007
        </Title>

        <Text>
          Figurinista
        </Text>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
          <GlobalButton
            pad="1rem 2rem 1rem 2rem"
            hovercolor="white"
          >
            Trailer
          </GlobalButton>
        </a>
      </WrapperText>
    </Col>
    <Col>
      <PortImage
        imageUrl={Port1}
      />
      <WrapperText>
        <Title>
          Memorias do Movimento Estudantil - 2007
        </Title>

        <Text>
          Figurinista
        </Text>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
          <GlobalButton
            pad="1rem 2rem 1rem 2rem"
            hovercolor="white"
          >
            Trailer
          </GlobalButton>
        </a>
      </WrapperText>
    </Col>
    <Col>
      <PortImage
        imageUrl={Port1}
      />
      <WrapperText>
        <Title>
          Oswaldo Cruz - O Médico do Brasil - 2003
        </Title>
        <Text>
          Figurinista
        </Text>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ui_iKdGEI1c">
          <GlobalButton
            pad="1rem 2rem 1rem 2rem"
            hovercolor="white"
          >
            Trailer
          </GlobalButton>
        </a>
      </WrapperText>
    </Col>
  </RowCol>
</Grid>