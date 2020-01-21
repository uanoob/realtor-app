import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import CurrencyItem from '../../layout/currency/CurrencyItem';
import { getCurrencySign } from '../../utils/currency';

const CurrencyBoard = ({ getCurrencyUSD, getCurrencyEUR, handleFilter, sign }) => {
  useEffect(() => {
    getCurrencyUSD();
    getCurrencyEUR();
  }, [getCurrencyUSD, getCurrencyEUR]);

  const handleCurrency = e => {
    e.preventDefault();
    handleFilter(e.target.name, getCurrencySign(e.target.id));
  };

  return (
    <div className='btn-group btn-group-toggle' data-toggle='buttons'>
      <CurrencyItem
        id='CURRENCY_UAH'
        label='UAH'
        isActive={sign === 'uah'}
        onChange={handleCurrency}
      />
      <CurrencyItem
        id='CURRENCY_USD'
        label='USD'
        isActive={sign === 'usd'}
        onChange={handleCurrency}
      />
      <CurrencyItem
        id='CURRENCY_EUR'
        label='EUR'
        isActive={sign === 'eur'}
        onChange={handleCurrency}
      />
    </div>
  );
};

CurrencyBoard.propTypes = {
  getCurrencyUSD: PropTypes.func.isRequired,
  getCurrencyEUR: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  sign: PropTypes.string.isRequired,
};

export default CurrencyBoard;
