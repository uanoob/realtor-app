import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store';

import RatingItem from '../../layout/rating/RatingItem';
import { getRatingById } from '../../utils/filters';

class RatingBoard extends Component {
  handleRating = (name, value) => {
    const { setFilter } = this.props;
    const rating = getRatingById(value);
    setFilter(name, rating);
  };

  render() {
    const { rating, active } = this.props;
    return (
      <div className='mt-3 text-left text-warning'>
        <RatingItem
          id='RATING_ONE'
          name='rating'
          onClick={this.handleRating}
          rating={rating}
          status={1}
          active={active}
        />
        <RatingItem
          id='RATING_TWO'
          name='rating'
          onClick={this.handleRating}
          rating={rating}
          status={2}
          active={active}
        />
        <RatingItem
          id='RATING_THREE'
          name='rating'
          onClick={this.handleRating}
          rating={rating}
          status={3}
          active={active}
        />
        <RatingItem
          id='RATING_FOUR'
          name='rating'
          onClick={this.handleRating}
          rating={rating}
          status={4}
          active={active}
        />
        <RatingItem
          id='RATING_FIVE'
          name='rating'
          onClick={this.handleRating}
          rating={rating}
          status={5}
          active={active}
        />
      </div>
    );
  }
}

RatingBoard.defaultProps = {
  active: false,
  rating: null,
};

RatingBoard.propTypes = {
  setFilter: PropTypes.func.isRequired,
  rating: PropTypes.number,
  active: PropTypes.bool,
};

const mapStateToProps = state => ({
  filters: state.property.filters,
});

export default connect(mapStateToProps, actions)(RatingBoard);
