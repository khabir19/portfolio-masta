
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

import Pic1 from '../../../assets/portfolio/assinaturas/aliceSo/AS1.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/aliceSo/AS2.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/aliceSo/AS3.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/aliceSo/AS4.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/aliceSo/AS5.jpg';
import Pic6 from '../../../assets/portfolio/assinaturas/aliceSo/AS6.jpg';
import Pic7 from '../../../assets/portfolio/assinaturas/aliceSo/AS7.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Alice e Só
          <br />
          <Synopsis>
            Ano: 2020
            <br />
            Direção: Daniel Lieff
            <br />
            <br />
            Alice, uma jovem amante da música, e seu melhor amigo Sócrates fazem uma viagem, acompanhados por Tinho, um ex-roqueiro, para tocar no maior festival de bandas cover do mundo.
          </Synopsis>
        </Title>
      </AboutWrapper>
      <AboutWrapper>
        <AboutItem2>
          <AboutImg src={Pic3} />
        </AboutItem2>
        <AboutItem3>
          <AboutImg src={Pic6} />
        </AboutItem3>
        <AboutItem4>
          <AboutImg src={Pic7} />
        </AboutItem4>
        <AboutItem5>
          <AboutImg src={Pic2} />
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
