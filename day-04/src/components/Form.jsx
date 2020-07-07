import React, { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Enter Your Name"
          required
        />
        <br />
        <input
          onChange={this.handleChange}
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Enter Your Email"
          required
        />
        <br />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Enter Your Password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        />
      </form>
    );
  }
}
export default Form;
