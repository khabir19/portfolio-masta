import { Text, PageBrake } from '../../assets/styles/global'
import { } from './styles'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CarouselAssinaturas from '../../components/CarouselAssinaturas';

const Portfolio = () => {
  return (
    <>
      <Navbar />
        <CarouselAssinaturas/>
      <Footer />
    </>
  );
}

export default Portfolio;