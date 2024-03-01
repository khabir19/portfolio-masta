import React from 'react'
import {
  ContactBarContainer, ContactBarArrowContainer, ContactBarArrowIcon, IconsContainer,
  MenuTitleContainer, IconContainer 
} from './styles.js'

const ContactBar = () => {
  const [isDisplayed, setIsDisplayed] = React.useState(false);

  const toggle = () => {
    setIsDisplayed(!isDisplayed);
  }

  return (
    <>
      <ContactBarContainer>
        <IconsContainer isOpen={isDisplayed}>
          <MenuTitleContainer>
            MENU
          </MenuTitleContainer>
          <IconContainer to="/sobre" rel="noreferrer">            
            BIO
          </IconContainer>
          <IconContainer>
            Filmes
          </IconContainer>
          <IconContainer>
            Séries 
          </IconContainer>
          <IconContainer>
            Teatro
          </IconContainer>
          <IconContainer>
            Publicidade
          </IconContainer>
          {/* <IconContainer>
            <a href="https://github.com/sjgutta" target="_blank" rel="noreferrer">
              <GitHubIcon size={"100%"} />
            </a>
          </IconContainer>
          <IconContainer>
            <a href="https://www.instagram.com/sjgutta/?hl=en" target="_blank" rel="noreferrer">
              <InstagramIcon size={"100%"} />
            </a>
          </IconContainer>
          <IconContainer>
            <a href="https://gutta.medium.com" target="_blank" rel="noreferrer">
              <MediumIcon size={"100%"} />
            </a>
          </IconContainer> */}
        </IconsContainer>
        <ContactBarArrowContainer onClick={toggle}>
          <ContactBarArrowIcon isOpen={isDisplayed} />
        </ContactBarArrowContainer>
      </ContactBarContainer>
    </>
  )
}

export default ContactBar