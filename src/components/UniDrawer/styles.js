import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineLinkedin, AiFillMediumSquare, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';
import { BsFillCaretRightFill } from 'react-icons/bs';

export const ContactBarContainer = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow-y: scroll;
    max-height: calc(110vh);
    
    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 1015px) {
        /* display: none; */
    }
`

export const IconsContainer = styled.div`
    width: 200%;
    display: ${({ isOpen }) => (isOpen ? '' : 'none')};
    background-color: rgba(158, 121, 140, 1);    
    overflow-y: scroll;
    max-height: calc(110vh);
    
    &::-webkit-scrollbar {
      display: none;
    }
`
export const MenuTitleContainer = styled.div`
    text-align: center;
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 25px;
    color: rgba(250, 250, 250, 1);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0px 20px 0px;
    padding: 1.5vh;    
    
    @media screen and (max-width: 1015px) {      
      margin: 5px 0px 10px 0px;
      padding: 1.5vh;    
    }
`

export const IconContainer = styled(Link)`
    text-align: center;
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: rgba(250, 250, 250, 1);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    padding: 1.5vh;

    &:hover {
      color: rgba(0, 0, 0, 1);
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      -webkit-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }

  
`

export const LinkedInIcon = styled(AiOutlineLinkedin)`
    text-decoration: none;
    color: black;
    &:hover {
        color: blue;
        cursor: pointer;
    }
`

export const GitHubIcon = styled(AiFillGithub)`
    text-decoration: none;
    color: black;
    &:hover {
        color: orange;
        cursor: pointer;
    }
`

export const InstagramIcon = styled(AiOutlineInstagram)`
    text-decoration: none;
    color: black;
    &:hover {
        color: pink;
        cursor: pointer;
    }
`

export const MediumIcon = styled(AiFillMediumSquare)`
    text-decoration: none;
    color: black;
    &:hover {
        color: #64ffda;
        cursor: pointer;
    }
`

export const ContactBarArrowContainer = styled.div`
    width: 100px;
    height: 100px;
    background-color: rgba(158, 121, 140, 1);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(158, 121, 140, 0.6);
        cursor: pointer;
    }
    
    @media screen and (max-width: 1015px) {
      width: 40px;
      height: 60px;
      background-color: rgba(158, 121, 140, 0.8);
      text-align: center;
      &:hover {
        background-color: rgba(158, 121, 140, 0.8);
        cursor: none;
      }
    }
`

export const ContactBarArrowIcon = styled(BsFillCaretRightFill)`
    color: white;
    font-weight: bold;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : '')};
`