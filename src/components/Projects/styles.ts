import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 30px 30px 30px;

  .text-center-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin-top: 60px;
      font-size: 45px;
      font-family: 'Orbitron', sans-serif;
    }

    h3 {
      margin: 25px 0 50px 0;
      font-style: 'italic';
      font-weight: lighter;
      color: ${(props) => props.theme.colors.projectsContainerH3};
      text-align: center;
    }
  }

  .cards-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    width: 100%;
    cursor: pointer;
  }
  
  /* @media only screen and (max-width: 414px) {
    width: 401%;
  }

  @media only screen and (min-width: 415px) and (max-width: 975px) {
    width: 122%;
  } */

  
  
`;