import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import createProfile from "./components/auth/createProfile";
import Profile from "./components/auth/Profile";
import updateProfile from "./components/auth/updateProfile";




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createProfile" component={createProfile} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/updateProfile" component={updateProfile} />


        </div>
      </Router>
    );
  }
}
export default App;