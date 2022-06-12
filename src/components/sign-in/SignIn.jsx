import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./sign-in.scss";
import { signinWithGoogle } from "../../firebase/firebase";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            required
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signinWithGoogle}>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
