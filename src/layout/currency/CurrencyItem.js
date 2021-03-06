import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CurrencyItem = ({ id, label, onChange, isActive }) => (
  <label
    className={classnames('btn btn-outline-info', {
      active: isActive,
    })}
    htmlFor={id}
  >
    <input type='radio' name='currency' id={id} onChange={onChange} />
    {label}
  </label>
);

CurrencyItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default CurrencyItem;
