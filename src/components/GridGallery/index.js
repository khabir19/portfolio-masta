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
  GalleryItem12,
  GalleryItem13,
  GalleryItem14,
  GalleryItem15,
  GalleryItem16
} from './styles';

import Magal from "../../assets/portfolio/assinaturas/meuSangueFerve/MF1.jpg";
import Fogareu from "../../assets/portfolio/assinaturas/fogareu/FG3.jpg";
import RioDesejo from "../../assets/portfolio/assinaturas/rioDesejo/RD4.jpg";
import Tungstenio from "../../assets/portfolio/assinaturas/tungstenio/TG1.png";
import SemSeuSangue from "../../assets/portfolio/assinaturas/semSeuSangue/SS9.jpg";
import DoresAmores from "../../assets/portfolio/assinaturas/doresAmores/DA6.jpg";
import AliceSo from "../../assets/portfolio/assinaturas/aliceSo/AS6.png";
import SambandoBrasas from "../../assets/portfolio/assinaturas/sambandoBrasas/SB3.jpg";
import Santo from "../../assets/portfolio/assinaturas/santo/ST5.jpg";
import Perdido from "../../assets/portfolio/assinaturas/perdido/PD5.jpg";
import Musicopolis from "../../assets/portfolio/assinaturas/musicopolis/MS2.jpg";


// import Port9 from "../../assets/portfolio/assinaturas/fogareu/FG4.jpg";

// import Port10 from "../../assets/portfolio/assinaturas/rioDesejo/RD13.webp";
// import Port12 from "../../assets/portfolio/assinaturas/rioDesejo/RD12.jpg";
// import Port13 from "../../assets/portfolio/assinaturas/fogareu/FG6.jpg";
// import Port14 from "../../assets/portfolio/assinaturas/meuSangueFerve/MF4.jpg";
// import Port15 from "../../assets/portfolio/assinaturas/fogareu/FG9.jpg";

function GridGallery() {
  return (
    <>
      <GridWrapper>
        <GalleryMagal to="/filmeseseries/meu-sangue-ferve-por-voce" >
          <Middle>
            <GalleryImg src={Magal} />
            <MiddleText>
              Meu Sangue Ferve Por Você (2024)
            </MiddleText>
          </Middle>
        </GalleryMagal>
        <GalleryRioDesejo>
          <Middle>
            <GalleryImg src={RioDesejo} />
            <MiddleText>
              Rio do Desejo (2022)
            </MiddleText>
          </Middle>
        </GalleryRioDesejo>
        <GalleryFogareu>
          <Middle>
            <GalleryImg src={Fogareu} />
            <MiddleText>
              Fogaréu (2022)
            </MiddleText>
          </Middle>
        </GalleryFogareu>
        <GalleryTungstenio>
          <Middle>
            <GalleryImg src={Tungstenio} />
            <MiddleText>
              Tungstênio (2018)
            </MiddleText>
          </Middle>
        </GalleryTungstenio>
        <GallerySemSeuSangue>
          <Middle>
            <GalleryImg src={SemSeuSangue} />
            <MiddleText>
              Sem Seu Sangue (2019)
            </MiddleText>
          </Middle>
        </GallerySemSeuSangue>
        <GalleryDoresAmores>
          <Middle>
            <GalleryImg src={DoresAmores} />
            <MiddleText>
              Dores de Amores (2013)
            </MiddleText>
          </Middle>
        </GalleryDoresAmores>
        <GalleryAliceSo>
          <Middle>
            <GalleryImg src={AliceSo} />
            <MiddleText>
              Alice e Só (2020)
            </MiddleText>
          </Middle>
        </GalleryAliceSo>
        <GallerySambandoBrasas>
          <Middle>
            <GalleryImg src={SambandoBrasas} />
            <MiddleText>
              Sambando nas Brasas, Morô? (2007)
            </MiddleText>
          </Middle>
        </GallerySambandoBrasas>
        <GallerySanto>
          <Middle>
            <GalleryImg src={Santo} />
            <MiddleText>
              Santo (2022)
            </MiddleText>
          </Middle>
        </GallerySanto>
        <GalleryPerdido>
          <Middle>
            <GalleryImg src={Perdido} />
            <MiddleText>
              Perdido (2022)
            </MiddleText>
          </Middle>
        </GalleryPerdido>
        <GalleryMusicopolis>
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
