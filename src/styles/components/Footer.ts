import styled from 'styled-components';
import { mobileScreenMax, tabletScreenMax } from '../helperScreens';

export const Container = styled.footer`
  height: 60px;
  background: #c0faeb;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;

  @media only screen and (max-width: ${mobileScreenMax}) {
    width: 401%;
  }

  @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
    width: 122%;
  }
`;