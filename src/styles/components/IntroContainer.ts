import styled from 'styled-components';
import backgroundImage from '../../../public/background_image.jpg';


export const Container = styled.div`
  margin: 0;
  background: url(${backgroundImage}) round;
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-family: 'Lemonada', cursive;
    color: white;
    font-weight: 400px;
    font-size: 50px;
  }

  h1 {
    margin: 0;
    color: #fff;
    font-weight: 900px;
    font-family: 'Roboto Slab', serif;
    font-size: 75px;
  }
`;