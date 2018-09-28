import React from 'react';
// import PropTypes from 'prop-types'

const FilterRating = () => {
  return (
    <div className="mb-3">
      <h4>Рейтинг</h4>
      <p className="text-warning">
        <i className="fas fa-star fa-lg mr-1" />
        <i className="fas fa-star fa-lg mr-1" />
        <i className="far fa-star fa-lg mr-1" />
        <i className="far fa-star fa-lg mr-1" />
        <i className="far fa-star fa-lg" />
      </p>
    </div>
  );
};

FilterRating.propTypes = {};

export default FilterRating;
