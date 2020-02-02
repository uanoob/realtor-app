import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store';

const AuthProvider = ({ getUser, children }) => {
  useEffect(() => {
    getUser();
  }, [getUser]);
  return children;
};

export default connect(null, actions)(AuthProvider);
