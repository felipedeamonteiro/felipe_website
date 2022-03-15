import styled, { css } from 'styled-components';

interface ContainerCard3DProps {
  aTagStyle: boolean;
}

export const Container = styled.div<ContainerCard3DProps>`
  position: relative;
  width: 320px;
  height: 320px;
  margin: 20px;
  perspective: 1000px;
  transform: perspective(1000px);
  transform-style: preserve-3d;

  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: 1s ease;

    .imgBox-front {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      backface-visibility: hidden;          

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .contentBx-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      //background: #333;
      background: linear-gradient(45deg, #6dd4fd, #2800b3);
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      transform-style: preserve-3d;
      z-index: -1; //TODO: Remover gambiarra */
      transform: rotateY(180deg);

      a {
        text-decoration: none;

        ${props =>
          props.aTagStyle &&
          css`
            cursor: not-allowed;
          `
        }

        div {
          transform-style: preserve-3d;
          
          padding: 20px;
          //background: linear-gradient(45deg, #6dd4fd, #2800b3);
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
  }

  &:hover .box {
    transform: rotateY(180deg);
  }
`;