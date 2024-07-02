import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Skills from './components/skills';
import Counter from './components/counter';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {

  return (

    <div className="App">
      <Header />
      <Hero />
      <About />
      <Counter />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
