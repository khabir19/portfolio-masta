
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Grid, Row, Col, Title, PageBrake } from "../../assets/styles/global"
import clientPhoto from "../../assets/misc/masta.png";
import { WrapperNavAbout, WrapperArtist } from './styles'
import Mandala from "../../assets/misc/mandalaWhite.png";

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
            <Title>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.            
            </Title>
          </Col>
          <Col>
            <img alt="Mugshot" src={clientPhoto} />
          </Col>
        </WrapperArtist>

        <Footer />
      </Grid>
    </>
  );
}

export default About;
