import React, { Component } from "react";
import FormInput from "../input-form/FormInput";
import { firebaseConnect } from "react-redux-firebase";
import "./sign-up.style.scss";
import CustomBtn from "../custom-btn/CustomBtn";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { firebase } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password and the confirm one doesnt match");
      return;
    } else if (
      email.trim() === "" ||
      password.trim() === "" ||
      displayName.trim() === ""
    ) {
      alert("Please Fil in all the Field");
      return;
    }
    firebase.createUser({ email, password }, { email, displayName });
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h1>I Do Not Have An Account</h1>
        <h2>Sign Up With Email And Password</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='displayName'
            handleChange={this.handleChange}
            type='text'
            name='displayName'
            value={displayName}
            required
          />
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
          <FormInput
            label='Confirm Password'
            handleChange={this.handleChange}
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            required
          />
          <CustomBtn type='submit'>Sign Up</CustomBtn>
        </form>
      </div>
    );
  }
}

export default firebaseConnect()(SignUp);
