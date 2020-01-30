import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from '../../store/store';

import Header from '../header/Header';
import Home from '../home/Home';

const PropertyPage = lazy(() => import('../property/PropertyPage'));
const About = lazy(() => import('../about/About'));
const LoginPage = lazy(() => import('../login/LoginPage'));
const NotFound = lazy(() => import('../notFound/NotFound'));

const App = () => (
  <CookiesProvider>
    <Router>
      <Suspense
        fallback={(
          <div className='container'>
            <h1 className='mt-4 text-center'>...Loading</h1>
          </div>
        )}
      >
        <Provider store={store}>
          <>
            <Header branding='REALTOR' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/property' component={PropertyPage} />
                <Route exact path='/about' component={About} />
                <Route exact path='/login' component={LoginPage} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </>
        </Provider>
      </Suspense>
    </Router>
  </CookiesProvider>
);

export default App;
