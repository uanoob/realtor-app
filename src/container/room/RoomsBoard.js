import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store';

import RoomItem from '../../layout/room/RoomItem';
import { getRoomById } from '../../utils/filters';

class RoomsBoard extends Component {
  handleRooms = e => {
    const { filterByRoom, setFilter } = this.props;
    filterByRoom(getRoomById(e.target.id));
    setFilter(e.target.name, e.target.id);
  };

  render() {
    const { filters } = this.props;
    return (
      <>
        <RoomItem
          label='1 комната'
          htmlFor='SHOW_ROOMS_ONE'
          name='room_quantity'
          id='SHOW_ROOMS_ONE'
          checked={filters.room_quantity === 'SHOW_ROOMS_ONE'}
          onChange={this.handleRooms}
        />
        <RoomItem
          label='2 комнаты'
          htmlFor='SHOW_ROOMS_TWO'
          name='room_quantity'
          id='SHOW_ROOMS_TWO'
          checked={filters.room_quantity === 'SHOW_ROOMS_TWO'}
          onChange={this.handleRooms}
        />
        <RoomItem
          label='3 комнаты'
          htmlFor='SHOW_ROOMS_THREE'
          name='room_quantity'
          id='SHOW_ROOMS_THREE'
          checked={filters.room_quantity === 'SHOW_ROOMS_THREE'}
          onChange={this.handleRooms}
        />
      </>
    );
  }
}

RoomsBoard.propTypes = {
  filterByRoom: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = state => ({
  filters: state.property.filters,
});

export default connect(mapStateToProps, actions)(RoomsBoard);
