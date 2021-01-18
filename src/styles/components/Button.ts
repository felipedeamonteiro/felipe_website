import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 370px;
  height: 40px;
  padding: 10px;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
  outline: none;
  background: linear-gradient(to bottom, #6dd4fd, #2800b3);

  &:hover {
    background: ${shade(0.2, '#6dd4fd')};
  }
`;
