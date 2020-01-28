import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PriceItem from '../../layout/price/PriceItem';

const PriceBoard = ({ handleFilter, min, max }) => {
  const [priceMin, setPriceMin] = useState(min);
  const [priceMax, setPriceMax] = useState(max);

  const onChange = e => {
    if (e.target.name === 'priceMin') {
      setPriceMin(e.target.value);
    }
    if (e.target.name === 'priceMax') {
      setPriceMax(e.target.value);
    }
  };

  const clearForm = () => {
    setPriceMin(null);
    setPriceMax(null);
  };

  const onClick = () => {
    if (priceMin) {
      handleFilter('priceMin', Number(priceMin));
    }
    if (priceMax) {
      handleFilter('priceMax', Number(priceMax));
    }
    clearForm();
  };

  return (
    <>
      <div className='form-group d-flex  justify-content-between flex-wrap wrap'>
        <PriceItem
          placeholder='От'
          name='priceMin'
          id='FILTER_PRICE_MIN'
          value={priceMin}
          onChange={onChange}
        />
        <div className='mr-4'>
          <input type='button' value='Ok' className='btn btn-outline-info' onClick={onClick} />
        </div>
      </div>
      <div className='form-group d-flex  justify-content-between flex-wrap wrap'>
        <PriceItem
          placeholder='До'
          name='priceMax'
          id='FILTER_PRICE_MAX'
          value={priceMax}
          onChange={onChange}
        />
        <div className='mr-4'>
          <input type='button' value='Ok' className='btn btn-outline-info' onClick={onClick} />
        </div>
      </div>
    </>
  );
};

PriceBoard.defaultProps = {
  min: null,
  max: null,
};

PriceBoard.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default PriceBoard;
