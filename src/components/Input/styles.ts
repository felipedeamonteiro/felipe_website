import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isDisabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column-reverse;

  input {
    width: 370px;
    margin-bottom: 30px;
    box-sizing: border-box;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 5px;
    font-size: 16px;
    font-family: 'Roboto Slab', serif;

    ${props =>
      props.isErrored &&
      css`
        border-color: #ff0000;
      `}

    ${props =>
      props.isDisabled &&
      css`
        background: #d3d3d3;
      `}

    &::placeholder {
      color: #b5bcc7;
    }

    &:focus {
      outline: none;
      border: 1px solid #2800b3;
    }
  }

  label {
    font-weight: 500;
  }

  input:focus + label {
    color: #2800b3;
  }
`;
