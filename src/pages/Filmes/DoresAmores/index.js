
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

import Pic1 from '../../../assets/portfolio/assinaturas/doresAmores/DA1.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/doresAmores/DA2.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/doresAmores/DA4.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/doresAmores/DA7.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/doresAmores/DA5.jpg';
import Pic6 from '../../../assets/portfolio/assinaturas/doresAmores/DA8.jpg';
import Pic7 from '../../../assets/portfolio/assinaturas/doresAmores/DA3.jpg';
import Pic8 from '../../../assets/portfolio/assinaturas/doresAmores/DA8.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Dores de Amores
          <br />
          <Synopsis>
            Ano: 2013
            <br />
            Direção: Raphael Vieira
            <br />
            <br />
            Um casal (Milhem Cortaz e Fabíula Nascimento) enfrenta problemas por ele não conseguir mais ter relações sexuais com ela. Sempre cobrado devido à ausência de tesão, ele sente-se cada vez mais diminuído na relação.
            É quando ela apresenta uma proposta ousada: que eles troquem de função no sexo, como forma de provar o comprometimento de ambos no relacionamento.
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
