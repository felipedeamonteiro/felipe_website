import React, { useState, useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroContainer from "../components/IntroContainer";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Sidebar from "../components/Sidebar";

interface HomeProps {
  toggleTheme: () => void;
  theme: {
    title: string;
  };
}

function Home({ toggleTheme, theme: { title } }: HomeProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (title === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [title]);

  const handleDarkMode = () => {
    toggleTheme();
  };

  const toogleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogleSidebar} />
      <Navbar
        toogle={toogleSidebar}
        handleDarkMode={handleDarkMode}
        darkMode={darkMode}
      />
      <IntroContainer darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <AboutMe darkMode={darkMode} />
      <ContactMe darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default Home;
