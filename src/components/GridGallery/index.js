import React from 'react';
import {
  GridWrapper,
  GalleryImg,
  Middle,
  MiddleText,
  GalleryMagal,
  GalleryFogareu,
  GalleryRioDesejo,
  GalleryTungstenio,
  GallerySemSeuSangue,
  GalleryDoresAmores,
  GalleryAliceSo,
  GallerySambandoBrasas,
  GallerySanto,
  GalleryPerdido,
  GalleryMusicopolis,
} from './styles';

import Magal from "../../assets/portfolio/assinaturas/meuSangueFerve/MF1.jpg";
import Fogareu from "../../assets/portfolio/assinaturas/fogareu/FG3.jpg";
import RioDesejo from "../../assets/portfolio/assinaturas/rioDesejo/RDGrid.jpg";
import Tungstenio from "../../assets/portfolio/assinaturas/tungstenio/TGGrid.png";
import SemSeuSangue from "../../assets/portfolio/assinaturas/semSeuSangue/SSGrid.jpg";
import DoresAmores from "../../assets/portfolio/assinaturas/doresAmores/DA6.jpg";
import AliceSo from "../../assets/portfolio/assinaturas/aliceSo/AS6.png";
import SambandoBrasas from "../../assets/portfolio/assinaturas/rioDuvida/RD1.jpg";
import Santo from "../../assets/portfolio/assinaturas/santo/STGrid.jpg";
import Perdido from "../../assets/portfolio/assinaturas/perdido/PDGrid.jpg";
import Musicopolis from "../../assets/portfolio/assinaturas/musicopolis/MS2.jpg";

function GridGallery() {
  return (
    <>
      <GridWrapper>
        <GalleryMagal to="/assinaturas/meu-sangue-ferve-por-voce" >
          <Middle>
            <GalleryImg src={Magal} />
            <MiddleText>
              Meu Sangue Ferve Por Você (2024)
            </MiddleText>
          </Middle>
        </GalleryMagal>
        <GalleryRioDesejo to="/assinaturas/rio-do-desejo">
          <Middle>
            <GalleryImg src={RioDesejo} />
            <MiddleText>
              O Rio do Desejo (2022)
            </MiddleText>
          </Middle>
        </GalleryRioDesejo>
        <GalleryFogareu to="/assinaturas/fogareu">
          <Middle>
            <GalleryImg src={Fogareu} />
            <MiddleText>
              Fogaréu (2022)
            </MiddleText>
          </Middle>
        </GalleryFogareu>
        <GalleryTungstenio to="/assinaturas/tungstenio">
          <Middle>
            <GalleryImg src={Tungstenio} />
            <MiddleText>
              Tungstênio (2018)
            </MiddleText>
          </Middle>
        </GalleryTungstenio>
        <GallerySemSeuSangue to="/assinaturas/sem-seu-sangue">
          <Middle>
            <GalleryImg src={SemSeuSangue} />
            <MiddleText>
              Sem Seu Sangue (2019)
            </MiddleText>
          </Middle>
        </GallerySemSeuSangue>
        <GalleryDoresAmores to="/assinaturas/dores-de-amores">
          <Middle>
            <GalleryImg src={DoresAmores} />
            <MiddleText>
              Dores de Amores (2013)
            </MiddleText>
          </Middle>
        </GalleryDoresAmores>
        <GalleryAliceSo to="/assinaturas/alice-e-so">
          <Middle>
            <GalleryImg src={AliceSo} />
            <MiddleText>
              Alice e Só (2020)
            </MiddleText>
          </Middle>
        </GalleryAliceSo>
        <GallerySambandoBrasas to="/assinaturas/rio-da-duvida">
          <Middle>
            <GalleryImg src={SambandoBrasas} />
            <MiddleText>
              Rio da Dúvida (2018)
            </MiddleText>
          </Middle>
        </GallerySambandoBrasas>
        <GallerySanto to="/assinaturas/santo">
          <Middle>
            <GalleryImg src={Santo} />
            <MiddleText>
              Santo (2022)
            </MiddleText>
          </Middle>
        </GallerySanto>
        <GalleryPerdido to="/assinaturas/perdido">
          <Middle>
            <GalleryImg src={Perdido} />
            <MiddleText>
              Perdido (2022)
            </MiddleText>
          </Middle>
        </GalleryPerdido>
        <GalleryMusicopolis to="/assinaturas/musicopolis">
          <Middle>
            <GalleryImg src={Musicopolis} />
            <MiddleText>
              Musicópolis (2022)
            </MiddleText>
          </Middle>
        </GalleryMusicopolis>
      </GridWrapper>
    </>
  );
};

export default GridGallery;
