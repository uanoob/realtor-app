import React from 'react';
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

export default PropertyPage;
