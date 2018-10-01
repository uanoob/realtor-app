import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyItem from '../../layout/currency/CurrencyItem';
import {
  getCurrencyUSD,
  getCurrencyEUR,
  changeCurrency,
} from '../../store/actions';
import { toggleCurrency } from '../../utils/currency';

class CurrencyBoard extends Component {
  componentDidMount() {
    this.props.getCurrencyUSD();
    this.props.getCurrencyEUR();
  }

  onCurrencyHandler = e => {
    e.preventDefault();
    const { cards, usd, eur, changeCurrency } = this.props;
    console.log(e.target.id);
    const result = toggleCurrency(cards, e.target.id, usd, eur);
    console.log(result);
    changeCurrency(result);
  };

  render() {
    return (
      <div>
        <h4>Валюта</h4>
        <div
          className="btn-group btn-group-toggle btn-block"
          data-toggle="buttons"
        >
          <CurrencyItem
            id="CURRENCY_UAH"
            label="UAH"
            onClick={this.onCurrencyHandler}
          />
          <CurrencyItem
            id="CURRENCY_USD"
            label="USD"
            onClick={this.onCurrencyHandler}
          />
          <CurrencyItem
            id="CURRENCY_EUR"
            label="EUR"
            onClick={this.onCurrencyHandler}
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
};

const mapStateToProps = state => ({
  cards: state.card.data,
  usd: state.currency.usd,
  eur: state.currency.eur,
});

const mapDispatchToProps = { getCurrencyUSD, getCurrencyEUR, changeCurrency };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyBoard);
