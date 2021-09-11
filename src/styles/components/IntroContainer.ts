import styled from 'styled-components';
import darkThemeImage from '../../../public/blue_night_sky.jpg';
import lightThemeImage from '../../../public/brightsky.jpg';
import { mobileScreenMax, tabletScreenMax } from '../helperScreens';

interface IntroContainerProps {
  darkMode: boolean;
}

export const Container = styled.section<IntroContainerProps>`
  top: 0;
  margin-top: -85px;
  background-image: url(${(props: IntroContainerProps) => props.darkMode ? darkThemeImage : lightThemeImage});
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
  transition: background-image 0.5s ease-in-out;

 

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
    margin-bottom: 150px;
  }

  @media only screen and (max-width: ${tabletScreenMax}) {
    
    h3 {
      font-size: 30px;
      margin-top: 230px;
    }

    h1 {
      font-size: 50px;
      margin-bottom: 150px;
    }
  }
`;