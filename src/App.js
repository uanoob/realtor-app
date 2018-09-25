import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import FilterList from './container/filter/FilterList';
import CardList from './container/card_list/CardList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <FilterList />
          <CardList />
        </div>
      </Provider>
    );
  }
}

export default App;
