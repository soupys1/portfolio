import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Projects from './components/Projects';
import About    from './components/About';
import Skills   from './components/Skills';
import Footer   from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
