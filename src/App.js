import React from 'react';

import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';

import CardMain from './components/CardMain';



function App() {
  return (
    <div className = "App" >
    <Header />
    <CardMain />
    <Cards />
    <About />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;