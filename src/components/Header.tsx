import React from 'react';

import { Container } from '../styles/components/Header';

const Header: React.FC = () => (
  <Container>
    <div className="home-div">
      <h1>Home</h1>
    </div>
    <div className="menu-div">
      <h2>Experiência</h2>
      <h2>Qualificações</h2>
      <h2>Projetos</h2>
      <h2>Sobre Mim</h2>
      <h2>Contato</h2>
    </div>
  </Container>
);

export default Header;