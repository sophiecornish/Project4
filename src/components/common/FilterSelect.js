import React from 'react';
import { Link } from 'react-router-dom';

const FilterSelect = ( { products }) => {
  // state = {
  //   products: []
  // };

  const parentStyle = {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    maxHeight: 500,
    overflow: 'scroll',
    backgroundColor: 'white',
    zIndex: 2
  };

  return (
    <div style={{ position: 'relative'}}>
      <div style={parentStyle}>
        {products.map(product =>
          <Link key={product._id} className="media" to={`/products/${product._id}`}>
            <div className="media-left">
              <img style={{ height: 60}} src={product.imgUrl}></img>
            </div>
            <div className="media-content">
              <p>{product.product}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FilterSelect;
