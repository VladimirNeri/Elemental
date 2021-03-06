import React from 'react'; 
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/nav';
import Signup from '../components/Search/search';

const Signpage= () => { 
  return (
    <div className="container">
      <Helmet>
          <title>Elemental | Search</title>
          <meta name="description" content="Signup Page" />
        </Helmet>
      <Navbar />
      <Signup />
    </div>
  );
}

export default Signpage;