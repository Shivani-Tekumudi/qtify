import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Cards from './components/Card/Cards';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    < Navbar />
    <Hero />
   <Cards />
    </div>
    </BrowserRouter>
  );
}

export default App;
