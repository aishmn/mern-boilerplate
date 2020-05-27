import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/action/auth.actions";

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a onClick={logout} href="#!" className="nav-link">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link to="/register" className="nav-link">
          <i className="mdi mdi-account" aria-hidden="true"></i>Register
        </Link>
      </li>
      <li className="nav-item ">
        <Link to="/login" className="nav-link">
          <i className="mdi mdi-login-variant" aria-hidden="true"></i>Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        MKMERNBOILERPLATE
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="mdi mdi-home" aria-hidden="true"></i> Home
            </Link>
          </li>
        </ul>
        <span className="navbar-text">
          {isAuthenticated ? authLinks : guestLinks}
        </span>
      </div>
    </nav>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
