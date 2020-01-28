import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import CurrencyBoard from '../currency/CurrencyBoard';
import RoomsBoard from '../room/RoomsBoard';
import RatingBoard from '../rating/RatingBoard';
import PriceBoard from '../price/PriceBoard';
import SelectionBoard from '../selection/SelectionBoard';

import { pushToUrl, stringifyQuery, parsedQuery } from '../../utils/filters';

import * as actions from '../../store';

const FilterBoard = ({ setFilters, filters, getCurrencyUSD, getCurrencyEUR }) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const parsed = parsedQuery(history);
    setFilters(parsed);
  }, [history, setFilters, location]);

  const handleFilter = (key, value) => {
    const query = stringifyQuery(filters, key, value);
    pushToUrl(history, query);
  };

  const handleClearFilters = () => {
    pushToUrl(history);
  };

  const showSelectionBoard = filters.room || filters.priceMin || filters.priceMax || filters.rating;
  return (
    <div className='bg-white p-2 text-left'>
      <div className='mb-3'>
        <h4>Валюта</h4>
        <CurrencyBoard
          handleFilter={handleFilter}
          getCurrencyUSD={getCurrencyUSD}
          getCurrencyEUR={getCurrencyEUR}
          sign={filters.currency}
        />
      </div>
      <div className='mb-3'>
        <h4>Количество комнат</h4>
        <RoomsBoard handleFilter={handleFilter} room={filters.room} />
      </div>
      <div className='mb-3'>
        <h4>Цена</h4>
        <PriceBoard handleFilter={handleFilter} min={filters.priceMin} max={filters.priceMax} />
      </div>
      <div className='mb-3'>
        <h4>Рейтинг</h4>
        <RatingBoard handleFilter={handleFilter} rating={filters.rating} active />
      </div>
      <div className='mb-2'>
        {showSelectionBoard ? (
          <SelectionBoard
            filters={filters}
            handleFilter={handleFilter}
            handleClearFilters={handleClearFilters}
          />
        ) : null}
      </div>
    </div>
  );
};

FilterBoard.propTypes = {
  setFilters: PropTypes.func.isRequired,
  getCurrencyUSD: PropTypes.func.isRequired,
  getCurrencyEUR: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    room: PropTypes.number,
    priceMin: PropTypes.number,
    priceMax: PropTypes.number,
    rating: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  filters: state.property.filters,
});

export default connect(mapStateToProps, actions)(FilterBoard);
