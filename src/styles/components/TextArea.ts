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
    border: 1px solid grey;
    border-radius: 4px;
    padding: 5px;
    font-size: 16px;
    height: 170px;
    font-family: 'Roboto Slab', serif;

    &::placeholder {
      color: #b5bcc7;
    }

    &:focus {
      outline: none;
      border: 1px solid #2800b3;
    }
  }

  textarea:focus + label {
    color: #2800b3;
  }
`;
