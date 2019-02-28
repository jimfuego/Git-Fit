import React, { Component } from "react";
import axios from 'axios';
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
    .post('/api/index/updateUser', newUser)
    .then(res => this.props.history.push('/Profile'))
    .catch(err => console.log(err)
    );

  };
render() {
    const { errors } = this.state;
return (
<div>
<NavbarLanding/>
<div className="background-update">
  <div className="containernew">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin">
          <div className="card-body">
            <h5 className="card-title text-center">Update Profile</h5>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="form-label-group">
                <input
                onChange={this.onChange}
                error={errors.Avgcaloriesperday}
                type="number" 
                id="Avgcaloriesperday" 
                className="form-control" 
                placeholder="Calories/day" 
                required autoFocus/>
                <label htmlFor="Avgcaloriesperday">Avg Calories/day</label>
              </div>

              <div className="form-label-group">
                <input 
                onChange={this.onChange}
                error={errors.Weight}
                type="number" 
                id="Weight" 
                className="form-control" 
                placeholder="Weight" 
                required autoFocus/>
                <label htmlFor="Weight">Weight</label>
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