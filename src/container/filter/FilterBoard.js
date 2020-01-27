import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import CurrencyBoard from '../currency/CurrencyBoard';
import RoomsBoard from '../room/RoomsBoard';
import RatingBoard from '../rating/RatingBoard';
import PriceBoard from '../price/PriceBoard';
import SelectionBoard from '../selection/SelectionBoard';

import {
  pushToUrlWithQuery,
  pushToUrlWithoutQuery,
  getParsedObject,
  getNumberFromString,
} from '../../utils/filters';

import * as actions from '../../store';

class FilterBoard extends Component {
  componentDidMount() {
    const { history, setFilter } = this.props;
    const filters = getParsedObject(history);
    Object.keys(filters).forEach(name => setFilter(name, getNumberFromString(name, filters[name])));
  }

  handleFilter = (name, value) => {
    const { setFilter, history, filters } = this.props;
    setFilter(name, value);
    pushToUrlWithQuery(history, filters, name, value);
  };

  handleClearFilters = () => {
    const { resetFilters, history } = this.props;
    resetFilters();
    pushToUrlWithoutQuery(history);
  };

  render() {
    const { filters, getCurrencyUSD, getCurrencyEUR } = this.props;
    const showSelectionBoard = filters.room || filters.priceMin || filters.priceMax
    || filters.rating;
    return (
      <div className='bg-white p-2 text-left'>
        <div className='mb-3'>
          <h4>Валюта</h4>
          <CurrencyBoard
            handleFilter={this.handleFilter}
            getCurrencyUSD={getCurrencyUSD}
            getCurrencyEUR={getCurrencyEUR}
            sign={filters.currency}
          />
        </div>
        <div className='mb-3'>
          <h4>Количество комнат</h4>
          <RoomsBoard handleFilter={this.handleFilter} room={filters.room} />
        </div>
        <div className='mb-3'>
          <h4>Цена</h4>
          <PriceBoard
            handleFilter={this.handleFilter}
            min={filters.priceMin}
            max={filters.priceMax}
          />
        </div>
        <div className='mb-3'>
          <h4>Рейтинг</h4>
          <RatingBoard handleFilter={this.handleFilter} rating={filters.rating} active />
        </div>
        <div className='mb-2'>
          {showSelectionBoard ? (
            <SelectionBoard
              filters={filters}
              handleFilter={this.handleFilter}
              handleClearFilters={this.handleClearFilters}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

FilterBoard.propTypes = {
  resetFilters: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  getCurrencyUSD: PropTypes.func.isRequired,
  getCurrencyEUR: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    room: PropTypes.number,
    priceMin: PropTypes.number,
    priceMax: PropTypes.number,
    rating: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    createHref: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    block: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  filters: state.property.filters,
});

export default connect(mapStateToProps, actions)(FilterBoard);
