import React from 'react';

import FotoFelipe from '../../public/Foto_felipe2.png';
import { Container } from '../styles/components/AboutMe';

const AboutMe: React.FC = () => (
  <Container>
    <div className="skills-wrapper">
      <div className="about-me">
        <img src={FotoFelipe} alt="Foto de Felipe"/>
        <div className="label_bold">Sobre mim</div>
        <div className="description">
          Sou Engenheiro FullStack.
          <br />
          Tenho uma paixão por tecnologia e por construir!
          <br />
          Mas contruir o que?
          <br />
          Construir soluções inteligentes para problemas diversos.{' '}
          <br />
          <span className="page-link-highlight">
            Quer saber mais? Entre em contato e vamos tomar um café.
          </span>
        </div>
      </div>
      
      <div className="skills-bars">

        <div className="bar-flex">
          <div className="bar-fill">
            <div className="tag bold flex">CSS</div>
          </div>
          <span>90%</span>
        </div>

        <div className="bar-flex">
          <div className="bar-fill">
            <div className="tag bold flex">HTML</div>
          </div>
          <span>90%</span>
        </div>

        <div className="bar-flex">
          <div className="bar-fill">
            <div className="tag bold flex">Javascript</div>
          </div>
          <span>70%</span>
        </div>
        
        <div className="bar-flex">
          <div className="bar-fill">
            <div className="tag bold flex">React</div>
          </div>
          <span>70%</span>
        </div>

        <div className="bar-flex">
          <div className="bar-fill">
            <div className="tag bold flex">React-Native</div>
          </div>
          <span>65%</span>
        </div>

        <div className="bar-flex">
          <div className="bar-fill">
            <div className="tag bold flex">Nodejs</div>
          </div>
          <span>60%</span>
        </div>

        <div className="bar-flex">
          <div className="bar-fill">
            <div className="tag bold flex">Python</div>
          </div>
          <span>45%</span>
        </div>

      </div>
    </div>
  </Container>
);

export default AboutMe;