import React from 'react';
import Navbar from '../components/Navbar/nav';
import Gallery from '../components/Gallery/gallery';
import Hero from '../components/Hero/hero';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div className="container">
       <Helmet>
          <title>Elemental | Home</title>
          <meta name="elemental" content="Home" />
        </Helmet>
      <Navbar />
      <Hero />
      <Gallery />
    </div>
  );
}

export default App;
