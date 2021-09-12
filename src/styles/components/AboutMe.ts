import styled, { keyframes, css } from 'styled-components';
import { desktopScreenMin, mobileScreenMax, tabletScreenMax } from '../helperScreens';

interface ContainerProps {
  sobreMimInViewport: boolean;
}

const fillCssAndHtml = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.95);
  }
`;

const fillJavascriptAndReact = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.85);
  }
`;

const fillReactNative = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.75);
  }
`;

const fillNodejs = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.7);
  }
`;

const fillPython = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.6);
  }
`;

export const Container = styled.section<ContainerProps>`
  padding: 100px 30px 30px 30px;
  background: #d7d8fc;

  

  h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 45px;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
  }

  .skills-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: ${mobileScreenMax}) {
      display: flex;
      align-items: center;
      flex-direction: column;
      .description {
        margin-bottom: 30px;
      }

      .bar-tag {
        font-size: 12px;
      }
    }

    @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
      display: flex;
      align-items: center;
      flex-direction: column;
      .description {
        margin-bottom: 30px;
      }
    }

    .about-me{
      width: 100%;
      max-width: 700px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 6px solid #00c5f2;
        object-fit: cover;
      }
      
      .description {
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        line-height: 30px;

        p {
          color: #7100d1;
        }

        .page-link-highlight {
          color: #00c5f2;
        }
      }

      .label_bold {
        margin: 10px 0;
        font-size: 30px;
        color: gray;
        font-family: 'Orbitron', sans-serif;
      }
    }

    .skills-bars {
      width: 100%;

      .bar-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background: #edeef5;
        margin-bottom: 25px;
        height: 30px;

        .bar-content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: inherit;

          .bar-tag {
            width: 20%;
            background: #00c5f2;
            color: #fff; 
            font-weight: bold;
            padding: 0 6px 0 6px;
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          
          ${props => props.sobreMimInViewport &&
    css`
              .bar-fill-css {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, #70008c, #7100d1);
                animation: ${fillCssAndHtml} 4s forwards;
              }
            `}   

          ${props => props.sobreMimInViewport &&
    css`
              .bar-fill-html {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, #70008c, #7100d1);
                animation: ${fillCssAndHtml} 4s forwards;
              }
            `}
          
          ${props => props.sobreMimInViewport &&
    css`
              .bar-fill-javascript {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, #70008c, #7100d1);
                animation: ${fillJavascriptAndReact} 4s forwards;
              }
            `}

          
          ${props => props.sobreMimInViewport &&
    css`
              .bar-fill-react {
              height: inherit;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              background: linear-gradient(to bottom, #70008c, #7100d1);
              animation: ${fillJavascriptAndReact} 4s forwards;
              }
            `}

          
          ${props => props.sobreMimInViewport &&
    css`
              .bar-fill-react-native {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, #70008c, #7100d1);
                animation: ${fillReactNative} 4s forwards;
              }
            `}

          ${props => props.sobreMimInViewport &&
    css`
              .bar-fill-nodejs {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, #70008c, #7100d1);
                animation: ${fillNodejs} 4s forwards;
              }
            `}

          
          ${props => props.sobreMimInViewport &&
    css`
              .bar-fill-python {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, #70008c, #7100d1);
                animation: ${fillPython} 4s forwards;
              }
            `}

          span {
            margin-right: 5px;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }

  .degree-div {
    margin: 100px 0;

    .text-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 70px;

      h2 {
        font-size: 28px;
      }

      h3 {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 300;
        font-style: italic;
        font-family: 'Audiowide', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    }

    .box1, .box2, .box3 {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      img {
        max-width: 8%;
      }

      h4 {
        font-size: 25px;
        margin-left: 10px;
        text-align: center;
      }
    }
  }

  /* @media only screen and (max-width: 414px) {
    width: 401%;
  }

  @media only screen and (min-width: 415px) and (max-width: 975px) {
    width: 122%;
  } */
`;