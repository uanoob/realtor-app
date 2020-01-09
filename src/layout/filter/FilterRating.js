import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const FilterRating = ({ rating, onClick }) => (
  <p className='mt-3 text-left text-warning'>
    <i>
      <FontAwesomeIcon
        icon={rating >= 1 ? faStarSolid : faStar}
        size='lg'
        id='RATING_ONE'
        role='button'
        tabIndex='0'
        onClick={onClick}
        onKeyPress={onClick}
      />
    </i>
    <i>
      <FontAwesomeIcon
        icon={rating >= 2 ? faStarSolid : faStar}
        size='lg'
        id='RATING_TWO'
        role='button'
        tabIndex='0'
        onClick={onClick}
        onKeyPress={onClick}
      />
    </i>
    <i>
      <FontAwesomeIcon
        icon={rating >= 3 ? faStarSolid : faStar}
        size='lg'
        id='RATING_THREE'
        role='button'
        tabIndex='0'
        onClick={onClick}
        onKeyPress={onClick}
      />
    </i>
    <i>
      <FontAwesomeIcon
        icon={rating >= 4 ? faStarSolid : faStar}
        size='lg'
        id='RATING_FOUR'
        role='button'
        tabIndex='0'
        onClick={onClick}
        onKeyPress={onClick}
      />
    </i>
    <i>
      <FontAwesomeIcon
        icon={rating >= 5 ? faStarSolid : faStar}
        size='lg'
        id='RATING_FIVE'
        role='button'
        tabIndex='0'
        onClick={onClick}
        onKeyPress={onClick}
      />
    </i>
  </p>
);

FilterRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterRating;
