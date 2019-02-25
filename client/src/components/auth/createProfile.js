import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Route, Redirect } from 'react-router'

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
    e.preventDefault();
const newUser = {
      Age: this.state.Age,
      Avgcaloriesperday: this.state.Avgcaloriesperday,
      Height: this.state.Height,
      Weight: this.state.Weight
    };
 axios
    .post('/api/users/createProfile', newUser)
    .then(res =>this.props.history.push('/Profile'))
    .catch(err =>console.log(err)
    );

  };
render() {
    const { errors } = this.state;
return (
      <div className="container">
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
      </div>
    );
  }
}
export default createProfile;