import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FilterRating = ({ rating, onClick }) => (
  <p className="mt-3 text-left text-warning">
    <i
      id="RATING_ONE"
      className={classnames('far fa-star fa-lg mr-1', {
        fas: rating >= 1,
      })}
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={onClick}
    />
    <i
      id="RATING_TWO"
      className={classnames('far fa-star fa-lg mr-1', {
        fas: rating >= 2,
      })}
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={onClick}
    />
    <i
      id="RATING_THREE"
      className={classnames('far fa-star fa-lg mr-1', {
        fas: rating >= 3,
      })}
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={onClick}
    />
    <i
      id="RATING_FOUR"
      className={classnames('far fa-star fa-lg mr-1', {
        fas: rating >= 4,
      })}
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={onClick}
    />
    <i
      id="RATING_FIVE"
      className={classnames('far fa-star fa-lg mr-1', {
        fas: rating >= 5,
      })}
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={onClick}
    />
  </p>
);

FilterRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterRating;
