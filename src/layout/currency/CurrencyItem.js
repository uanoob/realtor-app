import React from 'react';
// import PropTypes from 'prop-types';

const CurrencyItem = ({ id, label, onClick }) => {
  return (
    <label className="btn btn-outline-info">
      <input type="radio" name="CHANGE_CURRENCY" id={id} onClick={onClick} />
      {label}
    </label>
  );
};

CurrencyItem.propTypes = {};

export default CurrencyItem;
