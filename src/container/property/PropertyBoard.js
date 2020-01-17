import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PropertyItem from '../../layout/property/PropertyItem';
import * as actions from '../../store';
import dataSelector from '../../selectors/dataSelector';

class PropertyBoard extends Component {
  componentDidMount() {
    const { getCards } = this.props;
    getCards();
  }

  render() {
    const { data, sign } = this.props;
    return (
      <div className='row text-left'>
        {data.map(card => (
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
  sign: PropTypes.string.isRequired,
  getCards: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: dataSelector(state),
  sign: state.currency.sign,
});

export default connect(mapStateToProps, actions)(PropertyBoard);
