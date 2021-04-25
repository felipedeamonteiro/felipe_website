import React from 'react';

import { Container } from '../styles/components/Projects';
import CaosImg from '../../public/caos_focado_test.png';
import CredereImg from '../../public/credere_test.png';
import VenturusImg from '../../public/venturus_test.png';
import CodeMinerImg from '../../public/code_miner.png';
import ContaSimplesImg from '../../public/conta_simples.jpeg';



const Projects: React.FC = () => {
  return (
    
    <Container id="section-projetos">
      <div className="text-center-row">
        <h1>Projetos</h1>
        <h3>Projetos de testes de processos seletivos de empresas</h3>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src={CaosImg} alt="Imagem do Teste Caos Focado"/>
            </div>
            <div className="contentBx">
              <a target="_blank" rel="noopener noreferrer" href="https://caos-focado-frontend-test-git-master.felipedeamonteiro.vercel.app/">
                <div>
                  <h2>Teste para Dev Frontend - Caos Focado</h2>
                  <p>O projeto se baseia em contruir uma listagem de clínicas, previamente dadas e também de um formulário para adicionar mais clínicas. Tinha a tarefa de seguir o layout dado, trabalhar com a Api dos correios e ordenação.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src={CredereImg} alt="Imagem do Teste da Credere"/>
            </div>
            <div className="contentBx">
              <a target="_blank" rel="noopener noreferrer" href="https://credere-frontend-test.vercel.app/">
                <div>
                  <h2>Teste para Dev Backend - Credere</h2>
                  <p>O Projeto é FullStack, possui um backend hospedado na Digital Ocean e o Front na Vercel, onde temos uma "sonda" que pode se locomover num plano 2D.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src={VenturusImg} alt="Imagem do teste da venturus"/>
            </div>
            <div className="contentBx">
              <a target="_blank" rel="noopener noreferrer" href="https://venturus-frontend-test-2020.vercel.app/">
                <div>
                  <h2>Teste para Dev Frontend - Venturus</h2>
                  <p>Neste projeto toda aplicação está somente no frontend. A ideia era criar uma dashboard nos moldes do CartolaFC onde se criava times personalizados de futebol usando uma API externa. O layout é bem complexo e é um dos trabalhos mais desafiadores que eu fiz.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src={CodeMinerImg} alt="Imagem do Teste Caos Focado"/>
            </div>
            <div className="contentBx">
              <a style={{ cursor: 'not-allowed' }}>
                <div>
                  <h2>Teste para Dev FullStack - Code Miner</h2>
                  <p>Ainda em construção...</p>
                </div>
              </a>           
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src={ContaSimplesImg} alt="Imagem do Teste da Credere"/>
            </div>
            <div className="contentBx">
              <a style={{ cursor: 'not-allowed' }}>
                <div>
                  <h2>Teste para Dev FullStack - Conta Simples</h2>
                  <p>Backend pronto, mas ainda falta o front. Em contrução...</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;