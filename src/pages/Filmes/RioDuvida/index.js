
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

import Pic1 from '../../../assets/portfolio/assinaturas/rioDuvida/RD1.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/rioDuvida/RD2.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/rioDuvida/RD3.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/rioDuvida/RD4.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/rioDuvida/RD5.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Rio da Dúvida
          <br />
          <Synopsis>
            Ano: 2018
            <br />
            Direção: Joel Pizzini
            <br />
            <br />
            Preciosas imagens de arquivo misturadas a depoimentos atuais remontam à uma das mais antigas dessas jornadas,
            quando o ex-presidente americano Theodore Roosevelt se juntou ao Coronel Candido Rondon, um dos maiores desbravadores do interior do país, para realizar o mapeamento do misterioso rio.
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
