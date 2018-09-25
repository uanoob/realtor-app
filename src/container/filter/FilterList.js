import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterCurrency from '../../layout/filter/FilterCurrency';
import FilterRooms from '../../layout/filter/FilterRooms';
import FilterPrice from '../../layout/filter/FilterPrice';
import FilterRating from '../../layout/filter/FilterRating';

export class FilterList extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <FilterCurrency />
        <FilterRooms />
        <FilterPrice />
        <FilterRating />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterList);
