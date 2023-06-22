import { FooterContainer, SocialMediaContainer, FooterLink, FooterLinkImage } from "./styles";
import Instagram from "../../assets/socials/instagram.png";
import Imdb from "../../assets/socials/imdb.png";

function Footer() {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/portfolio">Portfólio</FooterLink>
        <FooterLink to="/sobre">Sobre</FooterLink>
        <FooterLinkImage to="/sobre">
          <img alt="Instagram Logo" src={Instagram} />  
        </FooterLinkImage>        
        <FooterLinkImage to="/sobre">
        <img alt="Instagram Logo" src={Imdb} /> 
        </FooterLinkImage>
      </SocialMediaContainer>
    </FooterContainer>
  );
}

export default Footer;