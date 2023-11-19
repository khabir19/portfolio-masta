import { WrapperText, WrapperNavHome, WrapperReverse } from './styles';
import { Grid, Col, RowCol, Title, GlobalButton, Text, PageBrake, Parallax } from '../../assets/styles/global';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Port1 from "../../assets/portfolio/assinaturas/rioDesejo/RD4.jpg";
import Port2 from "../../assets/portfolio/assistencias/deserto/DS3.jpg";
import Port3 from "../../assets/portfolio/assistencias/palhaco/PL2.jpg";
import Port4 from "../../assets/portfolio/assinaturas/fogareu/fogareu.jpg";

const Home = () => {
  return (
    <>
      <WrapperNavHome>
        <Navbar />
      </WrapperNavHome>
      <Grid>
        <RowCol>
          <Col>
            <Parallax
              imageUrl={Port1}
              position="-55rem"
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
              position="-1rem"
              mobilePosition="center"
              size="cover"
            />
          </Col>
        </WrapperReverse>
        <RowCol>
          <Col>
            <Parallax
              imageUrl={Port3}
              position="-25rem"
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
              position="center"
              mobilePosition="center"
              size="cover"
            />
          </Col>
        </WrapperReverse>
        <PageBrake>
          <a href="/Portfolio">
            <GlobalButton
              pad="2rem"
              bgcolor="white"
              hovercolor="whitesmoke"
            >
              Conheça meu trabalho
            </GlobalButton>
          </a>
        </PageBrake>
        <Footer />
      </Grid>
    </>
  );
}

export default Home;
