import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../../data/blogposts/08062020';
import { Pagstyl } from './blog.style';
import dayjs from 'dayjs';

const Fall = () => {
  let pagData = data.filter((data) => data.title === 'Fall');

  return (
    <Pagstyl>
      {pagData.map((post) => (
        <header key={post.id}>
          <div>
            <Helmet>
              <title>Elemental | Fall</title>
              <meta name='description' content='Posts' />
            </Helmet>
          </div>
          <h1>{post.title}</h1>
          <time className='published'>
            <i>posted on {dayjs(post.date).format('MMMM DD, YYYY')}</i>
          </time>
          <img
            src={post.image.image1}
            alt={post.title}
            className='image'
            width='1000'
          />
          <h3>"Ut enim consequatur?"</h3>
          <p className='description'>{post.desc}</p>
          <img
            src={post.image.image2}
            alt={post.title}
            className='fall-image'
            width='550'
          />
          <img
            src={post.image.image3}
            alt={post.title}
            className='fall-image'
            height='725'
            width='550'
          />

          <video
            src={post.video}
            type='video/mp4'
            className='video'
            width='750'
            height='500'
            controls
          />
        </header>
      ))}
    </Pagstyl>
  );
};

export default Fall;
