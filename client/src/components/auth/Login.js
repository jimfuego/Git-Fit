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
                <label htmlhtmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlhtmlFor="password">Password</label>
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
/*    <div className="container-login100">
      <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        <form className="login100-form validate-form">
          <span className="login100-form-title p-b-49">
            Login
          </span>

          <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
            <span className="label-input100">Username</span>
            <input className="input100" type="text" name="username" placeholder="Type your username"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input" data-validate="Password is required">
            <span className="label-input100">Password</span>
            <input className="input100" type="password" name="pass" placeholder="Type your password"/>
            <span className="focus-input100" data-symbol="&#xf190;"></span>
          </div>

          <div className="text-right p-t-8 p-b-31">
            <Link to="#">
              Forgot password?
            </Link>
          </div>

          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn"></div>
              <button className="login100-form-btn">
                Login
              </button>
            </div>
          </div>

          <div className="txt1 text-center p-t-54 p-b-20">
            <span>
              Or Sign Up Using
            </span>
          </div>

          <div className="flex-c-m">
            <Link to="#" className="login100-social-item bg1">
              <i className="fa fa-facebook"></i>
            </Link>

            <Link to="#" className="login100-social-item bg2">
              <i className="fa fa-twitter"></i>
            </Link>

            <Link to="#" className="login100-social-item bg3">
              <i className="fa fa-google"></i>
            </Link>
          </div>

          <div className="flex-col-c p-t-155">
            <span className="txt1 p-b-17">
              Or Sign Up Using
            </span>

            <Link to="#" className="txt2">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>*/
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
