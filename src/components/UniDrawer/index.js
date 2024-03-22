import React from 'react'
import {
  ContactBarContainer, ContactBarArrowContainer, ContactBarArrowIcon, IconsContainer,
  IconContainer
} from './styles.js'

const ContactBar = () => {
  const [isDisplayed, setIsDisplayed] = React.useState(false);

  const toggle = () => {
    setIsDisplayed(!isDisplayed);
  }

  return (
    <>
      <ContactBarContainer>
        <ContactBarArrowContainer onClick={toggle}>
          <ContactBarArrowIcon isOpen={isDisplayed} />
        </ContactBarArrowContainer>
        <IconsContainer isOpen={isDisplayed}>
          <IconContainer to="/sobre" rel="noreferrer">
            BIO
          </IconContainer>
          <IconContainer to="/filmes" rel="noreferrer">
            Filmes
          </IconContainer>
          <IconContainer to="/series" rel="noreferrer">
            Séries
          </IconContainer>
          <IconContainer to="/teatro" rel="noreferrer">
            Teatro
          </IconContainer>
          <IconContainer to="/publicidade" rel="noreferrer">
            Publicidade
          </IconContainer>
        </IconsContainer>
      </ContactBarContainer>
    </>
  )
}

export default ContactBar