
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
  Title,
  Synopsis
} from './styles';

import Pic1 from '../../../assets/portfolio/assinaturas/santo/ST1.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/santo/ST2.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/santo/ST3.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/santo/ST4.webp';
import Pic5 from '../../../assets/portfolio/assinaturas/santo/ST5.jpg';
import Pic6 from '../../../assets/portfolio/assinaturas/santo/ST6.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Santo
          <br />
          <Synopsis>
            Ano: 2022
            <br />
            2 episódios
            <br />
            <br />
            Dois policiais precisam aprender a trabalhar juntos para capturar o traficante mais procurado do mundo, cujo rosto jamais foi revelado.
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
      </AboutWrapper>
      <Footer />
    </>
  );
}

export default About;
