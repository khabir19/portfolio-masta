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
            SOBRE
          </IconContainer>
          <IconContainer to="/filmes" rel="noreferrer">
            FILMES E SÉRIES
          </IconContainer>
          <IconContainer to="/teatro" rel="noreferrer">
            TEATRO
          </IconContainer>
          <IconContainer to="/publicidade" rel="noreferrer">
            PUBLICIDADE
          </IconContainer>
        </IconsContainer>
      </ContactBarContainer>
    </>
  )
}

export default ContactBar