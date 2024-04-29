
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

import Pic1 from '../../../assets/portfolio/assinaturas/semSeuSangue/SS1.jpg';
import Pic2 from '../../../assets/portfolio/assinaturas/semSeuSangue/SS2.jpg';
import Pic3 from '../../../assets/portfolio/assinaturas/semSeuSangue/SS3.jpg';
import Pic4 from '../../../assets/portfolio/assinaturas/semSeuSangue/SS4.jpg';
import Pic5 from '../../../assets/portfolio/assinaturas/semSeuSangue/SS5.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <Title>
          Sem Seu Sangue
          <br />
          <Synopsis>
            Ano: 2019
            <br />
            Direção: Alice Furtado
            <br />
            <br />
            Silvia é uma jovem introvertida que possui completo desinteresse pela própria rotina.
            Ela acredita ter encontrado em Artur um sentimento que a faz sentir-se mais viva e menos tímida. Apesar de ser hemofílico,
            a sua força e vitalidade deixam Silvia completamente encantada, mas um grave acidente pode complicar ainda mais as coisas.
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
