import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text-center-row {
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
    }
  }

  .contact-form-div {
    padding-bottom: 40px;
  }
`;