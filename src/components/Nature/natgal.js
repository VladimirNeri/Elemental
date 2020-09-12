import * as React from 'react';
import Masonry from 'react-masonry-css';
import PropTypes from 'prop-types'; 
import data from '../../data/posts';
// import Natcell from './natcell';

const Natgal = () => {
  let natData = data.filter((data) => data.category === 'nature');
  const newData = natData.slice().reverse();
  return (
    <Masonry
      breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {newData.map((post) => (
        <div className="image" key={post.id}>
          <a href={`#${post.path}`}>
            <img src={post.image} alt={post.title} className="image" />
          </a>
        </div>
      ))}
    </Masonry>
  );
};

Natgal.propTypes ={
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired, 
    category: PropTypes.string.isRequired
  }))
}

Natgal.defaultProps = {
  data: [],
}

export default Natgal;
