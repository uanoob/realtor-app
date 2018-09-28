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
    const { cards } = this.props;
    return (
      <div className="row text-left">
        {cards.map(card => (
          <CardItem key={card.id} {...card} />
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  getCards: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cards: state.card.cards,
});

const mapDispatchToProps = { getCards };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardList);
