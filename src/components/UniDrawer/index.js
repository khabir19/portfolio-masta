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
        </IconsContainer>
      </ContactBarContainer>
    </>
  )
}

export default ContactBar