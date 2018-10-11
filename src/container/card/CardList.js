import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardItem from '../../layout/card/CardItem';
import { getCards } from '../../store/actions';

class CardList extends Component {
  componentDidMount() {
    const { getCardsConnect } = this.props;
    getCardsConnect();
  }

  render() {
    const {
      data, show, sign, filter,
    } = this.props;
    const cards = filter ? show : data;
    return (
      <div className="row text-left">
        {cards.map(card => (
          <CardItem key={card.id} card={card} sign={sign} />
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
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
  getCardsConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.card.data,
  show: state.card.show,
  sign: state.currency.sign,
  filter: state.card.filter,
});

const mapDispatchToProps = { getCardsConnect: getCards };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardList);
