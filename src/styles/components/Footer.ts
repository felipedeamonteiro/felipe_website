import styled from 'styled-components';

export const Container = styled.footer`
  height: 60px;
  background: #c0faeb;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;

  @media only screen and (max-width: 414px) {
    width: 401%;
  }

  @media only screen and (min-width: 415px) and (max-width: 975px) {
    width: 122%;
  }
`;