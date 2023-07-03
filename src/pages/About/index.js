
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Grid, Col, Title, PageBrake } from "../../assets/styles/global";
import { WrapperNavAbout, WrapperArtist, FadedCircle } from './styles';

const About = () => {
  return (
    <>
      <WrapperNavAbout>
        <Navbar />
      </WrapperNavAbout>
      <Grid>
        <PageBrake />
        <WrapperArtist>
          <Col>
            <Title style={{color: 'black'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.            
            </Title>
          </Col>
          <Col style={{alignItems: 'center'}}>
            <FadedCircle/>
          </Col>
        </WrapperArtist>
        <Footer />
      </Grid>
    </>
  );
}

export default About;
