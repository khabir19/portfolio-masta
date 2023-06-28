import { WrapperText, WrapperNavHome, WrapperReverse } from './styles'
import { Grid, Col, RowCol, Title, GlobalButton, Text, PageBrake } from '../../assets/styles/global'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Port1 from "../../assets/portfolio/fogareu/fogareu.jpg";
import Port2 from "../../assets/portfolio/perdido/perdido4.jpg";
import Port4 from "../../assets/misc/masta00.jpg";
import Port3 from "../../assets/portfolio/semSeuSangue/semSeuSangue2.jpg";

const Home = () => {
  return (
    <>
      <WrapperNavHome>
        <Navbar />
      </WrapperNavHome>
      <Grid>
        <PageBrake>
          Lorem Ipsum is simply dummy text of the printing
        </PageBrake>
        <RowCol>
          <Col>
            <img
              alt="teste"
              src={Port1}
            />
          </Col>
          <Col>
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing
              </Title>

              {/* <Text>
              Lorem Ipsum is simply dummy text of the printing
              </Text> */}
              <a href="/Portfolio">
                <GlobalButton>Conheça meu trabalho</GlobalButton>
              </a>
            </WrapperText>
          </Col>
        </RowCol>
        <WrapperReverse>
          <Col>
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing
              </Title>

              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <a href="/Portfolio">
                <GlobalButton>Conheça meu trabalho</GlobalButton>
              </a>
            </WrapperText>
          </Col>
          <Col>
            <img
              alt="teste"
              src={Port2}
            />
          </Col>
        </WrapperReverse>
        <RowCol>
          <Col>
            <img
              alt="teste"
              src={Port3}
            />
          </Col>
          <Col>
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing
              </Title>

              {/* <Text>
              Lorem Ipsum is simply dummy text of the printing
              </Text> */}
              <a href="/Portfolio">
                <GlobalButton>Conheça meu trabalho</GlobalButton>
              </a>
            </WrapperText>
          </Col>
        </RowCol>
        <WrapperReverse>
          <Col>
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing
              </Title>

              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <a href="/Portfolio">
                <GlobalButton>Conheça meu trabalho</GlobalButton>
              </a>
            </WrapperText>
          </Col>
          <Col>
            <img
              alt="teste"
              src={Port4}
            />
          </Col>
        </WrapperReverse>
        <Footer />
      </Grid>
    </>
  );
}

export default Home;
