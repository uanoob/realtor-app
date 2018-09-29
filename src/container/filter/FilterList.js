import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterCurrency from '../../layout/filter/FilterCurrency';
import FilterRooms from '../../layout/filter/FilterRooms';
import FilterPrice from '../../layout/filter/FilterPrice';
import FilterRating from '../../layout/filter/FilterRating';

import { getFiltersCards } from '../../utils/filters';
import { getFilters } from '../../store/actions';

class FilterList extends Component {
  state = {
    CURRENCY: '',
    FILTER_ROOMS: '',
    FILTER_PRICE_MIN: '',
    FILTER_PRICE_MAX: '',
    FILTER_RATING: '',
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    const { cards, getFilters } = this.props;
    const state = this.state;

    let filtered = cards;
    for (let key in state) {
      // console.log(`${key}: ${state[key]}`);
      const list = getFiltersCards(filtered, key, state[key]);
      filtered = list;
    }
    getFilters(filtered);
  };

  onRoomHandler = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.id });
  };

  onPriceHandler = e => {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onRatingHandler = e => {
    console.log(e.target.id);
    this.setState({ FILTER_RATING: e.target.id });
  };

  render() {
    return (
      <div className="bg-white p-2">
        <form className="text-left" onSubmit={this.onSubmit}>
          <FilterCurrency />
          <div className="mb-3">
            <h4>Количество комнат</h4>
            <div />
            <FilterRooms
              label="Все"
              htmlFor="SHOW_ROOMS_ALL"
              name="FILTER_ROOMS"
              id="SHOW_ROOMS_ALL"
              onClick={this.onRoomHandler}
            />
            <FilterRooms
              label="1 комната"
              htmlFor="SHOW_ROOMS_ONE"
              name="FILTER_ROOMS"
              id="SHOW_ROOMS_ONE"
              onClick={this.onRoomHandler}
            />
            <FilterRooms
              label="2 комнаты"
              htmlFor="SHOW_ROOMS_TWO"
              name="FILTER_ROOMS"
              id="SHOW_ROOMS_TWO"
              onClick={this.onRoomHandler}
            />
            <FilterRooms
              label="3 комнаты"
              htmlFor="SHOW_ROOMS_THREE"
              name="FILTER_ROOMS"
              id="SHOW_ROOMS_THREE"
              onClick={this.onRoomHandler}
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
                onChange={this.onPriceHandler}
              />
              <FilterPrice
                label="До"
                htmlFor="SHOW_PRICE_TO"
                name="FILTER_PRICE_MAX"
                id="FILTER_PRICE_MAX"
                onChange={this.onPriceHandler}
              />
            </div>
          </div>
          <div className="mb-3">
            <h4>Рейтинг</h4>
            <FilterRating
              name="rating"
              id="RATING_ONE"
              onClick={this.onRatingHandler}
            />
            <FilterRating
              id="RATING_TWO"
              name="rating"
              onClick={this.onRatingHandler}
            />
            <FilterRating
              id="RATING_THREE"
              name="rating"
              onClick={this.onRatingHandler}
            />
            <FilterRating
              id="RATING_FOUR"
              name="rating"
              onClick={this.onRatingHandler}
            />
            <FilterRating
              id="RATING_FIVE"
              name="rating"
              onClick={this.onRatingHandler}
            />
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <input
                type="submit"
                value="Подобрать"
                className="btn btn-outline-info"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.card.data,
});

const mapDispatchToProps = { getFilters };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterList);
