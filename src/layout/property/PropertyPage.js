import React from 'react';
import PropTypes from 'prop-types';
import FilterBoard from '../../container/filter/FilterBoard';
import PropertyBoard from '../../container/property/PropertyBoard';

const PropertyPage = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-sm-12 col-md-5'>
        <FilterBoard />
      </div>
      <div className='col-sm-12 col-md-7'>
        <PropertyBoard />
      </div>
    </div>
  </div>
);

PropertyPage.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    createHref: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    block: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
  }).isRequired,
};

export default PropertyPage;
