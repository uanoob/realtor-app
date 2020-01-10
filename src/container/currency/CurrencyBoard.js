import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyItem from '../../layout/currency/CurrencyItem';
import * as actions from '../../store/actions';

import { toggleCurrency, getCurrencySign } from '../../utils/currency';

class CurrencyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'CURRENCY_UAH',
    };
  }

  componentDidMount() {
    const { getCurrencyUSD, getCurrencyEUR } = this.props;
    getCurrencyUSD();
    getCurrencyEUR();
  }

  onCurrencyHandler = e => {
    e.preventDefault();
    const { cards, usd, eur, changeCurrency, setCurrencySign, isFiltered } = this.props;
    const result = toggleCurrency(cards, e.target.id, usd, eur);
    this.setState({ currency: e.target.id });
    isFiltered(true);
    changeCurrency(result);
    const sign = getCurrencySign(e.target.id);
    setCurrencySign(sign);
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
  getCurrencyUSD: PropTypes.func.isRequired,
  getCurrencyEUR: PropTypes.func.isRequired,
  changeCurrency: PropTypes.func.isRequired,
  setCurrencySign: PropTypes.func.isRequired,
  isFiltered: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cards: state.card.data,
  usd: state.currency.usd,
  eur: state.currency.eur,
});

export default connect(mapStateToProps, actions)(CurrencyBoard);
