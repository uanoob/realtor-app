import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const starsRating = [
  { id: 'RATING_ONE', rating: 1 },
  { id: 'RATING_TWO', rating: 2 },
  { id: 'RATING_THREE', rating: 3 },
  { id: 'RATING_FOUR', rating: 4 },
  { id: 'RATING_FIVE', rating: 5 },
];

const FilterRating = ({ rating, onClick, active }) => starsRating.map(star => (
  <i key={star.id}>
    <FontAwesomeIcon
      icon={rating >= star.rating ? faStarSolid : faStar}
      size='lg'
      id={star.id}
      role='button'
      tabIndex={active ? '0' : undefined}
      onClick={onClick}
      onKeyPress={onClick}
    />
  </i>
));

FilterRating.defaultProps = {
  onClick: () => {},
  active: false,
};

FilterRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default FilterRating;
