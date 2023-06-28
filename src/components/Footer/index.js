import {
  FooterContainer,
  LinkContainer,
  FooterLink,
  SocialsLink,
  FooterArtist,
  Disclaimer
} from "./styles";
import Instagram from "../../assets/socials/instagram.png";
import Imdb from "../../assets/socials/imdb.png";


function Footer() {
  return (    
      <FooterContainer>
        <FooterArtist>
          masta ariane
        </FooterArtist>
        <LinkContainer>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/portfolio">Portfólio</FooterLink>
          <FooterLink to="/sobre">Sobre</FooterLink>
          <SocialsLink target="_blank" to="https://www.instagram.com/mastaariane/">
            <img alt="Instagram Logo" src={Instagram} />
          </SocialsLink>
          <SocialsLink target="_blank" to="https://www.imdb.com/name/nm5756608/">
            <img alt="Instagram Logo" src={Imdb} />
          </SocialsLink>
        </LinkContainer>
          <Disclaimer>Todos os direitos reservados {new Date().getFullYear()}</Disclaimer>
      </FooterContainer>    
  );
}

export default Footer;