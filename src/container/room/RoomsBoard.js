import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store';

import RoomItem from '../../layout/room/RoomItem';
import { getRoomById } from '../../utils/filters';

class RoomsBoard extends Component {
  handleRooms = e => {
    const { setFilter } = this.props;
    const quantity = getRoomById(e.target.id);
    setFilter(e.target.name, quantity);
  };

  render() {
    const { filters } = this.props;
    return (
      <>
        <RoomItem
          label='1 комната'
          htmlFor='SHOW_ROOMS_ONE'
          name='roomQuantity'
          id='SHOW_ROOMS_ONE'
          checked={filters.roomQuantity === 1}
          onChange={this.handleRooms}
        />
        <RoomItem
          label='2 комнаты'
          htmlFor='SHOW_ROOMS_TWO'
          name='roomQuantity'
          id='SHOW_ROOMS_TWO'
          checked={filters.roomQuantity === 2}
          onChange={this.handleRooms}
        />
        <RoomItem
          label='3 комнаты'
          htmlFor='SHOW_ROOMS_THREE'
          name='roomQuantity'
          id='SHOW_ROOMS_THREE'
          checked={filters.roomQuantity === 3}
          onChange={this.handleRooms}
        />
      </>
    );
  }
}

RoomsBoard.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    roomQuantity: PropTypes.number,
    priceMin: PropTypes.number,
    priceMax: PropTypes.number,
    rating: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  filters: state.property.filters,
});

export default connect(mapStateToProps, actions)(RoomsBoard);
