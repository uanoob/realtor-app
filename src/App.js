import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './store/store';

import Header from './layout/header/Header';
import Home from './layout/home/Home';

const PropertyPage = lazy(() => import('./layout/property/PropertyPage'));
const About = lazy(() => import('./layout/about/About'));
const NotFound = lazy(() => import('./layout/notFound/NotFound'));

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
          <div className='App bg-light'>
            <Header branding='REALTOR' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/property' component={PropertyPage} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Provider>
      </Suspense>
    </Router>
  </CookiesProvider>
);

export default App;
