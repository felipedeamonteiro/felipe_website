import styled from 'styled-components';
import { tabletScreenMax, mobileScreenMax } from '../helperScreens';

interface NavbarProps {
  viewNavBar: boolean;
}

export const Nav = styled.nav<NavbarProps>`
  background: ${(props: NavbarProps) => props.viewNavBar ? '#252525' : 'tranparent'};
  height: 80px;
  transition: background-color .5s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  
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

export const MobileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  @media screen and (max-width: ${mobileScreenMax}) {
    width: 45%;
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