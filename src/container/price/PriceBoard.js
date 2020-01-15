import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store';

import PriceItem from '../../layout/price/PriceItem';

class PriceBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceMin: '',
      priceMax: '',
    };
  }

  handlePrice = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { priceMin, priceMax } = this.state;
    const { filterByPriceMax, filterByPriceMin, setFilter } = this.props;
    if (priceMin !== '') {
      filterByPriceMin(priceMin);
      setFilter('priceMin', priceMin);
    }
    if (priceMax !== '') {
      filterByPriceMax(priceMax);
      setFilter('priceMax', priceMax);
    }
    this.clearForm();
  };

  clearForm = () => this.setState({ priceMin: '', priceMax: '' });

  render() {
    const { priceMin, priceMax } = this.state;
    return (
      <form className='row' onSubmit={this.onSubmit}>
        <div className='form-group d-flex  justify-content-between flex-wrap wrap'>
          <PriceItem
            placeholder='От'
            name='priceMin'
            id='FILTER_PRICE_MIN'
            value={priceMin}
            onChange={this.handlePrice}
          />
          <PriceItem
            placeholder='До'
            name='priceMax'
            id='FILTER_PRICE_MAX'
            value={priceMax}
            onChange={this.handlePrice}
          />
          <div className='mr-4'>
            <input type='submit' value='Ok' className='btn btn-outline-info' />
          </div>
        </div>
      </form>
    );
  }
}

PriceBoard.propTypes = {
  filterByPriceMin: PropTypes.func.isRequired,
  filterByPriceMax: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default connect(null, actions)(PriceBoard);
