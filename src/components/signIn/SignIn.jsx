import React, { Component } from "react";
import { firebaseConnect } from "react-redux-firebase";
import FormInput from "../input-form/FormInput";
import "./sign-in.style.scss";
import CustomBtn from "../custom-btn/CustomBtn";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { firebase } = this.props;
    const { email, password } = this.state;
    firebase.login({ email, password }).catch((error) => alert(error.message));
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h1>I Already Have An Account</h1>
        <h2>Sign In With Email And Password</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'
            handleChange={this.handleChange}
            type='email'
            name='email'
            value={email}
            required
          />
          <FormInput
            label='Password'
            handleChange={this.handleChange}
            type='password'
            name='password'
            value={password}
            required
          />
          <CustomBtn type='submit'>Sign In</CustomBtn>
        </form>
      </div>
    );
  }
}

export default firebaseConnect()(SignIn);
