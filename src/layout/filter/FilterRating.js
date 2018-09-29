import React from 'react';
import PropTypes from 'prop-types';

const FilterRating = ({ name, id, onClick }) => {
  return (
    <div className="custom-control custom-radio">
      {/* <i className="far fa-star fa-lg mr-1" style={{ cursor: 'pointer' }} /> */}
      <input
        className="custom-control-input"
        type="radio"
        name={name}
        id={id}
        onClick={onClick}
      />
    </div>
  );
};

FilterRating.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterRating;
