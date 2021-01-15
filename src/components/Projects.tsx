import React from 'react';

import { Container } from '../styles/components/Projects';

const Projects: React.FC = () => {
  return (
    <Container>
      <h1>Projects</h1>

      <div className="cards-container">
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src="" alt=""/>
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
              <img src="" alt=""/>
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
              <img src="" alt=""/>
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
              <img src="" alt=""/>
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
              <img src="" alt=""/>
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