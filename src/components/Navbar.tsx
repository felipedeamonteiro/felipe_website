import React, { useState, useCallback, useEffect } from 'react';
import { useDeviceScreenSize, useWindowSize } from '../hooks/useDeviceScreenSize';
import BulbSwitch from './BulbSwitch';
import { Nav, NavbarContainer, NavbarHome, MobileIcon, NavMenu, NavItem, NavLinks } from '../styles/components/Navbar';
import { FaBars } from 'react-icons/fa';

interface NavbarProps {
  toogle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toogle }) =>  {
  const [viewNavBar, setViewNavBar] = useState<boolean>(false);

  const {width: screenWidth, height: screenHeight} = useWindowSize();
  const {isMobile, isTablet} = useDeviceScreenSize();

  const changeBackground = useCallback(() => {
    if (window.scrollY >= 180) {
      setViewNavBar(true);
    } else {
      setViewNavBar(false)
    }
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBackground);
  }

  useEffect(() => {
    console.log('window x screen', screenWidth);
  } , [screenWidth]);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarHome href="#section-home">HOME</NavbarHome>
          
          <NavMenu>
            <BulbSwitch />
            <NavItem>
              <NavLinks href="#section-experiencia">EXPERIÊNCIA</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#section-projetos">PROJETOS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#section-sobreMim">SOBRE MIM</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#section-contato">CONTATO</NavLinks>
            </NavItem>
          </NavMenu>
          <MobileIcon onClick={toogle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
} 
  

export default Navbar;