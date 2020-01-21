import React from 'react';
import PropTypes from 'prop-types';

import RoomItem from '../../layout/room/RoomItem';
import { getRoomById } from '../../utils/filters';

const RoomsBoard = ({ room, handleFilter }) => {
  const handleRooms = e => handleFilter(e.target.name, getRoomById(e.target.id));
  return (
    <>
      <RoomItem
        label='1 комната'
        htmlFor='SHOW_ROOMS_ONE'
        name='room'
        id='SHOW_ROOMS_ONE'
        checked={room === 1}
        onChange={handleRooms}
      />
      <RoomItem
        label='2 комнаты'
        htmlFor='SHOW_ROOMS_TWO'
        name='room'
        id='SHOW_ROOMS_TWO'
        checked={room === 2}
        onChange={handleRooms}
      />
      <RoomItem
        label='3 комнаты'
        htmlFor='SHOW_ROOMS_THREE'
        name='room'
        id='SHOW_ROOMS_THREE'
        checked={room === 3}
        onChange={handleRooms}
      />
    </>
  );
};

RoomsBoard.defaultProps = {
  room: null,
};

RoomsBoard.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  room: PropTypes.number,
};

export default RoomsBoard;
