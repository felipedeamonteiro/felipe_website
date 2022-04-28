import styled from 'styled-components';

interface ContainerProps {
  darkMode: boolean;
}

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;

  label {
    font-weight: 500;
    font-size: 18px;
    color: ${(props) => props.theme.colors.TextAreaLabel};
  }

  textarea {
    resize: none;
    border: ${props => props.darkMode ? '4px' : '1px'} solid ${(props) => props.theme.colors.textAreaBorder};
    //color: ${(props) => props.theme.colors.textAreaText};
    border-radius: 4px;
    padding: 5px;
    font-size: 16px;
    height: 170px;
    font-family: 'Roboto Slab', serif;

    /* &::placeholder {
      color: ${(props) => props.theme.colors.textAreaPlaceholder};
    } */

    &:focus {
      outline: none;
      border: ${props => props.darkMode ? '4px' : '1px'} solid ${(props) => props.theme.colors.textAreaBorderFocus};
    }
  }

  textarea:focus + label {
    color: ${(props) => props.theme.colors.textAreaLabelFocus};
  }
`;
