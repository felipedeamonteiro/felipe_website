import React from 'react';

import FotoFelipe from '../../public/Foto_felipe2.png';
import LogoUnicamp from '../../public/unicamp.png';
import { Container } from '../styles/components/AboutMe';

const AboutMe: React.FC = () => (
  <Container>
    <h1>Sobre mim</h1>
    <div className="skills-wrapper">
      <div className="about-me">
        <img src={FotoFelipe} alt="Foto de Felipe"/>
        <div className="label_bold">Quem sou eu?</div>
        <div className="description">
          Sou Engenheiro FullStack.
          <br />
          Tenho paixão por tecnologia e por construir!
          <br />
          <p>Mas construir o que?</p>
          Construir soluções inteligentes para problemas diversos.{' '}
          <br />
          <span className="page-link-highlight">
            Quer saber mais? Entre em contato e vamos tomar um café.
          </span>
        </div>
      </div>
      
      <div className="skills-bars">

        <div className="bar-flex">
          <div className="bar-content">
            <div className="bar-tag">
              CSS
            </div>
            <div className="bar-fill-css">
              <span>90%</span>
            </div>
          </div>
          
        </div>

        <div className="bar-flex">
          <div className="bar-content">
            <div className="bar-tag">HTML
            </div>
            <div className="bar-fill-html">
              <span>90%</span>
            </div>
          </div>
        </div>

        <div className="bar-flex">
          <div className="bar-content">
            <div className="bar-tag">JavaScript
            </div>
            <div className="bar-fill-javascript">
              <span>80%</span>
            </div>
          </div>
        </div>

        <div className="bar-flex">
          <div className="bar-content">
            <div className="bar-tag">React
            </div>
            <div className="bar-fill-react">
              <span>80%</span>
            </div>
          </div>
        </div>
        
        <div className="bar-flex">
          <div className="bar-content">
            <div className="bar-tag">React-Native
            </div>
            <div className="bar-fill-react-native">
              <span>75%</span>
            </div>
          </div>
        </div>

        <div className="bar-flex">
          <div className="bar-content">
            <div className="bar-tag">Node.js
            </div>
            <div className="bar-fill-nodejs">
              <span>70%</span>
            </div>
          </div>
        </div>

        <div className="bar-flex">
          <div className="bar-content">
            <div className="bar-tag">Python
            </div>
            <div className="bar-fill-python">
              <span>60%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="degree-div">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">FORMAÇÃO ACADÊMICA</h2>

        <h3 className="section-subheading text-muted">Formação sólida em instituição de Ensino Superior de renome no Brasil</h3>
      </div>
      <div className="box1">
        <img alt="Logo Unicamp" className="unicamp-img" src={LogoUnicamp} />
        <h4 className="service">Graduação em Engenharia Mecânica - UNICAMP - Concluído em Janeiro de 2015</h4>
      </div>

      <div className="box2">
        <img alt="Logo Unicamp" className="unicamp-img" src={LogoUnicamp} />
        <h4 className="service">Mestrado em Ciência da Computação - Inteligência Artificial e Robótica - UNICAMP - Interrompido</h4>
      </div>
    </div>
  </Container>
);

export default AboutMe;