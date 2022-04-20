import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;

  label {
    font-weight: 500;
  }

  textarea {
    resize: none;
    border: 1px solid ${(props) => props.theme.colors.textAreaBorder};
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
      border: 1px solid ${(props) => props.theme.colors.textAreaBorderFocus};
    }
  }

  textarea:focus + label {
    color: ${(props) => props.theme.colors.textAreaLabelFocus};
  }
`;
