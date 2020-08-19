import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from '../components/Navbar/nav';
import Fall from '../components/Blog/fall';
import Summer from '../components/Blog/summer';
import Spring from '../components/Blog/spring';
import Winter from '../components/Blog/winter';

const Blog = () => {
  return (
    <div className="container">
      <Navbar />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/blog/fall" component={Fall} />
          <Route path="/blog/summer" component={Summer} />
          <Route path="/blog/spring" component={Spring} />
          <Route path="/blog/winter" component={Winter} />
        </Switch>
      </Router>
    </div>
  );
};

export default Blog;
