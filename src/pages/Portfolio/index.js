import { Grid, Col, RowCol, Title, GlobalButton, Text, PageBrake } from '../../assets/styles/global'
import { WrapperText, WrapperNavPorfolio, WrapperReverse } from './styles'
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import Port1 from "../../assets/misc/masta10.jpg";

const Portfolio = () => {
  return (
    <>
      <WrapperNavPorfolio>
        <Navbar />
      </WrapperNavPorfolio>
      <PageBrake>
        <Title>
          Assinaturas
        </Title>
      </PageBrake>
        <Carousel/>
      <Grid>
        <RowCol>
          <Col>
            <img
              alt="teste"
              src={Port1}
            />
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Title>

              <Text style={{ marginTop: '3rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <GlobalButton>Learn More</GlobalButton>
            </WrapperText>
          </Col>
          <Col>
            <img
              alt="teste"
              src={Port1}
            />
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Title>

              <Text style={{ marginTop: '3rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <GlobalButton>Learn More</GlobalButton>
            </WrapperText>
          </Col>
          <Col>
            <img
              alt="teste"
              src={Port1}
            />
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Title>

              <Text style={{ marginTop: '3rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <GlobalButton>Learn More</GlobalButton>
            </WrapperText>
          </Col>
        </RowCol>
        <RowCol>
          <Col>
            <img
              alt="teste"
              src={Port1}
            />
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Title>

              <Text style={{ marginTop: '3rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <GlobalButton>Learn More</GlobalButton>
            </WrapperText>
          </Col>
          <Col>
            <img
              alt="teste"
              src={Port1}
            />
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Title>

              <Text style={{ marginTop: '3rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <GlobalButton>Learn More</GlobalButton>
            </WrapperText>
          </Col>
          <Col>
            <img
              alt="teste"
              src={Port1}
            />
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Title>

              <Text style={{ marginTop: '3rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <GlobalButton>Learn More</GlobalButton>
            </WrapperText>
          </Col>
        </RowCol>
        <Footer />
      </Grid>
    </>
  );
}

export default Portfolio;