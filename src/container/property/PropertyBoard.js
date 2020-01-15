import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PropertyItem from '../../layout/property/PropertyItem';
import * as actions from '../../store';

class PropertyBoard extends Component {
  componentDidMount() {
    const { getCards } = this.props;
    getCards();
  }

  render() {
    const { data, show, sign, filter } = this.props;
    const cards = filter ? show : data;
    return (
      <div className='row text-left'>
        {cards.map(card => (
          <PropertyItem key={card.id} card={card} sign={sign} />
        ))}
      </div>
    );
  }
}

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
  show: PropTypes.arrayOf(
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
  filter: PropTypes.bool.isRequired,
  getCards: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.property.data,
  show: state.property.show,
  sign: state.currency.sign,
  filter: state.property.filter,
});

export default connect(mapStateToProps, actions)(PropertyBoard);
