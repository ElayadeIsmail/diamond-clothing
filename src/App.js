import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import Footer from "./components/footer/Footer";
import SignInAndUp from "./pages/signin/SignInAndUp";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ContactPage from "./pages/contact/ContactPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";

class App extends Component {
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
  render() {
    const { isAuthenticated } = this.state;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              isAuthenticated ? <Redirect to='/' /> : <SignInAndUp />
            }
          />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  auth: state.firebase.auth,
});
export default compose(firebaseConnect(), connect(mapStateToProps))(App);
