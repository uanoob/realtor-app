import React from 'react';
import PropTypes from 'prop-types';

const filterRooms = ({ label, htmlFor, name, id, value, onClick }) => {
  return (
    <div className="custom-control custom-radio">
      <input
        className="custom-control-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onClick={onClick}
      />
      <label className="custom-control-label" htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};

filterRooms.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default filterRooms;
