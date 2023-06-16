import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/portfolio/fogareu/fogareu2.jpg';
import img2 from '../assets/portfolio/fogareu/fogareu4.jpg';

export const Grid = styled.div` 
  display: flex;
  flex-direction: column;  
`;

export const WrapperNavHeadear = styled.div`
  display: flex;  

  background-image: url(${img1});
  height: 720px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 700px) {
    background-image: url(${img2});
  }
`;

export const WrapperElements = styled.div`
  display: flex;

  @media (max-width: 700px) {
      flex-direction: column-reverse;
    }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 700px) {
    flex-direction: column;
  }
  `;

export const ColText = styled.div`
  margin: 30px;
  padding: 30px;
  text-align: justify;
  
  @media (max-width: 700px) {
    border: 1px solid #ddd; 
    margin: 10px 80px 0px 80px;
    padding-top: 1px;
    justify-content: flex-end;
  }
`;

export const ColImage = styled.img`
  border: 1px solid #ddd; 
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  @media (max-width: 700px) {
    width: 80%;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  color: darkcyan;

  font-family: Quicksand;
`;