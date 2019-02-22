import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import Gym from "./images/gym.jpg";
//import "./Login.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      email: "",
      password: "",
      repeatpassword: "",
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0 && this.state.repeatpassword.length > 0;
  };
  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="repeatpassword" bsSize="large">
            <ControlLabel>RepeatPassword</ControlLabel>
            <FormControl
              value={this.state.repeatpassword}
              onChange={this.handleChange.bind(this)}
              type="repeatpassword"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    );
  }
}