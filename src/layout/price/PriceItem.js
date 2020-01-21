import React from 'react';
import PropTypes from 'prop-types';

const PriceItem = ({ placeholder, name, id, value, onChange }) => (
  <div className='col'>
    <input
      type='text'
      className='form-control'
      placeholder={placeholder}
      name={name}
      id={id}
      value={value || ''}
      onChange={onChange}
    />
  </div>
);

PriceItem.defaultProps = {
  value: '',
};

PriceItem.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default PriceItem;
