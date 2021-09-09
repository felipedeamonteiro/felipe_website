import React, { useState, useCallback, useEffect } from 'react';
import { useDeviceScreenSize, useWindowSize } from '../hooks/useDeviceScreenSize';
import BulbSwitch from './BulbSwitch';
import { Nav, NavbarContainer, NavbarHome, MobileContent, MobileIcon, NavMenu, NavItem, NavLinks } from '../styles/components/Navbar';
import { FaBars } from 'react-icons/fa';

interface NavbarProps {
  toogle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toogle }) => {
  const [viewNavBar, setViewNavBar] = useState<boolean>(false);

  const { width: screenWidth, height: screenHeight } = useWindowSize();
  const { isMobile, isTablet } = useDeviceScreenSize();

  const changeNavBarBackground = useCallback(() => {
    if ((!isMobile && !isTablet) && (window.scrollY >= 180)) {
      setViewNavBar(true);
    } else if ((!isMobile && !isTablet) && (window.scrollY < 180)) {
      setViewNavBar(false)
    }
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNavBarBackground);
  }

  // useEffect(() => {
  //   console.log('window x screen', screenWidth);
  // }, [screenWidth]);
  // console.log('isMobile', isMobile);
  // console.log('isTablet', isTablet);

  return (
    <>
      <Nav viewNavBar={viewNavBar}>
        <NavbarContainer>
          <NavbarHome href="#section-home">HOME</NavbarHome>

          {(!isMobile && !isTablet) ? (
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
          ) : (
            <MobileContent>
              <BulbSwitch />
              <MobileIcon onClick={toogle}>
                <FaBars />
              </MobileIcon>
            </MobileContent>
          )}
        </NavbarContainer>
      </Nav>
    </>
  );
}


export default Navbar;