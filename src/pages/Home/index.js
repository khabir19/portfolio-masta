import { WrapperNavHome } from './styles';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MosaicSign from '../../components/MosaicSign';

const Home = () => {
  return (
    <>
        <WrapperNavHome>
          <Navbar />
        </WrapperNavHome>
        <MosaicSign />
        <Footer />
    </>
  );
}

export default Home;
