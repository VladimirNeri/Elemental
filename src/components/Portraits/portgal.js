import * as React from 'react';
import Masonry from 'react-masonry-css';
import data from '../../data/posts';
import PropTypes from 'prop-types'; 

const Portgal = () => {
  let portData = data.filter((data) => data.category === 'portrait');
  const newData = portData.slice().reverse();

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

Portgal.propTypes ={
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired, 
    category: PropTypes.string.isRequired
  }))
}

Portgal.defaultProps = {
  data: [],
}

export default Portgal;
