import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyItem from '../../layout/currency/CurrencyItem';
import * as actions from '../../store';

import { getCurrencySign } from '../../utils/currency';

class CurrencyBoard extends Component {
  componentDidMount() {
    const { getCurrencyUSD, getCurrencyEUR } = this.props;
    getCurrencyUSD();
    getCurrencyEUR();
  }

  handleCurrency = e => {
    e.preventDefault();
    const { setFilter } = this.props;
    setFilter('currency', getCurrencySign(e.target.id));
  };

  render() {
    const { sign } = this.props;
    return (
      <div className='btn-group btn-group-toggle' data-toggle='buttons'>
        <CurrencyItem
          id='CURRENCY_UAH'
          label='UAH'
          isActive={sign === 'uah'}
          onChange={this.handleCurrency}
        />
        <CurrencyItem
          id='CURRENCY_USD'
          label='USD'
          isActive={sign === 'usd'}
          onChange={this.handleCurrency}
        />
        <CurrencyItem
          id='CURRENCY_EUR'
          label='EUR'
          isActive={sign === 'eur'}
          onChange={this.handleCurrency}
        />
      </div>
    );
  }
}

CurrencyBoard.propTypes = {
  getCurrencyUSD: PropTypes.func.isRequired,
  getCurrencyEUR: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  sign: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  sign: state.property.filters.currency,
});

export default connect(mapStateToProps, actions)(CurrencyBoard);
