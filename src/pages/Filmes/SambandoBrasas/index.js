
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

import Pic1 from '../../../assets/portfolio/assinaturas/sambandoBrasas/SB1.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/sambandoBrasas/SB2.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/sambandoBrasas/SB3.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/sambandoBrasas/SB4.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Sambando nas Brasas, Morô?
          <br />
          <Synopsis>
            Ano: 2024
            <br />
            Direção: Elizeu Ewald
            <br />
            <br />
            Pedro é um músico que sonha entrar no mercado do Rio de Janeiro, em plenos anos 50. Com a ajuda de seu irmão Carlos, Pedro deixa Belo Horizonte para com ele dividir o mesmo teto em um distante subúrbio do na época Distrito Federal. 
            Já no Rio, numa de suas apresentações, Pedro conhece Arlete, que integra um conjunto vocal. 
            Logo eles se apaixonam. Neste mesma época o atentado a Carlos Lacerda tumultua o ambiente político do país, fazendo com que as Forças Armadas queiram a renúncia do presidente Getúlio Vargas.
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
      </AboutWrapper>
      <Footer />
    </>
  );
}

export default About;
