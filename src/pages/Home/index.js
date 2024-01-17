import { WrapperNavHome } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GridGallery from '../../components/GridGallery';

const Home = () => {
  return (
    <>
        <WrapperNavHome>
          <Navbar />
        </WrapperNavHome>
        <GridGallery />
        <Footer />
    </>
  );
}

export default Home;
