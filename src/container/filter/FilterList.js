import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterCurrency from '../../layout/filter/FilterCurrency';
import FilterRooms from '../../layout/filter/FilterRooms';
import FilterPrice from '../../layout/filter/FilterPrice';
import FilterRating from '../../layout/filter/FilterRating';

import { getShowRooms, showPriceMax } from '../../store/actions/';

class FilterList extends Component {
  state = {
    currency: '',
    room: 'SHOW_ROOMS_ALL',
    priceMin: '',
    priceMax: '',
    rating: '',
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    const { cards } = this.props;
    const { currency, room, priceMin, priceMax, rating } = this.state;

    // const newFilter = {
    //   currency,
    //   room,
    //   price,
    //   rating,
    // };

    this.props.getShowRooms(cards, room);
    if (priceMax !== '') {
      this.props.showPriceMax(cards, priceMax);
    }
  };

  onRoomHandler = e => {
    console.log(e.target.id);
    const { cards } = this.props;
    this.setState({ [e.target.name]: e.target.id });
    this.props.getShowRooms(cards, e.target.id);
  };

  onPriceHandler = e => {
    console.log(e.target.id);
    const { cards } = this.props;
    this.setState({
      [e.target.id]: e.target.value,
    });
    this.props.showPriceMax(cards, e.target.value);
  };

  render() {
    return (
      <div className="bg-white p-2">
        <form className="text-left" onSubmit={this.onSubmit}>
          <FilterCurrency />
          <div className="mb-3">
            <h4>Количество комнат</h4>
            <div>
              
            </div>
            <FilterRooms
              label="Все"
              htmlFor="SHOW_ROOMS_ALL"
              name="room"
              id="SHOW_ROOMS_ALL"
              onClick={this.onRoomHandler}
            />
            <FilterRooms
              label="1 комната"
              htmlFor="SHOW_ROOMS_ONE"
              name="room"
              id="SHOW_ROOMS_ONE"
              onClick={this.onRoomHandler}
            />
            <FilterRooms
              label="2 комнаты"
              htmlFor="SHOW_ROOMS_TWO"
              name="room"
              id="SHOW_ROOMS_TWO"
              onClick={this.onRoomHandler}
            />
            <FilterRooms
              label="3 комнаты"
              htmlFor="SHOW_ROOMS_THREE"
              name="room"
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
                name="price"
                id="priceMin"
                onChange={this.onPriceHandler}
              />
              <FilterPrice
                label="До"
                htmlFor="SHOW_PRICE_TO"
                name="price"
                id="priceMax"
                onChange={this.onPriceHandler}
              />
            </div>
          </div>
          <FilterRating />
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

const mapDispatchToProps = { getShowRooms, showPriceMax };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterList);
