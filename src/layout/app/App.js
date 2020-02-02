import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from '../../store/store';

import Header from '../header/Header';
import Home from '../home/Home';
import PrivateRoute from '../../hoc/PrivateRoute';
import HiddenRoute from '../../hoc/HiddenRoute';
import AuthProvider from '../../hoc/AuthProvider';

const PropertyPage = lazy(() => import('../property/PropertyPage'));
const About = lazy(() => import('../about/About'));
const Dashboard = lazy(() => import('../dashboard/Dashboard'));
const SignInScreen = lazy(() => import('../signin/SignInScreen'));
const LogoutPage = lazy(() => import('../logout/LogoutPage'));
const ProfilePage = lazy(() => import('../profile/ProfilePage'));
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
          <AuthProvider>
            <Header branding='REALTOR' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/property' component={PropertyPage} />
                <Route exact path='/about' component={About} />
                <HiddenRoute exact path='/auth' component={SignInScreen} />
                <PrivateRoute exact path='/profile' component={ProfilePage} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute exact path='/logout' component={LogoutPage} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </AuthProvider>
        </Provider>
      </Suspense>
    </Router>
  </CookiesProvider>
);

export default App;
