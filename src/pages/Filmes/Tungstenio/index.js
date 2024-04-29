
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
  Title,
  Synopsis
} from './styles';

import Pic1 from '../../../assets/portfolio/assinaturas/tungstenio/TG1.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/tungstenio/TG2.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/tungstenio/TG3.webp';
import Pic4 from '../../../assets/portfolio/assinaturas/tungstenio/TG4.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/tungstenio/TG5.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Tungstênio
          <br />
          <Synopsis>
            Ano: 2018
            <br />
            Direção: Heitor Dhalia
            <br />
            <br />
            Um sargento do exército aposentado, um traficante, um policial e sua esposa se unem por um objetivo comum. Combater a pesca com explosivos na orla de Salvador, os quatro fazem de tudo para acabar com esse crime ambiental.
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
      </AboutWrapper>
      <Footer />
    </>
  );
}

export default About;
