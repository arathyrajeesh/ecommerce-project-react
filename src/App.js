import React from 'react';
import Header from '../src/components/Header'
import Hero from '../src/components/Hero';
import './App.css'; 
import PromoBanners from './components/PromoBanner';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <PromoBanners/>
    </div>
  );
}

export default App;