import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './store/store';
import Header from './layout/header/Header';
import Home from './layout/home/Home';
import About from './layout/about/About';
import NotFound from './layout/notFound/NotFound';

const App = () => (
  <CookiesProvider>
    <Router>
      <Provider store={store}>
        <div className='App bg-light'>
          <Header branding='REALTOR' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  </CookiesProvider>
);

export default App;
