import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CurrencyItem = ({
  id, label, onChange, checked, isActive,
}) => (
  <label
    className={classnames('btn btn-outline-info', {
      active: isActive,
    })}
    htmlFor={id}
  >
    <input type="radio" name="CHANGE_CURRENCY" id={id} checked={checked} onChange={onChange} />
    {label}
  </label>
);

CurrencyItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default CurrencyItem;
