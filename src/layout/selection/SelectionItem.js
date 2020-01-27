import React from 'react';
import PropTypes from 'prop-types';
import { getSelectionByName } from '../../utils/filters';

const SelectionItem = ({ name, value, handleSelection }) => (
  <div className='col mb-2'>
    <input
      type='button'
      name={name}
      value={`${getSelectionByName(name)} ${value}`}
      className='btn btn-outline-danger'
      onClick={handleSelection}
    />
  </div>
);

SelectionItem.defaultProps = {
  name: '',
  value: null,
};

SelectionItem.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.number,
};

export default SelectionItem;
