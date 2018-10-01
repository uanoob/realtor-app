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
    const { data, show, filter } = this.props;
    let cards = [];
    filter ? (cards = show) : (cards = data);
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
  data: PropTypes.array.isRequired,
  show: PropTypes.array.isRequired,
  filter: PropTypes.bool.isRequired,
  getCards: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.card.data,
  show: state.card.show,
  filter: state.card.filter,
});

const mapDispatchToProps = { getCards };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardList);
