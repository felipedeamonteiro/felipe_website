import React, { useState } from 'react';
import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IntroContainer from '../components/IntroContainer';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Sidebar from '../components/Sidebar';

function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toogleSidebar = () => {
    setIsOpen(!isOpen);
    console.log('fui clicado');
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogleSidebar} />
      <Navbar toogle={toogleSidebar} />
      <IntroContainer />
      {/* <Experience />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Footer /> */}
    </>
  )
}

export default Home;
