import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyItem from '../../layout/currency/CurrencyItem';
import {
  getCurrencyUSD,
  getCurrencyEUR,
  changeCurrency,
  setCurrencySign,
} from '../../store/actions';
import { isFiltered } from '../../store/actions';

import { toggleCurrency, getCurrencySign } from '../../utils/currency';

class CurrencyBoard extends Component {
  state = {
    currency: 'CURRENCY_UAH',
  };

  componentDidMount() {
    this.props.getCurrencyUSD();
    this.props.getCurrencyEUR();
  }

  onCurrencyHandler = e => {
    e.preventDefault();
    const {
      cards,
      usd,
      eur,
      changeCurrency,
      setCurrencySign,
      isFiltered,
    } = this.props;
    console.log(e.target.id);
    const result = toggleCurrency(cards, e.target.id, usd, eur);
    this.setState({ currency: e.target.id });
    isFiltered(true);
    changeCurrency(result);
    const sign = getCurrencySign(e.target.id);
    setCurrencySign(sign);
  };

  render() {
    return (
      <div>
        <h4>Валюта</h4>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <CurrencyItem
            id="CURRENCY_UAH"
            label="UAH"
            isActive={this.state.currency === 'CURRENCY_UAH'}
            onChange={this.onCurrencyHandler}
          />
          <CurrencyItem
            id="CURRENCY_USD"
            label="USD"
            isActive={this.state.currency === 'CURRENCY_USD'}
            onChange={this.onCurrencyHandler}
          />
          <CurrencyItem
            id="CURRENCY_EUR"
            label="EUR"
            isActive={this.state.currency === 'CURRENCY_EUR'}
            onChange={this.onCurrencyHandler}
          />
        </div>
      </div>
    );
  }
}

CurrencyBoard.propTypes = {
  cards: PropTypes.array.isRequired,
  usd: PropTypes.object.isRequired,
  eur: PropTypes.object.isRequired,
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

const mapDispatchToProps = {
  getCurrencyUSD,
  getCurrencyEUR,
  changeCurrency,
  setCurrencySign,
  isFiltered,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyBoard);
