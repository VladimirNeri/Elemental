import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../../data/blogposts/08062020';
import { Pagstyl } from './blog.style';

const Spring = () => {
  let pagData = data.filter((data) => data.title === 'Spring');
  return (
    <Pagstyl>
      {pagData.map((post) => (
        <header key={post.id}>
          <div>
            <Helmet>
              <title>Elemental | Spring</title>
              <meta name='description' content='Posts' />
            </Helmet>
          </div>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
          <img src={post.image.image1} alt={post.title} className='image' />
          <p>"Ut enim consequatur?"</p>
          <img src={post.image.image2} alt={post.title} className='image' />
        </header>
      ))}
    </Pagstyl>
  );
};

export default Spring;
