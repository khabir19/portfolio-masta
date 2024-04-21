
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

import Pic1 from '../../../assets/portfolio/assinaturas/fogareu/FG8.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/fogareu/FG5.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/fogareu/FG1.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/fogareu/FG2.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/fogareu/FG4.jpg';
import Pic6 from '../../../assets/portfolio/assinaturas/fogareu/FG6.jpg';
import Pic7 from '../../../assets/portfolio/assinaturas/fogareu/FG9.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Fogaréu
          <br />
          <Synopsis>
            Ano: 2022
            <br />
            Direção: Flávia Neves
            <br />
            <br />
            Na fronteira entre o real e o fantástico, entre o passado colonial e a esmagadora modernidade do agronegócio, 
            a cidade de Goiás é o cenário para o encontro entre a jovem Fernanda e as suas raízes secretas.
          </Synopsis>
        </Title>
      </AboutWrapper>
      <AboutWrapper>
        <AboutItem2>
          <AboutImg src={Pic4} />
        </AboutItem2>
        <AboutItem3>
          <AboutImg src={Pic3} />
        </AboutItem3>
        <AboutItem4>
          <AboutImg src={Pic5} />
        </AboutItem4>
        <AboutItem5>
          <AboutImg src={Pic6} />
        </AboutItem5>
        <AboutItem6>
          <AboutImg src={Pic2} />
        </AboutItem6>
        <AboutItem7>
          <AboutImg src={Pic7} />
        </AboutItem7>
      </AboutWrapper>
      <Footer />
    </>
  );
}

export default About;
