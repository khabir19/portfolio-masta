import {
  GridWrapper,
  GridLogoWrapper,
  GridSocialsWrapper,
  SocialsLink,
  SocialsIcon,
  Disclaimer,
  ImdbIcon,
  InstagramIcon,
  WhatsappIcon
} from "./styles";
 
import Instagram from "../../assets/socials/instagram.png";
import Imdb from "../../assets/socials/imdb.png";
import Whatsapp from "../../assets/socials/whatsapp.png";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, []);

  return (
    <>
      <GridWrapper>
        <GridLogoWrapper/>
        <GridSocialsWrapper>
          <SocialsLink target="_blank" to="https://www.imdb.com/name/nm5756608/">
          <ImdbIcon/>
          </SocialsLink>
          <SocialsLink target="_blank" to="https://www.instagram.com/mastaariane/">
            <InstagramIcon/>
          </SocialsLink>
          <SocialsLink target="_blank" to="https://wa.me/5521981017549">
            <WhatsappIcon/>
          </SocialsLink>
        </GridSocialsWrapper>
         <Disclaimer>Todos os direitos reservados©️ {new Date().getFullYear()}</Disclaimer>
      </GridWrapper>
    </>
  );
}

export default Footer;