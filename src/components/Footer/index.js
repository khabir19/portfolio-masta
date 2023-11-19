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
import { useEffect } from "react";


function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, []);

  return (
    <FooterContainer>
      <FooterArtist>
        masta ariane
      </FooterArtist>
      <LinkContainer>
        <FooterLink
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          Home
        </FooterLink>
        <FooterLink
          to="/portfolio"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          Portfólio
        </FooterLink>
        <FooterLink
          to="/sobre"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          Sobre
        </FooterLink>
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