import React from 'react';
import data from '../../data/blogposts/08062020';
import { Pagstyl } from './blog.style';

const Fall = () => {
  let pagData = data.filter((data) => data.title === 'Fall');

  return (
    <Pagstyl>
      {pagData.map((post) => (
        <header key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
          <img src={post.image.image1} alt={post.title} className="image" />
          <p>"Ut enim consequatur?"</p>
          <img src={post.image.image2} alt={post.title} className="image2" />
        </header>
      ))}
    </Pagstyl>
  );
};

export default Fall;
