import React from 'react';
import FilterList from '../../container/filter/FilterList';
import CardList from '../../container/card/CardList';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <FilterList />
      </div>
      <div className="col-sm-12 col-md-8">
        <CardList />
      </div>
    </div>
  </div>
);

export default Home;
