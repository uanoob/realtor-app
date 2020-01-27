import React from 'react';
import PropTypes from 'prop-types';
import SelectionItem from '../../layout/selection/SelectionItem';

const SelectionBoard = ({ filters, handleFilter, handleClearFilters }) => {
  const handleSelection = e => handleFilter(e.target.name, null);

  return (
    <div className='row text-left'>
      <div className='col mb-2'>
        <input
          type='button'
          value='Сбросить'
          className='btn btn-outline-danger'
          onClick={handleClearFilters}
        />
      </div>
      {Object.keys(filters).map(key => (filters[key] !== null && key !== 'currency' ? (
        <SelectionItem
          key={key}
          name={key}
          value={filters[key]}
          handleSelection={handleSelection}
        />
      ) : null))}
    </div>
  );
};

SelectionBoard.propTypes = {
  handleClearFilters: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    room: PropTypes.number,
    priceMin: PropTypes.number,
    priceMax: PropTypes.number,
    rating: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
};

export default SelectionBoard;
