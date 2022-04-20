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
        border-color: ${(props) => props.theme.colors.inputBorderError};
      `}

    ${props =>
      props.isDisabled &&
      css`
        background: ${(props) => props.theme.colors.inputBorderDisabled};
      `}

    &::placeholder {
      color: ${(props) => props.theme.colors.inputBorderPlaceholder};
    }

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.colors.inputBorderFocus};
    }
  }

  label {
    font-weight: 500;
  }

  input:focus + label {
    color: ${(props) => props.theme.colors.inputBorderLabelFocus};
  }
`;
