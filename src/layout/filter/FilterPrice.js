import React from 'react';
import PropTypes from 'prop-types';

const filterPrice = () => {
  return (
    <div>
      <h2>Цена</h2>
      <form className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
          <label for="price-min">
            От 
          </label>
          <input
            type="number"
            className="form-control"
            id="price-min"
            placeholder=""
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label for="price-max">
            До 
          </label>
          <input
            type="number"
            className="form-control"
            id="price-max"
            placeholder=""
          />
        </div>
      </form>
    </div>
  );
};

filterPrice.propTypes = {};

export default filterPrice;
