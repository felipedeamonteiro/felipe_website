import React, { ImgHTMLAttributes } from 'react';

import { Container } from '../styles/components/Experience';
import LetrusImg from '../../public/letrus.png';
import AprendizImg from '../../public/AprendizDigital.png';
import FormulaImg from '../../public/FormulaSAE.png';
import LdemImg from '../../public/LDEM.jpg';
import MeuColegioImg from '../../public/MeuColegio.png';
import NubankImg from '../../public/Nubank.jpg';
import SiemensImg from '../../public/Siemens.jpg';

const Experience: React.FC = () => {

  return (
    <Container>
      <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">EXPERIÊNCIA PROFISSIONAL</h2>
              <h3 className="section-subheading text-muted">Etapas da carreira profissional</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">

                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={FormulaImg} alt="Fórmula SAE Unicamp"/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>1 - DE 2009 A 2010</h4>
                      <h4 className="subheading">FÓRMULA SAE UNICAMP</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">FIZ PARTE DA DIVISÃO DE FREIOS, ONDE PROJETAMOS TODO O SISTEMA DE FREIOS DO CARRO F-2009. NOS classNameIFICAMOS EM 5º LUGAR.</p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={LdemImg} alt="LDEM logo"/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2 - DE 2011 A 2013</h4>
                      <h4 className="subheading">INICIAÇÃO CIENTÍFICA NO ANTIGO LDEM UNICAMP</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">INICIÇÃO CIENTÍFICA NA ÁREA DE VIBRAÇÕES MECÂNICAS COM BOLSA DO CNPQ. ESTUDEI FENÔMENOS VIBRATÓRIOS EM ENGRENAGENS PLANETÁRIAS DE TRANSMISSÕES AUTOMÁTICAS.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={MeuColegioImg} alt="Meu colegio logo"/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>3 - 2º SEMESTRE DE 2013</h4>
                      <h4 className="subheading">MEU COLÉGIO</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">TRABALHEI COMO PROFESSOR DO COLÉGIO TÉCNICO NOTURNO.</p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={SiemensImg} alt="Siemens"/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>4 - DE JUNHO A DEZEMBRO DE 2014</h4>
                      <h4 className="subheading">SIEMENS INDUSTRY SOFTWARE</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">ESTÁGIO NA PARTE DE SOFTWARES LMS (ATUAL SIMCENTER) QUE ATUAM NA SIMULAÇÃO E TESTES DE PROJETOS.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={SiemensImg} alt="Siemens"/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>5 - DE JANEIRO DE 2015 A MARÇO DE 2016</h4>
                      <h4 className="subheading">SIEMENS INDUSTRY SOFTWARE</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">TRABALHEI COM PRÉ E PÓS VENDA TÉCNICA DO SOFTWARE PREACTOR, QUE CUIDA DA PROGRAMAÇÃO E PLANEJAMENTO DO PROCESSO DE PRODUÇÃO DE INDÚSTRIAS.</p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={NubankImg} alt="Nubank"/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>6 - DE MARÇO A JUNHO DE 2017</h4>
                      <h4 className="subheading">NUBANK</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">ATUEI COMO ANALISTA DE RELACIONAMENTO AO CLIENTE NOS SETORES DE BILLS E CHARGEBACK.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={AprendizImg} alt="Aprendiz Digital"/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>7 - DE JUNHO DE 2016 ATÉ OUTUBRO DE 2019</h4>
                      <h4 className="subheading">APRENDIZ DIGITAL</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">FUI FUNDADOR DESTA STARTUP DA ÁREA DA EDUCAÇÃO. ELA OFERECIA SERVIÇOS DE AULAS PARTICULARES DE EXATAS E PROGRAMAÇÃO.</p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img alt="Letrus" className="rounded-circle img-fluid" src={LetrusImg} />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>8 - DE JANEIRO A SETEMBRO DE 2020</h4>
                      <h4 className="subheading">LETRUS</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">ATUEI COMO DESENVOLVEDOR FRONTEND NOS DIVERSOS PROJETOS DA EMPRESA. ATUEI COM DESIGN SYSTEM, INTEGRAÇÃO COM HUBSPOT, RESOLUÇÃO DE BUGS, MANUTENÇÃO/ATUALIZAÇÃO DO CÓDIGO E PARTICIPAÇÃO NA CRIAÇÃO DE UM BACKOFFICE.</p>
                    </div>
                  </div>
                </li> 

                
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>READY FOR
                    <br/>NEW
                    <br/>CHALLENGES!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </Container>
  );  
};

export default Experience;