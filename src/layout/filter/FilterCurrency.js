import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const filterCurrency = () => {
  return (
    <div className="mx-3 mb-3">
      <h4>Валюта</h4>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-outline-info active">
          <input type="radio" name="options" id="currency-uan" />
          UAN
        </label>
        <label className="btn btn-outline-info">
          <input type="radio" name="options" id="currency-usd" />
          USD
        </label>
        <label className="btn btn-outline-info">
          <input type="radio" name="options" id="currency-eur" />
          EUR
        </label>
      </div>
    </div>
  );
};

filterCurrency.propTypes = {};

export default filterCurrency;
