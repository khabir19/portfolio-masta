import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

export const ContactBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    overflow-y: scroll;
    max-height: calc(110vh);
    
    &:hover {
        transition: width 300px;
    }
    
    &::-webkit-scrollbar {
      display: none;
    }
`;

export const IconsContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? '' : 'none')};
  background-color: rgba(158, 121, 140, 1);    
  overflow-y: scroll;
  max-height: calc(110vh);
  margin: 25px 0px 0px 25px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1015px) {
    margin: 10px 0px 0px 10px;
  }    
`;

export const IconContainer = styled(Link)`
  text-align: left;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: rgba(250, 250, 250, 1);
  text-decoration: none;
  display: flex;
  padding: 1.5vh;
  transition: all 0.2s ease-in;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }  
`;

export const ContactBarArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  margin: 25px 0px 0px 25px;    
    
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
    height: 40px;
    margin: 10px 0px 0px 10px;
    background-color: rgba(158, 121, 140, 0.8);
    &:hover {
      background-color: rgba(158, 121, 140, 0.8);        
    }
  }
`;

export const ContactBarArrowIcon = styled(FiMenu)`
  color: white;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : '')};
  transition: 0.5s;
`;