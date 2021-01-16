import React from 'react';

import { Container } from '../styles/components/Projects';
import CaosImg from '../../public/caos_focado_test.png';
import CredereImg from '../../public/credere_test.png';
import VenturusImg from '../../public/venturus_test.png';


const Projects: React.FC = () => {
  return (
    <Container>
      <h1>Projects</h1>

      <div className="cards-container">
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src={CaosImg} alt="Imagem do Teste Caos Focado"/>
            </div>
            <div>
              <h2>Project Title</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src={CredereImg} alt="Imagem do Teste da Credere"/>
            </div>
            <div>
              <h2>Project Title</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src={VenturusImg} alt="Imagem do teste da venturus"/>
            </div>
            <div>
              <h2>Project Title</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBox">
            <img src={CaosImg} alt="Imagem do Teste Caos Focado"/>
            </div>
            <div>
              <h2>Project Title</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBox">
            <img src={CredereImg} alt="Imagem do Teste da Credere"/>
            </div>
            <div>
              <h2>Project Title</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>

      
    </Container>
  );
}

export default Projects;