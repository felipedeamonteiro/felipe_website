import styled from 'styled-components';

export const Container = styled.div`
  background: #212529;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  .home-div {
    padding-left: 20px;

    h1 {
      color: #00CDE2;
      font-size: 26px;
      font-weight: 400;
      font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive; 
    }
  }

  .menu-div {
    padding-right: 20px;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      color: #fff;
      font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 95%;
      font-weight: 400;
      letter-spacing: 1px;
      transition: color 0.2s;

      :hover {
        color: #00CDE2;
        cursor: pointer;
      }
    }
  }
`;