
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {  } from "../../assets/styles/global";
import { Title, AboutWrapper, AboutImg, AboutItem1, AboutItem2, AboutItem3, AboutItem4, AboutItem5, AboutItem6, AboutItem7, AboutText } from './styles';

import Pic1 from "../../assets/portfolio/about/artist1.jpg"
const Teatro = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <AboutItem1>
          <AboutImg src={Pic1} />
        </AboutItem1>
        <AboutText>
        <Title>Os Saltimbancos</Title>
          Meu primeiro contato com figurino  longa metragem na cidade de Brasília, em 1998.<br />
          {/* Tenho meu primeiro contato com figurino em 1998 em um longa metragem, na cidade de Brasília.<br /> */}

          Em 1999 me mudo para o Rio de Janeiro, lugar que me proporcionou trabalhar com diversos profissionais, expandindo meu conhecimento.<br />



          Minha experiência passa por televisão, longa metragens, publicidades nacionais e internacionais, teatro, musicais, docudramas, além de séries para a TV.<br />



          O que mais me impressiona e encanta em criar figurinos é descobrir o que as personagens trazem com elas, é o contato com os atores e a troca entre esses mundos.
          Gosto quando acontece a mágica e os atores se sentem completamente à vontade para viverem outras vidas, dando formas e contornos que acrescentam em cada história que contamos.
        </AboutText>
      </AboutWrapper>
      <AboutWrapper>
        <AboutItem2>
          <AboutImg src={Pic1} />
        </AboutItem2>
        <AboutItem3>
          <AboutImg src={Pic1} />
        </AboutItem3>
        <AboutItem4>
          <AboutImg src={Pic1} />
        </AboutItem4>
        <AboutItem5>
          <AboutImg src={Pic1} />
        </AboutItem5>
        <AboutItem6>
          <AboutImg src={Pic1} />
        </AboutItem6>
        <AboutItem7>
          <AboutImg src={Pic1} />
        </AboutItem7>
      </AboutWrapper>
      <Footer />
    </>
  );
}

export default Teatro;
