import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './App.css'; 
import Header from './components/Header';
import Resume from './pages/Resume';
import Footer from './components/Footer';
function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
