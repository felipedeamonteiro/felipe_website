import React, { useState, useCallback } from "react";
import { useDeviceScreenSize } from "../../hooks/useDeviceScreenSize";
import BulbSwitch from "../BulbSwitch";
import {
  Nav,
  NavbarContainer,
  NavbarHome,
  MobileContent,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles";
import { FaBars } from "react-icons/fa";
import ButtonNeon1 from "../Buttons/ButtonNeon1";
import ButtonNeon2 from "../Buttons/ButtonNeon2";
import ButtonNeon3 from "../Buttons/ButtonNeon3";
import NeonButtonReal from "../Buttons/NeonButtonReal";

interface NavbarProps {
  toogle: () => void;
  handleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  toogle,
  handleDarkMode,
  darkMode,
}) => {
  const [viewNavBar, setViewNavBar] = useState<boolean>(false);

  const { isMobile, isTablet } = useDeviceScreenSize();

  const changeNavBarBackground = useCallback(() => {
    if (!isMobile && !isTablet && window.scrollY >= 180) {
      setViewNavBar(true);
    } else if (!isMobile && !isTablet && window.scrollY < 180) {
      setViewNavBar(false);
    }
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavBarBackground);
  }

  return (
    <>
      <Nav viewNavBar={viewNavBar}>
        <NavbarContainer>
          <NavbarHome href="#section-home">HOME</NavbarHome>

          {!isMobile && !isTablet ? (
            <NavMenu>
              <BulbSwitch handleDarkMode={handleDarkMode} darkMode={darkMode} />
              <NavItem>
                {/* <NavLinks href="#section-experiencia">EXPERIÊNCIA</NavLinks> */}
                <ButtonNeon1 />
              </NavItem>
              <NavItem>
                {/* <NavLinks href="#section-projetos">PROJETOS</NavLinks> */}
                <ButtonNeon2 />
              </NavItem>
              <NavItem>
                {/* <NavLinks href="#section-sobreMim">SOBRE MIM</NavLinks> */}
                <ButtonNeon3 />
              </NavItem>
              <NavItem>
                {/* <NavLinks href="#section-contato">CONTATO</NavLinks> */}
                <NeonButtonReal />
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
};

export default Navbar;
