import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact'
//import Navigation from './components/Navigation';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
          {/* Default route: Home */}
          <Route exact path="/" element={<Home />} />
          {/* Route for Portfolio */}
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Route for About Me */}
          <Route path="/about" element={<About />} />
          {/* Route for Contact */}
          <Route path="/contact" element={<Contact />} />
          {/* Route for Resume */}
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;