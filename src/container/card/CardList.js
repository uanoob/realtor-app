import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardItem from '../../layout/card/CardItem';
import { getCards } from '../../store/actions';

class CardList extends Component {
  componentDidMount() {
    this.props.getCards();
  }

  render() {
    const { data, show, sign, filter } = this.props;
    let cards = [];
    filter ? (cards = show) : (cards = data);
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
  data: PropTypes.array.isRequired,
  show: PropTypes.array.isRequired,
  sign: PropTypes.string.isRequired,
  filter: PropTypes.bool.isRequired,
  getCards: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.card.data,
  show: state.card.show,
  sign: state.currency.sign,
  filter: state.card.filter,
});

const mapDispatchToProps = { getCards };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardList);
