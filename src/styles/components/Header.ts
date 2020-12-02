import styled from 'styled-components';

export const Container = styled.div`
  background: #8257e5;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .home-div {
    padding-left: 20px;

    h1 {
      font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive, 
    }
  }

  .menu-div {
    padding-right: 20px;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;