import React from 'react';
import PropTypes from 'prop-types';

const filterCurrency = () => {
  return (
    <div>
      <h2>Валюта</h2>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary">
          UAN
        </button>
        <button type="button" className="btn btn-secondary">
          USD
        </button>
        <button type="button" className="btn btn-secondary">
          EUR
        </button>
      </div>
    </div>
  );
};

filterCurrency.propTypes = {};

export default filterCurrency;
