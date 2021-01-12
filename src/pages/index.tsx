import AboutMe from '../components/AboutMe';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroContainer from '../components/IntroContainer';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Header />
      <IntroContainer />
      <Experience />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  )
}
