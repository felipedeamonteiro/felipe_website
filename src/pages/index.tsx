import AboutMe from '../components/AboutMe';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroContainer from '../components/IntroContainer';

export default function Home() {
  return (
    <div>
      <Header />
      <IntroContainer />
      <AboutMe />
      <Footer />
    </div>
  )
}
