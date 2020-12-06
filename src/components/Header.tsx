import React from 'react';

import { Container } from '../styles/components/Header';

const Header: React.FC = () => (
  <Container>
    <div className="home-div">
      <h1>HOME</h1>
    </div>
    <div className="menu-div">
      <h2>EXPERIÊNCIA</h2>
      <h2>QUALIFICAÇÕES</h2>
      <h2>PROJETOS</h2>
      <h2>SOBRE MIM</h2>
      <h2>CONTATO</h2>
    </div>
  </Container>
);

export default Header;