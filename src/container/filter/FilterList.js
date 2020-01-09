import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Filter.css';
import CurrencyItem from '../../layout/currency/CurrencyItem';
import FilterRooms from '../../layout/filter/FilterRooms';
import FilterPrice from '../../layout/filter/FilterPrice';
import FilterRating from '../../layout/filter/FilterRating';

import getFiltersCards from '../../utils/filters';
import { toggleCurrency, getCurrencySign } from '../../utils/currency';

import {
  getCurrencyUSD,
  getCurrencyEUR,
  changeCurrency,
  setCurrencySign,
  clearCurrencySign,
  resetFilters,
  isFiltered,
  showCards,
} from '../../store/actions';

class FilterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'CURRENCY_UAH',
      FILTER_ROOMS: '',
      FILTER_PRICE_MIN: '',
      FILTER_PRICE_MAX: '',
      FILTER_RATING: '',
    };
  }

  componentDidMount() {
    const { getCurrencyUSDConnect, getCurrencyEURConnect } = this.props;
    getCurrencyUSDConnect();
    getCurrencyEURConnect();
  }

  onSubmit = e => {
    e.preventDefault();
    const {
      cards,
      usd,
      eur,
      setCurrencySignConnect,
      isFilteredConnect,
      showCardsConnect,
    } = this.props;
    const { state } = this;

    const sign = getCurrencySign(state.currency);
    setCurrencySignConnect(sign);

    let filtered = toggleCurrency(cards, state.currency, usd, eur);

    Object.keys(state).forEach(key => {
      if (state[key]) {
        filtered = getFiltersCards(filtered, key, state[key]);
      }
    });

    isFilteredConnect(true);
    showCardsConnect(filtered);
  };

  onCurrencyHandler = e => {
    e.preventDefault();
    this.setState({ currency: e.target.id });
  };

  onRoomHandler = e => {
    this.setState({ [e.target.name]: e.target.id });
  };

  onPriceHandler = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onRatingHandler = e => {
    this.setState({ FILTER_RATING: e.target.id });
  };

  resetCheckedInputput = () => false;

  onClearFilterHandler = () => {
    const { resetFiltersConnect, clearCurrencySignConnect, isFilteredConnect } = this.props;
    this.setState({
      currency: 'CURRENCY_UAH',
      FILTER_ROOMS: '',
      FILTER_PRICE_MIN: '',
      FILTER_PRICE_MAX: '',
      FILTER_RATING: '',
    });
    resetFiltersConnect();
    clearCurrencySignConnect();
    isFilteredConnect(false);
  };

  showClearButton = () => (
    <div className='row text-left'>
      <div className='col-sm-10'>
        <input
          type='button'
          value='Сбросить'
          className='btn btn-outline-danger'
          onClick={this.onClearFilterHandler}
        />
      </div>
    </div>
  );

  onRatingUIHandler = value => {
    switch (value) {
      case 'RATING_ONE':
        return 1;
      case 'RATING_TWO':
        return 2;
      case 'RATING_THREE':
        return 3;
      case 'RATING_FOUR':
        return 4;
      case 'RATING_FIVE':
        return 5;
      default:
        return 0;
    }
  };

  render() {
    const {
      currency,
      FILTER_ROOMS,
      FILTER_PRICE_MIN,
      FILTER_PRICE_MAX,
      FILTER_RATING,
    } = this.state;
    const { filter } = this.props;
    return (
      <div className='bg-white p-2'>
        <form className='text-left' onSubmit={this.onSubmit}>
          <div className='mb-3'>
            <h4>Валюта</h4>
            <div className='btn-group btn-group-toggle' data-toggle='buttons'>
              <CurrencyItem
                id='CURRENCY_UAH'
                label='UAH'
                isActive={currency === 'CURRENCY_UAH'}
                checked={currency === 'CURRENCY_UAH'}
                onChange={this.onCurrencyHandler}
              />
              <CurrencyItem
                id='CURRENCY_USD'
                label='USD'
                isActive={currency === 'CURRENCY_USD'}
                checked={currency === 'CURRENCY_USD'}
                onChange={this.onCurrencyHandler}
              />
              <CurrencyItem
                id='CURRENCY_EUR'
                label='EUR'
                isActive={currency === 'CURRENCY_EUR'}
                checked={currency === 'CURRENCY_EUR'}
                onChange={this.onCurrencyHandler}
              />
            </div>
          </div>
          <div className='mb-3'>
            <h4>Количество комнат</h4>
            <FilterRooms
              label='Все'
              htmlFor='SHOW_ROOMS_ALL'
              name='FILTER_ROOMS'
              id='SHOW_ROOMS_ALL'
              checked={FILTER_ROOMS === 'SHOW_ROOMS_ALL'}
              onChange={this.onRoomHandler}
            />
            <FilterRooms
              label='1 комната'
              htmlFor='SHOW_ROOMS_ONE'
              name='FILTER_ROOMS'
              id='SHOW_ROOMS_ONE'
              checked={FILTER_ROOMS === 'SHOW_ROOMS_ONE'}
              onChange={this.onRoomHandler}
            />
            <FilterRooms
              label='2 комнаты'
              htmlFor='SHOW_ROOMS_TWO'
              name='FILTER_ROOMS'
              id='SHOW_ROOMS_TWO'
              checked={FILTER_ROOMS === 'SHOW_ROOMS_TWO'}
              onChange={this.onRoomHandler}
            />
            <FilterRooms
              label='3 комнаты'
              htmlFor='SHOW_ROOMS_THREE'
              name='FILTER_ROOMS'
              id='SHOW_ROOMS_THREE'
              checked={FILTER_ROOMS === 'SHOW_ROOMS_THREE'}
              onChange={this.onRoomHandler}
            />
          </div>
          <div className='mb-3'>
            <h4>Цена</h4>
            <div className='row ml-2'>
              <FilterPrice
                label='От'
                htmlFor='SHOW_PRICE_FROM'
                name='FILTER_PRICE_MIN'
                id='FILTER_PRICE_MIN'
                value={FILTER_PRICE_MIN}
                onChange={this.onPriceHandler}
              />
              <FilterPrice
                label='До'
                htmlFor='SHOW_PRICE_TO'
                name='FILTER_PRICE_MAX'
                id='FILTER_PRICE_MAX'
                value={FILTER_PRICE_MAX}
                onChange={this.onPriceHandler}
              />
            </div>
          </div>
          <div className='mb-3'>
            <h4>Рейтинг</h4>
            <FilterRating
              rating={this.onRatingUIHandler(FILTER_RATING)}
              onClick={this.onRatingHandler}
            />
          </div>
          <div className='form-group d-flex  justify-content-between flex-wrap'>
            <div className='mb-2'>
              <input type='submit' value='Подобрать' className='btn btn-outline-info' />
            </div>
            <div className='mb-2'>{filter ? this.showClearButton() : null}</div>
          </div>
        </form>
      </div>
    );
  }
}

FilterList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      full_address: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string.isRequired),
      rating: PropTypes.number.isRequired,
      total_rooms: PropTypes.number.isRequired,
      public_date: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  usd: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  eur: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  getCurrencyUSDConnect: PropTypes.func.isRequired,
  getCurrencyEURConnect: PropTypes.func.isRequired,
  resetFiltersConnect: PropTypes.func.isRequired,
  setCurrencySignConnect: PropTypes.func.isRequired,
  clearCurrencySignConnect: PropTypes.func.isRequired,
  filter: PropTypes.bool.isRequired,
  isFilteredConnect: PropTypes.func.isRequired,
  showCardsConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cards: state.card.data,
  usd: state.currency.usd,
  eur: state.currency.eur,
  filter: state.card.filter,
});

const mapDispatchToProps = {
  getCurrencyUSDConnect: getCurrencyUSD,
  getCurrencyEURConnect: getCurrencyEUR,
  changeCurrencyConnect: changeCurrency,
  setCurrencySignConnect: setCurrencySign,
  clearCurrencySignConnect: clearCurrencySign,
  resetFiltersConnect: resetFilters,
  isFilteredConnect: isFiltered,
  showCardsConnect: showCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
