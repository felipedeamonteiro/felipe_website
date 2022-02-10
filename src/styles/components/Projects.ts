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
      color: #838b93;
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

    .card-container {
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
          background: #333;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          /* z-index: -1; //TODO: Remover gambiarra */
          transform: rotateY(180deg);

          a {
            text-decoration: none;

            div {
              transform-style: preserve-3d;
              
              padding: 20px;
              background: linear-gradient(45deg, #6dd4fd, #2800b3);
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
    }
  }
  
  /* @media only screen and (max-width: 414px) {
    width: 401%;
  }

  @media only screen and (min-width: 415px) and (max-width: 975px) {
    width: 122%;
  } */

  
  
`;