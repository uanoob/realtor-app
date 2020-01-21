import React from 'react';
import PropTypes from 'prop-types';

import RatingItem from '../../layout/rating/RatingItem';
import { getRatingById } from '../../utils/filters';

const RatingBoard = ({ rating, handleFilter, active }) => {
  const handleRating = (name, id) => handleFilter(name, getRatingById(id));

  return (
    <div className='mt-3 text-left text-warning'>
      <RatingItem
        id='RATING_ONE'
        name='rating'
        onClick={handleRating}
        rating={rating}
        status={1}
        active={active}
      />
      <RatingItem
        id='RATING_TWO'
        name='rating'
        onClick={handleRating}
        rating={rating}
        status={2}
        active={active}
      />
      <RatingItem
        id='RATING_THREE'
        name='rating'
        onClick={handleRating}
        rating={rating}
        status={3}
        active={active}
      />
      <RatingItem
        id='RATING_FOUR'
        name='rating'
        onClick={handleRating}
        rating={rating}
        status={4}
        active={active}
      />
      <RatingItem
        id='RATING_FIVE'
        name='rating'
        onClick={handleRating}
        rating={rating}
        status={5}
        active={active}
      />
    </div>
  );
};

RatingBoard.defaultProps = {
  handleFilter: () => {},
  rating: null,
  active: false,
};

RatingBoard.propTypes = {
  handleFilter: PropTypes.func,
  rating: PropTypes.number,
  active: PropTypes.bool,
};

export default RatingBoard;
