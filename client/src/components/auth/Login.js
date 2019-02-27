import React, { Component } from "react";
import { Link } from "react-router-dom";
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
console.log(userData);
  };
render() {
    const { errors } = this.state;
return (
      /*<div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>*/
/*    <div class="container-login100">
      <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        <form class="login100-form validate-form">
          <span class="login100-form-title p-b-49">
            Login
          </span>

          <div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
            <span class="label-input100">Username</span>
            <input class="input100" type="text" name="username" placeholder="Type your username"/>
            <span class="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate="Password is required">
            <span class="label-input100">Password</span>
            <input class="input100" type="password" name="pass" placeholder="Type your password"/>
            <span class="focus-input100" data-symbol="&#xf190;"></span>
          </div>

          <div class="text-right p-t-8 p-b-31">
            <Link to="#">
              Forgot password?
            </Link>
          </div>

          <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
              <div class="login100-form-bgbtn"></div>
              <button class="login100-form-btn">
                Login
              </button>
            </div>
          </div>

          <div class="txt1 text-center p-t-54 p-b-20">
            <span>
              Or Sign Up Using
            </span>
          </div>

          <div class="flex-c-m">
            <Link to="#" class="login100-social-item bg1">
              <i class="fa fa-facebook"></i>
            </Link>

            <Link to="#" class="login100-social-item bg2">
              <i class="fa fa-twitter"></i>
            </Link>

            <Link to="#" class="login100-social-item bg3">
              <i class="fa fa-google"></i>
            </Link>
          </div>

          <div class="flex-col-c p-t-155">
            <span class="txt1 p-b-17">
              Or Sign Up Using
            </span>

            <Link to="#" class="txt2">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>*/
  <div>
  <NavbarLanding/>
  <div class="background">
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin ">
          <div class="card-body">
            <h5 class="card-title text-center">Login</h5>
            <form class="form-signin" onSubmit={this.onSubmit}>
              <div class="form-label-group">
                <input onChange={this.onChange}
                        error={errors.email}
                        type="email"
                        id="email"
                        class="form-control"
                        placeholder="Email address"
                        required autofocus/>
                <label for="email">Email address</label>
              </div>

              <div class="form-label-group">
                <input onChange={this.onChange}
                       error={errors.password}
                       type="password"
                       id="password"
                       class="form-control"
                       placeholder="Password"
                       required autofocus/>
                <label for="password">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase"
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
