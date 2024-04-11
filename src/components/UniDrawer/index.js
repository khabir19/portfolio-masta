import React from 'react'
import {
  ContactBarContainer, 
  ContactBarArrowContainer, 
  ContactBarArrowIcon, 
  IconsContainer,
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
          <IconContainer to="/assinaturas" rel="noreferrer">
            ASSINATURAS
          </IconContainer>
          <IconContainer to="/assistencias" rel="noreferrer">
            ASSISTÊNCIAS
          </IconContainer>
          {/* <IconContainer to="/teatro" rel="noreferrer">
            TEATRO
          </IconContainer>
          <IconContainer to="/publicidade" rel="noreferrer">
            PUBLICIDADE
          </IconContainer> */}
        </IconsContainer>
      </ContactBarContainer>
    </>
  )
}

export default ContactBar