import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const filterPrice = () => {
  return (
    <div className="mx-3 mb-3">
      <h4>Цена</h4>
      <div className="form-row">
        <div className="form-group row mx-3">
          <label htmlFor="price-from" className="col-form-label">
            От
          </label>
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="price-from"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group row mx-3">
          <label htmlFor="price-to" className="col-form-label">
            До
          </label>
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="price-to"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

filterPrice.propTypes = {};

export default filterPrice;
