import * as React from 'react';
import Masonry from 'react-masonry-css';
import data from '../../data/posts';
import PropTypes from 'prop-types';

const Gallery = () => {
  /* reverse array so latest post is on top */
  const newData = data.slice().reverse();
  // const breakpointColumnsObj = {
  //   default: 4,
  //   1100: 3,
  //   700: 2,
  //   500: 1
  // };
  return (
    <Masonry
      breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {newData.map((post) => (
        <div className='image' key={post.id}>
          <a href={`#${post.path}`}>
            <img src={post.image} alt={post.title} className='image' />
          </a>
        </div>
      ))}
    </Masonry>
  );
};

Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};

Gallery.defaultProps = {
  data: [],
};

export default Gallery;
