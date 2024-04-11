
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
  Title,
  Synopsis
} from './styles';

import Pic1 from '../../../assets/portfolio/assinaturas/meuSangueFerve/MF8.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/meuSangueFerve/MF2.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/meuSangueFerve/MF3.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/meuSangueFerve/MF4.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/meuSangueFerve/MF5.jpg';
import Pic6 from '../../../assets/portfolio/assinaturas/meuSangueFerve/MF6.jpg';
import Pic7 from '../../../assets/portfolio/assinaturas/meuSangueFerve/MF7.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Meu Sangue Ferve Por Você
          <br />
          <Synopsis>
            Ano: 2024
            <br />
            Direção: Paulo Machline
            <br />
            <br />
            Em 1979, Magal, um dos artistas mais populares e celebrados do país, segue a rotina de ensaios e compromissos em Salvador.
            Durante um programa de TV, conhece a deslumbrante Magali e é acometido por uma paixão inédita e avassaladora.
          </Synopsis>
        </Title>
      </AboutWrapper>
      <AboutWrapper>
        <AboutItem2>
          <AboutImg src={Pic2} />
        </AboutItem2>
        <AboutItem3>
          <AboutImg src={Pic6} />
        </AboutItem3>
        <AboutItem4>
          <AboutImg src={Pic7} />
        </AboutItem4>
        <AboutItem5>
          <AboutImg src={Pic3} />
        </AboutItem5>
        <AboutItem6>
          <AboutImg src={Pic5} />
        </AboutItem6>
        <AboutItem7>
          <AboutImg src={Pic4} />
        </AboutItem7>
      </AboutWrapper>
      <Footer />
    </>
  );
}

export default About;
