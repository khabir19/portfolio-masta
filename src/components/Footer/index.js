import {
  GridWrapper,
  GridLogoWrapper,
  GridSocialsWrapper,
  SocialsLink,
  Disclaimer,
  ImdbIcon,
  InstagramIcon,
  WhatsappIcon
} from "./styles";
 
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