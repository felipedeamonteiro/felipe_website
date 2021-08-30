import styled from 'styled-components';
import { mobileScreenMax, tabletScreenMax } from '../helperScreens';

// export const Container = styled.nav`
//   top: 0;
//   position: sticky;
//   background: transparent;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 30px;
//   z-index: 1000;
//   transition: background-color .5s;

//   &.navbarActive {
//     background: #252525;
//     transition: background-color .5s;
//   }

//   .home-div {
//     padding: 0 20px;
    
//     h1 {
//       display: flex;
//       align-items: center;
//       text-align: center;

//       a {
//         color: #00CDE2;
//         font-size: 26px;
//         font-weight: 400;
//         font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive; 
//         text-decoration: none;
//         transition: font-size .5s;

//         :hover {
//           text-decoration: none;
//           transition: font-size .5s;
//           font-size: 30px;
//           cursor: pointer;
//         }

//         :focus, :active, :visited {
//           text-decoration: none;
//         }
//       }
//     }
//   }

//   .bulb-div {
//     position: static;
//   }

//   .menu-div {
//     padding-right: 20px;
//     width: 80%;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;

//     h2 {
//       margin-bottom: 5px;
      
//       a {
//         color: #fff;
//         font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
//         font-size: 18px;
//         font-weight: 400;
//         letter-spacing: 1px;
//         transition: color 0.2s;
//         text-decoration: none;

//         :hover {
//           color: #00CDE2;
//           cursor: pointer;
//           text-decoration: none;
//         }
//         :focus, :active, :visited {
//           text-decoration: none;
//         }
//       }
      
//     }
//   }

//   @media only screen and (max-width: ${mobileScreenMax}) {
//     width: 100%;
//   }

//   @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
//     width: 100%;
//   }

//   @media screen and (max-width: ${tabletScreenMax}) {
    

//     .hamburguer {
//       .line {
//         width: 30px;
//         height: 3px;
//         background: #fff;
//         margin: 5px;
//       }
//     }

//     .menu-div {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       position: fixed;
//       background: #252525;
//       height: 100vh;
//       width: 100%;
//       flex-direction: column;
//       //display: none;
//     }
//   }
// `;

export const Nav = styled.nav`
  background: #252525;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media screen and (max-width: ${tabletScreenMax}) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavbarHome = styled.a`
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
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${tabletScreenMax}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: ${tabletScreenMax}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  /* height: 80px; */
`;

export const NavLinks = styled.a`
  color: #fff;
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
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

`;