import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({isAuthorized, user}) => {
  const getUserLink = () => {
    return (
      <Link to={isAuthorized ? `/favorites` : `/login`} className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {isAuthorized ?
          <span className="header__user-name user__name">{user.email}</span>
          : <span className="header__login">Sign in</span>}
      </Link>
    );
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {getUserLink()}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

export {Header};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    isAuthorized: !!state.user,
    user: state.user,
  });
};

export default connect(mapStateToProps, null)(Header);
