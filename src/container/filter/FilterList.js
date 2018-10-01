import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrencyBoard from '../currency/CurrencyBoard';
import FilterRooms from '../../layout/filter/FilterRooms';
import FilterPrice from '../../layout/filter/FilterPrice';
import FilterRating from '../../layout/filter/FilterRating';

import { getFiltersCards } from '../../utils/filters';
import { isFiltered, showCards } from '../../store/actions';

class FilterList extends Component {
  state = {
    FILTER_ROOMS: '',
    FILTER_PRICE_MIN: '',
    FILTER_PRICE_MAX: '',
    FILTER_RATING: '',
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    const { cards, isFiltered, showCards } = this.props;
    const state = this.state;

    isFiltered(true);

    let filtered = cards;
    for (let key in state) {
      const list = getFiltersCards(filtered, key, state[key]);
      filtered = list;
    }
    showCards(filtered);
  };

  onRoomHandler = e => {
    this.setState({ [e.target.name]: e.target.id });
  };

  onPriceHandler = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onRatingHandler = e => {
    this.setState({ FILTER_RATING: e.target.id });
  };

  onClearFilterHandler = e => {
    this.setState({
      FILTER_ROOMS: '',
      FILTER_PRICE_MIN: '',
      FILTER_PRICE_MAX: '',
      FILTER_RATING: '',
    });
    this.props.isFiltered(false);
  };

  onRatingUIHandler = value => {
    switch (value) {
      case 'RATING_ONE':
        return 1;
      case 'RATING_TWO':
        return 2;
      case 'RATING_THREE':
        return 3;
      case 'RATING_FOUR':
        return 4;
      case 'RATING_FIVE':
        return 5;
      default:
        return 0;
    }
  };

  showClearButton = () => (
    <div className="row text-left">
      <div className="col-sm-10">
        <input
          type="button"
          value="Сбросить"
          className="btn btn-outline-danger"
          onClick={this.onClearFilterHandler}
        />
      </div>
    </div>
  );

  render() {
    return (
      <div className="bg-white p-2">
        <form className="text-left" onSubmit={this.onSubmit}>
          <div className="mb-3">
            <CurrencyBoard />
          </div>
          <div className="mb-3">
            <h4>Количество комнат</h4>
            <FilterRooms
              label="Все"
              htmlFor="SHOW_ROOMS_ALL"
              name="FILTER_ROOMS"
              id="SHOW_ROOMS_ALL"
              onChange={this.onRoomHandler}
            />
            <FilterRooms
              label="1 комната"
              htmlFor="SHOW_ROOMS_ONE"
              name="FILTER_ROOMS"
              id="SHOW_ROOMS_ONE"
              onChange={this.onRoomHandler}
            />
            <FilterRooms
              label="2 комнаты"
              htmlFor="SHOW_ROOMS_TWO"
              name="FILTER_ROOMS"
              id="SHOW_ROOMS_TWO"
              onChange={this.onRoomHandler}
            />
            <FilterRooms
              label="3 комнаты"
              htmlFor="SHOW_ROOMS_THREE"
              name="FILTER_ROOMS"
              id="SHOW_ROOMS_THREE"
              onChange={this.onRoomHandler}
            />
          </div>
          <div className="mb-3">
            <h4>Цена</h4>
            <div className="row ml-2">
              <FilterPrice
                label="От"
                htmlFor="SHOW_PRICE_FROM"
                name="FILTER_PRICE_MIN"
                id="FILTER_PRICE_MIN"
                value={this.state.FILTER_PRICE_MIN}
                onChange={this.onPriceHandler}
              />
              <FilterPrice
                label="До"
                htmlFor="SHOW_PRICE_TO"
                name="FILTER_PRICE_MAX"
                id="FILTER_PRICE_MAX"
                value={this.state.FILTER_PRICE_MAX}
                onChange={this.onPriceHandler}
              />
            </div>
          </div>
          <div className="mb-3">
            <h4>Рейтинг</h4>
            <FilterRating
              rating={this.onRatingUIHandler(this.state.FILTER_RATING)}
              onClick={this.onRatingHandler}
            />
          </div>
          <div className="form-group d-flex  justify-content-between flex-wrap">
            <div className="mb-2">
              <input
                type="submit"
                value="Подобрать"
                className="btn btn-outline-info"
              />
            </div>
            <div className="mb-2">
              {this.props.filter ? this.showClearButton() : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

FilterList.propTypes = {
  cards: PropTypes.array.isRequired,
  filter: PropTypes.bool.isRequired,
  isFiltered: PropTypes.func.isRequired,
  showCards: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cards: state.card.data,
  filter: state.card.filter,
});

const mapDispatchToProps = { isFiltered, showCards };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterList);
