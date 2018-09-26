import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterCurrency from '../../layout/filter/FilterCurrency';
import FilterRooms from '../../layout/filter/FilterRooms';
import FilterPrice from '../../layout/filter/FilterPrice';
import FilterRating from '../../layout/filter/FilterRating';

class FilterList extends Component {
  render() {
    return (
      <form className="text-left">
        <FilterCurrency />
        <FilterRooms />
        <FilterPrice />
        <FilterRating />
        <div className="form-group row">
          <div className="col-sm-10 mx-3">
            <button type="submit" className="btn btn-outline-info">
              Подобрать
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterList);
