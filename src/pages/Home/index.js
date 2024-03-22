import { Container } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GridGallery from '../../components/GridGallery';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <GridGallery />
      <Footer />
    </Container>
  );
}

export default Home;
