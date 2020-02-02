import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import './styles.css';

const Header = ({ branding, isAuth, user }) => (
  <nav className='navbar navbar-expand navbar-dark bg-info py-0'>
    <div className='container'>
      <a href='/' className='navbar-brand'>
        {branding}
      </a>
      <div>
        <ul className='navbar-nav mr-auto md-align'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              <i className='fas fa-home' />
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/property' className='nav-link'>
              <i className='fas fa-home' />
              Property
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
          {isAuth ? (
            <>
              <li className='nav-item'>
                <Link to='/dashboard' className='nav-link'>
                  Dashboard
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/profile' className='nav-link'>
                  <Avatar user={user} />
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/logout' className='nav-link'>
                  LogOut
                </Link>
              </li>
            </>
          ) : (
            <li className='nav-item'>
              <Link to='/auth' className='nav-link'>
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  branding: 'My App',
};

Header.propTypes = {
  branding: PropTypes.string,
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    providerId: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Header);
