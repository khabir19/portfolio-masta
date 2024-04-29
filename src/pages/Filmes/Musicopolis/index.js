
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import {
  AboutWrapper,
  AboutImg,
  AboutItem1,
  AboutItem3,
  AboutItem4,
  AboutItem5,
  AboutItem6,
  Title,
  Synopsis
} from './styles';

import Pic1 from '../../../assets/portfolio/assinaturas/musicopolis/MS1.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/musicopolis/MS3.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/musicopolis/MS4.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/musicopolis/MS5.jpg';
import Pic6 from '../../../assets/portfolio/assinaturas/musicopolis/MS6.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Musicópolis
          <br />
          <Synopsis>
            Ano: 2022
            <br />
            Direção: Eduardo Nunes
            <br />
            <br />
            Na jornada pelo mundo do som, três crianças estão sempre se lançando numa nova aventura,
            adquirindo conhecimentos e desenvolvendo habilidades na compreensão e expressão musical.
          </Synopsis>
        </Title>
      </AboutWrapper>
      <AboutWrapper>
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
