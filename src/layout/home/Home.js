import React from 'react';
import FilterList from '../../container/filter/FilterList';
import CardList from '../../container/card_list/CardList';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <FilterList />
        </div>
        <div className="col-8">
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default Home;
