import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Hero />
      </Router>
    </div>
  );
};

export default App;
