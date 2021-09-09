import styled from 'styled-components';
import backgroundImage from '../../../public/backgroundImage.jpg';
import { mobileScreenMax, tabletScreenMax } from '../helperScreens';


export const Container = styled.section`
  top: 0;
  margin-top: -85px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 775px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 30px 30px;

 

  h3 {
    font-family: 'Orbitron', sans-serif;
    color: white;
    font-weight: 200;
    font-size: 50px;
    text-align: center;
    margin-top: 200px;
  }

  h1 {
    color: #fff;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    font-size: 75px;
    text-align: center;
  }

  @media only screen and (max-width: ${tabletScreenMax}) {
    background: black;

    h3 {
      font-size: 30px;
    }

    h1 {
      font-size: 50px;
      margin-bottom: 100px;
    }
    
  }

  /* @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
    width: 122%;
  } */
`;