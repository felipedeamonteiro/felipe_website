import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 60px 0;
    font-size: 45px;
    font-family: 'Orbitron', sans-serif;
  }

  .cards-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    width: 1100px;

    .card {
      position: relative;
      width: 320px;
      height: 320px;
      margin: 20px;
      transform-style: preserve-3d;
      perspective: 1000px;

      .box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: 1s ease;

        .imgBox {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .contentBx {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #333;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          transform: rotateY(180deg);

          div {
            transform-style: preserve-3d;
            padding: 20px;
            background: linear-gradient(45deg, #fe0061, #ffeb3b);
            transform: translateZ(100px);

            h2 {
              color: #fff;
              font-size: 20px;
              letter-spacing: 1px;
            }

            p {
              color: #fff;
              font-size: 16px;
            }
          }
        }
      }

      &:hover .box {
        transform: rotateY(180deg);
      }
    }
  }

  
  
`; 