import React from 'react';
import Navbar from '../components/Navbar/nav';
import Gallery from '../components/Gallery/gallery';
import Hero from '../components/Hero/hero';

const App = () => {
  return (
    
    <div className="container">
      <Navbar />
      <Hero />
      <Gallery />
    </div>
  );
}

export default App;
