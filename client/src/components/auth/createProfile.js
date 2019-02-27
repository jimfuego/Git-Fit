import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import NavbarLanding from "../layout/NavbarLanding";


class createProfile extends Component {
  constructor() {
    super();
    this.state = {
      Age: "",
      Avgcaloriesperday: "",
      Height: "",
      Weight: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
  debugger;
    e.preventDefault();
const newUser = {
      Age: this.state.Age,
      Avgcaloriesperday: this.state.Avgcaloriesperday,
      Height: this.state.Height,
      Weight: this.state.Weight
    };
 axios
    .post('/api/index/initUser', newUser)
    .then(res => { debugger; this.props.history.push('/Profile')})
    .catch(err =>console.log(err)
    );

  };
render() {
    const { errors } = this.state;
return (
      /*<div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Create Profile</b> below
              </h4>
              </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Age}
                  error={errors.Age}
                  id="Age"
                  type="number"
                />
                <label htmlFor="Age">Age</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Avgcaloriesperday}
                  error={errors.Avgcaloriesperday}
                  id="Avgcaloriesperday"
                  type="number"
                />
                <label htmlFor="Avgcaloriesperday">Avg calories per day</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Height}
                  error={errors.Height}
                  id="Height"
                  type="number"
                />
                <label htmlFor="Height">Height</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.Weight}
                  error={errors.Weight}
                  id="Weight"
                  type="number"
                />
                <label htmlFor="Weight">Weight</label>
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
                  onSubmit={this.handleonSubmit}

                >
                  Create Profile
                   </button>
              </div>
            </form>
          </div>
        </div>
      </div>*/
<div>
<NavbarLanding/>
<div className="backgroundnew">
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin">
          <div className="card-body">
            <h5 className="card-title text-center">Create Profile</h5>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.Age}
                //value={this.state.Age}
                type="number"
                id="Age"
                className="form-control"
                placeholder="Age"
                required autoFocus/>
                <label htmlFor="Age">Age</label>
              </div>

              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.Avgcaloriesperday}
                //value={this.state.Avgcaloriesperday}
                type="number"
                id="Avgcaloriesperday"
                className="form-control"
                placeholder="AvgCalories/day"
                required autoFocus/>
                <label htmlFor="Avgcaloriesperday">Avg Calories/day</label>
              </div>

              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.Height}
                //value={this.state.Weight}
                type="number"
                id="Height"
                className="form-control"
                placeholder="Height"
                required autoFocus/>
                <label htmlFor="Height">Height</label>
              </div>

              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.password}
                //value={this.state.Weight}
                type="number"
                id="Weight"
                className="form-control"
                placeholder="Weight"
                required autoFocus/>
                <label htmlFor="Weight">Weight</label>
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
export default createProfile;
