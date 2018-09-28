import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import store from './store/store';
import Header from './layout/header/Header';
import Home from './layout/home/Home';
import About from './layout/about/About';
import NotFound from './layout/notFound/NotFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App bg-light">
            <Header branding="REALTOR" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
