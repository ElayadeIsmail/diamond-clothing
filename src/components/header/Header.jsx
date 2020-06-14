import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/diamond.svg";
import "./header.style.scss";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

class Header extends Component {
  state = {
    isAuthenticated: false,
  };
  static getDerivedStateFromProps(props, state) {
    const { auth } = props;
    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }
  onLogout = (e) => {
    e.preventDefault();
    const { firebase } = this.props;
    firebase.logout();
  };
  render() {
    const { isAuthenticated } = this.state;
    const { hidden } = this.props;
    return (
      <div className='header'>
        <Link to='/'>
          <Logo className='logo'></Logo>
        </Link>
        <ul className='navbar'>
          <li className='nav-item'>
            <Link to='/shop' className='nav-link'>
              Shop
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link'>
              Contact
            </Link>
          </li>
          {isAuthenticated ? (
            <li className='nav-item'>
              <a onClick={this.onLogout} className='nav-link' href='#!'>
                Sign Out
              </a>
            </li>
          ) : (
            <li className='nav-item'>
              <Link to='/signin' className='nav-link'>
                Sign In
              </Link>
            </li>
          )}
          <li className='nav-item'>
            <CartIcon />
          </li>
        </ul>
        {hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  auth: state.firebase.auth,
  hidden: state.cart.hidden,
});

export default compose(firebaseConnect(), connect(mapStateToProps))(Header);
