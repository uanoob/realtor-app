import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store';

const LogoutPage = ({ clearUser }) => {
  useEffect(() => {
    clearUser();
  }, [clearUser]);
  return (
    <div className='container text-center'>
      <h1 className='mt-auto'>Logout Page</h1>
      <p className='lead'>Simple app to search real estate</p>
      <p className='text-secondary'>Version 1.0.0</p>
    </div>
  );
};

LogoutPage.propTypes = {
  clearUser: PropTypes.func.isRequired,
};

export default connect(null, actions)(LogoutPage);
