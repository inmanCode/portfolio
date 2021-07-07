import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import About from './components/About';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Technologies />
      <Projects />
      <About />
    </div>
  );
}

export default App;
