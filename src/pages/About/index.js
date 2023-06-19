
import Navbar from '../../components/Navbar';
import { ArtistBadge, BgImage } from "./styles.js"
import { Grid, Row, Col, Title } from "../../assets/styles/global"
import clientPhoto from "../../assets/misc/masta.png";
import { WrapperNavAbout } from './styles'
import Mandala from "../../assets/misc/mandalaWhite.png";
import { WrapperText } from '../Home/styles';

const About = () => {
  return (
    <>
      <WrapperNavAbout>
        <Navbar />
      </WrapperNavAbout>
      <Grid style={{height: '100vh'}}>
        <Row style={{
            background: `url(${Mandala})`,   
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'right',
          }}>
          <Col>
            <Title>
              Masta Ariane
            </Title>
          </Col>
          <Col style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img alt="Mugshot" src={clientPhoto} 
            style={{
              borderRadius: '50%', 
              width: '20%', 
              height: '17%',
              marginLeft: '11rem'
            }} />
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default About;
