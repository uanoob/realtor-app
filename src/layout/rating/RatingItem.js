import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const RatingItem = ({ id, name, onClick, active, rating, status }) => (
  <i key={id}>
    <FontAwesomeIcon
      icon={rating >= status ? faStarSolid : faStar}
      size='lg'
      id={id}
      name={name}
      role='button'
      tabIndex={active ? '0' : undefined}
      onClick={() => onClick('rating', id)}
      onKeyPress={() => onClick('rating', id)}
    />
  </i>
);

RatingItem.defaultProps = {
  onClick: () => {},
  active: false,
};

RatingItem.propTypes = {
  rating: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default RatingItem;
