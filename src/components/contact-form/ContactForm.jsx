import React, { Component } from "react";
import "./contact-form.style.scss";
import FormInput from "../input-form/FormInput";
import CustomBtn from "../custom-btn/CustomBtn";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email } = this.state;
    return (
      <div className='form-contact'>
        <form>
          <FormInput
            label='Name (Required)'
            handleChange={this.handleChange}
            type='text'
            name='name'
            value={name}
            required
          />
          <FormInput
            label='Email (required)'
            handleChange={this.handleChange}
            type='email'
            name='email'
            value={email}
            required
          />

          <textarea placeholder=' Message' className='text-area'></textarea>
          <CustomBtn>Submit</CustomBtn>
        </form>
      </div>
    );
  }
}

export default ContactForm;
