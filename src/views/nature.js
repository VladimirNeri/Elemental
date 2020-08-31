import React from 'react'; 
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/nav';
import Natgal from '../components/Nature/natgal';

const Nature = () => { 
  return (
    <div className="container">
      <Helmet>
          <title>Elemental | Nature</title>
          <meta name="description" content="Nature Gallery" />
      </Helmet>
      <Navbar />
      <Natgal/>
    </div>
  );
}

export default Nature;