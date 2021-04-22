import React from 'react';

import { Container } from '../styles/components/Header';

const Header: React.FC = () =>  {
  return (
    <Container>
      <div className="home-div">
        <h1><a href="#section-home">HOME</a></h1>
      </div>
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