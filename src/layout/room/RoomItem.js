import React from 'react';
import PropTypes from 'prop-types';

const RoomItem = ({ label, htmlFor, name, id, checked, onChange }) => (
  <div className='custom-control custom-radio'>
    <input
      className='custom-control-input'
      type='radio'
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
    />
    <label className='custom-control-label' htmlFor={htmlFor}>
      {label}
    </label>
  </div>
);

RoomItem.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RoomItem;
