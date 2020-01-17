import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyItem from '../../layout/currency/CurrencyItem';
import * as actions from '../../store';

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
    const { usd, eur, changeCurrency, setCurrencySign } = this.props;
    const rate = toggleCurrency(e.target.id, usd, eur);
    this.setState({ currency: e.target.id });
    changeCurrency(rate);
    const sign = getCurrencySign(e.target.id);
    setCurrencySign(sign);
  };

  render() {
    const { currency } = this.state;
    return (
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
    );
  }
}

CurrencyBoard.propTypes = {
  usd: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  eur: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  getCurrencyUSD: PropTypes.func.isRequired,
  getCurrencyEUR: PropTypes.func.isRequired,
  changeCurrency: PropTypes.func.isRequired,
  setCurrencySign: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  usd: state.currency.usd,
  eur: state.currency.eur,
});

export default connect(mapStateToProps, actions)(CurrencyBoard);
