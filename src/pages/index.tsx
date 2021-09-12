import React, { useState, useCallback } from 'react';
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
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toogleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogleSidebar} />
      <Navbar toogle={toogleSidebar} handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <IntroContainer darkMode={darkMode} />
      <Experience />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  )
}

export default Home;
