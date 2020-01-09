import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyItem from '../../layout/currency/CurrencyItem';
import {
  getCurrencyUSD,
  getCurrencyEUR,
  changeCurrency,
  setCurrencySign,
  isFiltered,
} from '../../store/actions';

import { toggleCurrency, getCurrencySign } from '../../utils/currency';

class CurrencyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'CURRENCY_UAH',
    };
  }

  componentDidMount() {
    const { getCurrencyUSDConnect, getCurrencyEURConnect } = this.props;
    getCurrencyUSDConnect();
    getCurrencyEURConnect();
  }

  onCurrencyHandler = e => {
    e.preventDefault();
    const {
      cards,
      usd,
      eur,
      changeCurrencyConnect,
      setCurrencySignConnect,
      isFilteredConnect,
    } = this.props;
    // console.log(e.target.id);
    const result = toggleCurrency(cards, e.target.id, usd, eur);
    this.setState({ currency: e.target.id });
    isFilteredConnect(true);
    changeCurrencyConnect(result);
    const sign = getCurrencySign(e.target.id);
    setCurrencySignConnect(sign);
  };

  render() {
    const { currency } = this.state;
    return (
      <div>
        <h4>Валюта</h4>
        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <CurrencyItem
            id='CURRENCY_UAH'
            label='UAH'
            isActive={currency === 'CURRENCY_UAH'}
            onChange={this.onCurrencyHandler}
          />
          <CurrencyItem
            id='CURRENCY_USD'
            label='USD'
            isActive={currency === 'CURRENCY_USD'}
            onChange={this.onCurrencyHandler}
          />
          <CurrencyItem
            id='CURRENCY_EUR'
            label='EUR'
            isActive={currency === 'CURRENCY_EUR'}
            onChange={this.onCurrencyHandler}
          />
        </div>
      </div>
    );
  }
}

CurrencyBoard.propTypes = {
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
  usd: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  eur: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  getCurrencyUSDConnect: PropTypes.func.isRequired,
  getCurrencyEURConnect: PropTypes.func.isRequired,
  changeCurrencyConnect: PropTypes.func.isRequired,
  setCurrencySignConnect: PropTypes.func.isRequired,
  isFilteredConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cards: state.card.data,
  usd: state.currency.usd,
  eur: state.currency.eur,
});

const mapDispatchToProps = {
  getCurrencyUSDConnect: getCurrencyUSD,
  getCurrencyEURConnect: getCurrencyEUR,
  changeCurrencyConnect: changeCurrency,
  setCurrencySignConnect: setCurrencySign,
  isFilteredConnect: isFiltered,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBoard);
