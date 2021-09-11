import React, { useState, useCallback, useEffect } from 'react';
import { useDeviceScreenSize, useWindowSize } from '../hooks/useDeviceScreenSize';
import BulbSwitch from './BulbSwitch';
import { Nav, NavbarContainer, NavbarHome, MobileContent, MobileIcon, NavMenu, NavItem, NavLinks } from '../styles/components/Navbar';
import { FaBars } from 'react-icons/fa';

interface NavbarProps {
  toogle: () => void;
  handleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toogle, handleDarkMode, darkMode }) => {
  const [viewNavBar, setViewNavBar] = useState<boolean>(false);

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

  return (
    <>
      <Nav viewNavBar={viewNavBar}>
        <NavbarContainer>
          <NavbarHome href="#section-home">HOME</NavbarHome>

          {(!isMobile && !isTablet) ? (
            <NavMenu>
              <BulbSwitch handleDarkMode={handleDarkMode} darkMode={darkMode} />
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
              <BulbSwitch handleDarkMode={handleDarkMode} darkMode={darkMode} />
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