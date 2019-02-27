import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import NavbarLanding from "../layout/NavbarLanding";


class updateProfile extends Component {
  constructor() {
    super();
    this.state = {
      Avgcaloriesperday: "",
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
      Avgcaloriesperday: this.state.Avgcaloriesperday,
      Weight: this.state.Weight
    };
 axios
    .post('/api/users/updateProfile', newUser)
    .then(res =>this.props.history.push('/Profile'))
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
                <b>Update Profile</b> below
              </h4>
              </div>
            <form noValidate onSubmit={this.onSubmit}>
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
                  onSubmit={this.handleonSubmit}>
                  Update Profile
                   </button>
              </div>
            </form>
          </div>
        </div>
      </div>*/
<div>
<NavbarLanding/>
<div className="background-update">
  <div className="containernew">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin">
          <div className="card-body">
            <h5 className="card-title text-center">Update Profile</h5>
            <form className="form-signin" onSubmit={this.handleonSubmit}>
              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.Avgcaloriesperday}
                type="number" 
                id="inputAvgCaloriesperday" 
                className="form-control" 
                placeholder="Calories" 
                required autoFocus/>
                <label htmlFor="inputAvgCaloriesperday">Avg Calories/day</label>
              </div>

              <div className="form-label-group">
                <input 
                onChange={this.onChange}
                error={errors.Weight}
                type="number" 
                id="inputWeight" 
                className="form-control" 
                placeholder="Weight" 
                required autoFocus/>
                <label htmlFor="inputWeight">Weight</label>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase" 
                      type="submit">Update Profile</button>
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
export default updateProfile;