
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import {
  AboutWrapper,
  AboutImg,
  AboutItem1,
  AboutItem2,
  AboutItem3,
  AboutItem4,
  AboutItem5,
  AboutItem6,
  AboutItem7,
  AboutItem8,
  Title,
  Synopsis
} from './styles';

import Pic1 from '../../../assets/portfolio/assinaturas/rioDesejo/RD1.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/rioDesejo/RD2.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/rioDesejo/RD3.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/rioDesejo/RD4.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/rioDesejo/RD5.jpg';
import Pic6 from '../../../assets/portfolio/assinaturas/rioDesejo/RD6.jpg';
import Pic7 from '../../../assets/portfolio/assinaturas/rioDesejo/RD7.jpg';
import Pic8 from '../../../assets/portfolio/assinaturas/rioDesejo/RD8.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          O Rio do Desejo
          <br />
          <Synopsis>
            Ano: 2022
            <br />
            Direção: Sergio Machado
            <br />
            <br />
            Dalberto é comandante de um barco e enquanto viajava sua esposa acabou se aproximando de seus irmãos, Armando e Dalmo.
            Ao voltar ele terá de enfrentar essa situação complicada.
          </Synopsis>
        </Title>
      </AboutWrapper>
      <AboutWrapper>
        <AboutItem2>
          <AboutImg src={Pic2} />
        </AboutItem2>
        <AboutItem3>
          <AboutImg src={Pic3} />
        </AboutItem3>
        <AboutItem4>
          <AboutImg src={Pic4} />
        </AboutItem4>
        <AboutItem5>
          <AboutImg src={Pic5} />
        </AboutItem5>
        <AboutItem6>
          <AboutImg src={Pic6} />
        </AboutItem6>
        <AboutItem7>
          <AboutImg src={Pic7} />
        </AboutItem7>
        <AboutItem8>
          <AboutImg src={Pic8} />
        </AboutItem8>
      </AboutWrapper>
      <Footer />
    </>
  );
}

export default About;
