import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import CurrencyBoard from '../currency/CurrencyBoard';
import RoomsBoard from '../room/RoomsBoard';
import RatingBoard from '../rating/RatingBoard';
import PriceBoard from '../price/PriceBoard';

import { getRatingById } from '../../utils/filters';

import * as actions from '../../store';

class FilterBoard extends Component {
  handleClearFilter = () => {
    const { resetFilters, clearCurrencySign, isFiltered } = this.props;
    resetFilters();
    clearCurrencySign();
    isFiltered(false);
  };

  render() {
    const { filters } = this.props;
    const showClearButton = filters.roomQuantity || filters.priceMin || filters.priceMax
    || filters.rating;
    return (
      <div className='bg-white p-2 text-left'>
        <div className='mb-3'>
          <h4>Валюта</h4>
          <CurrencyBoard />
        </div>
        <div className='mb-3'>
          <h4>Количество комнат</h4>
          <RoomsBoard />
        </div>
        <div className='mb-3'>
          <h4>Цена</h4>
          <PriceBoard />
        </div>
        <div className='mb-3'>
          <h4>Рейтинг</h4>
          <RatingBoard rating={getRatingById(filters.rating)} active />
        </div>
        <div className='mb-2'>
          {showClearButton ? (
            <div className='row text-left'>
              <div className='col-sm-10'>
                <input
                  type='button'
                  value='Сбросить'
                  className='btn btn-outline-danger'
                  onClick={this.handleClearFilter}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

FilterBoard.propTypes = {
  resetFilters: PropTypes.func.isRequired,
  clearCurrencySign: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  isFiltered: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.property.filters,
});

export default connect(mapStateToProps, actions)(FilterBoard);
