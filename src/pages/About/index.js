
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GlobalStyle } from "../../assets/styles/global";
import { WrapperNavAbout, WrapperArtist, FadedCircle } from './styles';

const About = () => {
  return (
    <>
      <WrapperNavAbout>
        <Navbar />
      </WrapperNavAbout>
      <Footer />
    </>
  );
}

export default About;
