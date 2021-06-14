import styled from 'styled-components';

export const Container = styled.nav`
  top: 0;
  position: sticky;
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 1000;
  transition: background-color .5s;

  &.navbarActive {
    background: #03316b;
    transition: background-color .5s;
  }

  .home-div {
    padding-left: 20px;
    
    h1 {
      display: flex;
      align-items: center;
      text-align: center;

      a {
        color: #00CDE2;
        font-size: 26px;
        font-weight: 400;
        font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive; 
        text-decoration: none;
        transition: font-size .5s;

        :hover {
          text-decoration: none;
          transition: font-size .5s;
          font-size: 30px;
          cursor: pointer;
        }

        :focus, :active, :visited {
          text-decoration: none;
        }
      }
    }
  }

  .menu-div {
    padding-right: 20px;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      a {
        color: #fff;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 1px;
        transition: color 0.2s;
        text-decoration: none;

        :hover {
          color: #00CDE2;
          cursor: pointer;
          text-decoration: none;
        }
        :focus, :active, :visited {
          text-decoration: none;
        }
      }
      
    }
  }
`;
