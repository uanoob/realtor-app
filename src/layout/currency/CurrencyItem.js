import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CurrencyItem = ({ id, label, onChange, isActive }) => {
  return (
    <label
      className={classnames('btn btn-outline-info', {
        active: isActive,
      })}
    >
      <input type="radio" name="CHANGE_CURRENCY" id={id} onChange={onChange} />
      {label}
    </label>
  );
};

CurrencyItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default CurrencyItem;
