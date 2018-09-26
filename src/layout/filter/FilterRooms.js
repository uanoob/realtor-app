import React from 'react';
import PropTypes from 'prop-types';

const filterRooms = () => {
  return (
    <div className="mx-3 mb-3">
      <h4>Количество комнат</h4>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio1"
          name="customRadio"
          className="custom-control-input"
        />
        <label className="custom-control-label" htmlFor="customRadio1">
          Все
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio2"
          name="customRadio"
          className="custom-control-input"
        />
        <label className="custom-control-label" htmlFor="customRadio2">
          1 комната
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio3"
          name="customRadio"
          className="custom-control-input"
        />
        <label className="custom-control-label" htmlFor="customRadio3">
          2 комнаты
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id="customRadio4"
          name="customRadio"
          className="custom-control-input"
        />
        <label className="custom-control-label" htmlFor="customRadio4">
          3 комнаты
        </label>
      </div>
    </div>
  );
};

filterRooms.propTypes = {};

export default filterRooms;
