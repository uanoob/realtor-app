import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Avatar = ({ user }) => (
  <img src={user.photoUrl} alt='Avatar' className='md-avatar rounded-circle' />
);

Avatar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    providerId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Avatar;
