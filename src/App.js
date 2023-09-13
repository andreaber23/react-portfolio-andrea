import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact'
import Navigation from './pages/Navigation';
import Resume from './pages/Resume'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Route for Home*/}
          <Route path='/'element={<Home />}/>
          {/* Route for Portfolio */}
          <Route path='/portfolio'element={<Portfolio />}/>
          {/* Route for About Me */}
          <Route path='/about'element={<About />}/>
          {/* Route for Contact */}
          <Route path='/contact'element={<Contact />}/>
          {/* Route for Nav */}
          <Route path='/navigation'element={<Navigation />}/>
          {/* Route for Resume */}
          <Route path='/resume'element={<Resume />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
