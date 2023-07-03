import { WrapperText, WrapperNavHome, WrapperReverse } from './styles';
import { Grid, Col, RowCol, Title, GlobalButton, Text, PageBrake, Parallax } from '../../assets/styles/global';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Port1 from "../../assets/portfolio/fogareu/fogareu.jpg";
import Port2 from "../../assets/portfolio/perdido/perdido4.jpg";
import Port3 from "../../assets/portfolio/semSeuSangue/semSeuSangue2.jpg";
import Port4 from "../../assets/portfolio/rioDesejo/rioDesejo.jpg";
import Carousel from "../../components/Carousel/";

const Home = () => {
  return (
    <>
      <WrapperNavHome>
        <Navbar />
      </WrapperNavHome>
      <Grid>
        {/* <Carousel></Carousel> */}
        <RowCol>
          <Col>
            <Parallax
              imageUrl={Port1}
              position="-65rem"
              mobilePosition="center"
              size="cover"
            />
          </Col>
          <Col>
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing
              </Title>
            </WrapperText>
          </Col>
        </RowCol>
        <WrapperReverse>
          <Col>
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing
              </Title>
            </WrapperText>
          </Col>
          <Col>
            <Parallax
              imageUrl={Port2}
              position="center"
              mobilePosition="center"
              size="cover"
            />
          </Col>
        </WrapperReverse>
        <RowCol>
          <Col>
            <Parallax
              imageUrl={Port3}
              position="center"
              mobilePosition="center"
              size="cover"
            />
          </Col>
          <Col>
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing
              </Title>
            </WrapperText>
          </Col>
        </RowCol>
        <WrapperReverse>
          <Col>
            <Parallax
              imageUrl={Port4}
              position
              mobilePosition="center"
              size="cover"
            />
          </Col>
        </WrapperReverse>
        <PageBrake>
          <a href="/Portfolio">
            <GlobalButton>Conheça meu trabalho</GlobalButton>
          </a>
        </PageBrake>
        <Footer />
      </Grid>
    </>
  );
}

export default Home;
