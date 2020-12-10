import styled, { keyframes } from 'styled-components';

const fillCssAndHtml = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.9);
  }
`;

const fillJavascriptAndReact = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.75);
  }
`;

const fillReactNative = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.7);
  }
`;

const fillNodejs = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.65);
  }
`;

const fillPython = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.55);
  }
`;

export const Container = styled.div`
  height: 840px;
  padding: 100px 30px 30px 30px;

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
        border: 4px solid #00c5f2;
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
        background: lightgray;
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
            padding: 0 15px 0 15px;
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .bar-fill-css {
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            animation: ${fillCssAndHtml} 4s forwards;
            background: linear-gradient(to bottom, #70008c, #7100d1);
          }

          

          .bar-fill-html {
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            animation: ${fillCssAndHtml} 4s forwards;
            background: linear-gradient(to bottom, #70008c, #7100d1);
          }

          .bar-fill-javascript {
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            animation: ${fillJavascriptAndReact} 4s forwards;
            background: linear-gradient(to bottom, #70008c, #7100d1);
          }

          .bar-fill-react {
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            animation: ${fillJavascriptAndReact} 4s forwards;
            background: linear-gradient(to bottom, #70008c, #7100d1);
          }

          .bar-fill-react-native {
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            animation: ${fillReactNative} 4s forwards;
            background: linear-gradient(to bottom, #70008c, #7100d1);
          }

          .bar-fill-nodejs {
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            animation: ${fillNodejs} 4s forwards;
            background: linear-gradient(to bottom, #70008c, #7100d1);
          }

          .bar-fill-python {
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            animation: ${fillPython} 4s forwards;
            background: linear-gradient(to bottom, #70008c, #7100d1);
          }

          span {
            margin-right: 5px;
            color: white;
            font-weight: bold;
          }
        }
      }
    }
  } 
`;