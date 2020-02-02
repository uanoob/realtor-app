import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const HiddenRoute = ({ exact, path, component: Component, isAuth }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (isAuth ? <Redirect to='/' /> : <Component props={props} />)}
  />
);

HiddenRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.shape({
    $$typeof: PropTypes.symbol.isRequired,
  }).isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(HiddenRoute);
