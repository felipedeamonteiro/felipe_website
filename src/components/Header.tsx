import React, { useState, useCallback, useEffect } from 'react';
import { useDeviceScreenSize, useWindowSize } from '../hooks/useDeviceScreenSize';
import BulbSwitch from './BulbSwitch';
import { Container } from '../styles/components/Header';

const Header: React.FC = () =>  {
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

  //Criar hook de tamanhos de telas
  // Video do hamburguer: https://www.youtube.com/watch?v=H4MkGzoACpQ

  return (
    <>
      {(isMobile || isTablet) ? (
        <Container className="navbarActive">
          <BulbSwitch />
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="menu-div">
            <h2><a href="#section-home">HOME</a></h2>
            <h2><a href="#section-experiencia">EXPERIÊNCIA</a></h2>
            <h2><a href="#section-projetos">PROJETOS</a></h2>
            <h2><a href="#section-sobreMim">SOBRE MIM</a></h2>
            <h2><a href="#section-contato">CONTATO</a></h2>
          </div>
        </Container>
      ) : (
        <Container className={viewNavBar ? 'navbarActive' : ''}>
          <div className="home-div">
            <h1><a href="#section-home">HOME</a></h1>
          </div>
          <div className="menu-div">
            <BulbSwitch />
            <h2><a href="#section-experiencia">EXPERIÊNCIA</a></h2>
            <h2><a href="#section-projetos">PROJETOS</a></h2>
            <h2><a href="#section-sobreMim">SOBRE MIM</a></h2>
            <h2><a href="#section-contato">CONTATO</a></h2>
          </div>
        </Container>
      )}
    </>
  );
} 
  

export default Header;