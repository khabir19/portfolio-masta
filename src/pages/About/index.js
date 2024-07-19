
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { } from "../../assets/styles/global";
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
  AboutText
} from './styles';

import Pic1 from '../../assets/portfolio/about/artist1.jpg';
import Pic2 from '../../assets/portfolio/about/mastaBT.jpg';
import Pic3 from '../../assets/portfolio/about/mastaBT2.JPG';
import Pic4 from '../../assets/portfolio/about/mastaBT3.jpg';
import Pic5 from '../../assets/portfolio/about/mastaBT4.jpg';
import Pic6 from '../../assets/portfolio/about/mastaBT5.JPG';
import Pic7 from '../../assets/portfolio/about/mastaBT6.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <AboutText>
          Sou uma profissional do Audiovisual com 25 anos de experiência no figurino, trabalhei em diversas áreas de criação, como cinema, teatro, Tv, publicidades, vídeo clipes, além também de criar figurinos para eventos dos mais diversos.
          Iniciei minha vida artística com cursos de desenho na década de 90 quando morei na Alemanha.
          Formada em estilismo pelo Senac em 2003.
          <br />
          <br />
          Como figurinista assinei alguns títulos, entre eles “Meu Sangue Ferve por você” (2024 Dir. Paulo Machline); “O Rio do Desejo” (2022 Dir. Sérgio Machado”); “Santo” (2022 dir. Vicente Amorim – série Espanhola, assinei 3 episódios Brasil); “Fogaréu” (2022 Dir. Flavia Neves) ainda não lançado no Brasil, vencedor de vários prêmios em festivais pelo mundo; “Tungstênio”(2018 dir. Heitor Dhalia). Assino também séries para Tv como “Perdido” (2020 – Dir. Paulo Tiefenthaler e Ernesto Solis) e “Musicópolis” (2020 Dir. Marcos Flaksman e Eduardo Nunes).
          <br />
          <br />
          Ao longo desses anos trabalhei com profissionais renomados, como os diretores Sergio Machado, Cacá Diegues, Heitor Dhalia, Domingos de Oliveira, Vicente Amorim, e com as figurinistas Kika Lopes, Yurika Yamasaki,  entre outres, onde pude absorver e desenvolver o olhar para o que atravessa as histórias, para trazer aquilo que mais nos interessa nas narrativas.
          <br />
          <br />
          Meu foco principal é a criação de personagens, o trabalho em equipe e o envolvimento com as histórias que queremos contar através dessas personas.
          <br />
          <br />
          Com todos esses anos de bagagem e experiências, vejo que a grande escola é a prática de estar em sets de filmagens, coxias, produzindo em diferentes cidades, e aprendendo no dia a dia a sempre expandir e observar a grandiosidade do Ser Humano.

        </AboutText>

      </AboutWrapper>
      <AboutWrapper>
        <AboutItem2>
          <AboutImg src={Pic2} />
        </AboutItem2>
        <AboutItem3>
          <AboutImg src={Pic3} />
        </AboutItem3>
        <AboutItem4>
          <AboutImg src={Pic5} />
        </AboutItem4>
        <AboutItem5>
          <AboutImg src={Pic4} />
        </AboutItem5>
        <AboutItem6>
          <AboutImg src={Pic6} />
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
