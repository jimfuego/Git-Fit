import React, { Component } from "react";
import axios from 'axios';
import NavbarLanding from "../layout/NavbarLanding";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
 axios
    .post('/api/users/register', newUser)
    .then(res =>this.props.history.push('/createProfile'))
    .catch(err =>console.log(err)
    );

  };
render() {
    const { errors } = this.state;
return (
<div>
<NavbarLanding/>
<div className="background">
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin">
          <div className="card-body">
            <h5 className="card-title text-center">Register</h5>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.name}
                type="name"
                id="name"
                className="form-control"
                placeholder="Name"
                required autoFocus/>
                <label htmlFor="name">Name</label>
              </div>

              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.email}
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                required autoFocus/>
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.password}
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                required autoFocus/>
                <label htmlFor="password">Password</label>
              </div>

              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.password}
                type="password"
                id="password2"
                className="form-control"
                placeholder="Password" required autoFocus/>
                <label htmlFor="password2">Confirm Password</label>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
    );
  }
}
export default Register;
