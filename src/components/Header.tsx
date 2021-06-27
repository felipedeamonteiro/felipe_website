import React, { useState, useCallback } from 'react';

import BulbSwitch from './BulbSwitch';
import { Container } from '../styles/components/Header';

const Header: React.FC = () =>  {
  const [viewNavBar, setViewNavBar] = useState<boolean>(false);

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

  return (
    <Container className={viewNavBar ? 'navbarActive' : ''}>
      <div className="home-div">
        <h1><a href="#section-home">HOME</a></h1>
      </div>
      <BulbSwitch />
      <div className="menu-div">
        <h2><a href="#section-experiencia">EXPERIÊNCIA</a></h2>
        <h2><a href="#section-projetos">PROJETOS</a></h2>
        <h2><a href="#section-sobreMim">SOBRE MIM</a></h2>
        <h2><a href="#section-contato">CONTATO</a></h2>
      </div>
    </Container>
  );
} 
  

export default Header;