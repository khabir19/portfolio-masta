import {WrapperText, WrapperNavHome, WrapperReverse } from './styles'
import { Grid, Col, RowCol, Title, GlobalButton, Text } from '../../assets/styles/global'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Port1 from "../../assets/misc/masta10.jpg";

const Home = () => {
  return (
    <>
      <WrapperNavHome>
        <Navbar />
      </WrapperNavHome>
      <Grid>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Title>
              
              <Text style={{marginTop: '3rem'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <GlobalButton>Learn More</GlobalButton>
            </WrapperText>
          </Col>
        </RowCol>
        <WrapperReverse>
          <Col>
            <WrapperText>
              <Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Title>
              
              <Text style={{marginTop: '3rem'}}>
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
          </Col>
        </WrapperReverse>
      </Grid>
      <Footer/>
    </>
  );
}

export default Home;
