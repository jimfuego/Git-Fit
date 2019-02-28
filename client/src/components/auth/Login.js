import React, { Component } from "react";
import axios from 'axios';
import '../../index.css';
//import '../../main.css';
//import '../../util.css';
import NavbarLanding from "../layout/NavbarLanding";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
     axios
    .post('/api/users/login', userData)
    .then(res =>this.props.history.push('/updateProfile'))
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
        <div className="card card-signin ">
          <div className="card-body">
            <h5 className="card-title text-center">Login</h5>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-label-group">
                <input onChange={this.onChange}
                        error={errors.email}
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email address"
                        required autoFocus/>
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-label-group">
                <input onChange={this.onChange}
                       error={errors.password}
                       type="password"
                       id="password"
                       className="form-control"
                       placeholder="Password"
                       required autoFocus/>
                <label htmlFor="password">Password</label>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit">Sign in</button>
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
export default Login;
