import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FilterRating = ({ rating, onClick }) => {
  return (
    <p className="mt-3 text-left text-warning">
      <i
        id="RATING_ONE"
        className={classnames('far fa-star fa-lg mr-1', {
          fas: rating >= 1 ? true : false,
        })}
        onClick={onClick}
      />
      <i
        id="RATING_TWO"
        className={classnames('far fa-star fa-lg mr-1', {
          fas: rating >= 2 ? true : false,
        })}
        onClick={onClick}
      />
      <i
        id="RATING_THREE"
        className={classnames('far fa-star fa-lg mr-1', {
          fas: rating >= 3 ? true : false,
        })}
        onClick={onClick}
      />
      <i
        id="RATING_FOUR"
        className={classnames('far fa-star fa-lg mr-1', {
          fas: rating >= 4 ? true : false,
        })}
        onClick={onClick}
      />
      <i
        id="RATING_FIVE"
        className={classnames('far fa-star fa-lg mr-1', {
          fas: rating >= 5 ? true : false,
        })}
        onClick={onClick}
      />
    </p>
  );
};

FilterRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterRating;
