import styled from 'styled-components';

export const Container = styled.div`
  height: 890px;
  padding: 30px;

  .skills-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .about-me{

      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 4px solid #00CDE2;
        object-fit: cover;
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
        margin-bottom: 15px;
        height: 50px;

        .bar-fill {
          width: 50%;
          padding: 10px;

          .tag-name {
            background: #175422;
          }
        }
      }
    }
  }

  
`;