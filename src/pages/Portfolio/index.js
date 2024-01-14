import { Grid, Col, RowCol, Title, GlobalButton, Text, Subtitle, PageBrake } from '../../assets/styles/global'
import { WrapperText, WrapperNavPorfolio, WrapperReverse, PortImage } from './styles'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CarouselAssinaturas from '../../components/CarouselAssinaturas';
import CarouselAssistencias from '../../components/CarouselAssistencias';
import Port1 from '../../assets/portfolio/cartazes/aliceSoCartaz.jpg'

const Portfolio = () => {
  return (
    <>
      <WrapperNavPorfolio>
        <Navbar />
      </WrapperNavPorfolio>
      <PageBrake>
        <Text>
          Assinaturas
        </Text>
      </PageBrake>
      <CarouselAssinaturas />
      <PageBrake>
        <Text>
          Assistências
        </Text>
      </PageBrake>       
      <CarouselAssistencias/>
      <Footer />
    </>
  );
}

export default Portfolio;