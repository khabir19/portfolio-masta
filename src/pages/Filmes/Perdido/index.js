
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

import Pic1 from '../../../assets/portfolio/assinaturas/perdido/PD1.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/perdido/PD2.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/perdido/PD3.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/perdido/PD4.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/perdido/PD5.jpg';
import Pic6 from '../../../assets/portfolio/assinaturas/perdido/PD6.jpg';
import Pic7 from '../../../assets/portfolio/assinaturas/perdido/PD7.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Perdido
          <br />
          <Synopsis>
            Ano: 2020
            <br />
            Direção: Paulo Tiefenthaler
            <br />
            <br />
            Com a morte da tia, Derek herda uma antiga loja de lingeries em Copacabana. 
            Pelo testamento ele é obrigado a manter na loja o funcionário fiel da tia, Roberto, uma jovem gay e trans que vai mudar sua vida.
          </Synopsis>
        </Title>
      </AboutWrapper>
      <AboutWrapper>
        <AboutItem2>
          <AboutImg src={Pic3} />
        </AboutItem2>
        <AboutItem3>
          <AboutImg src={Pic5} />
        </AboutItem3>
        <AboutItem4>
          <AboutImg src={Pic7} />
        </AboutItem4>
        <AboutItem5>
          <AboutImg src={Pic2} />
        </AboutItem5>
        <AboutItem6>
          <AboutImg src={Pic6} />
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
