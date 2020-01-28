import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PropertyItem from '../../layout/property/PropertyItem';
import * as actions from '../../store';
import dataSelector from '../../selectors/dataSelector';

const PropertyBoard = ({ getCards, data, sign }) => {
  useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <div className='row text-left'>
      {data.map(card => (
        <PropertyItem key={card.id} card={card} sign={sign} />
      ))}
    </div>
  );
};

PropertyBoard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      full_address: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string.isRequired),
      rating: PropTypes.number.isRequired,
      total_rooms: PropTypes.number.isRequired,
      public_date: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  sign: PropTypes.string.isRequired,
  getCards: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: dataSelector(state),
  sign: state.property.filters.currency,
});

export default connect(mapStateToProps, actions)(PropertyBoard);
