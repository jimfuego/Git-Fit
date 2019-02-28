import React, { Component } from "react";
import { Link } from 'react-router-dom';


class NavBar extends Component {
state = {
  collapseID: ""

};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));


render() {
  return (
<nav className="navbar navbar-expand-lg navbar-black bg-black">
  <Link className="navbar-brand" to="#">GIT-FIT</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    <div className="pos-f-t">
      <div className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Options
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/updateProfile">Update Profile</Link>
          <Link className="dropdown-item" to="/">Logout</Link>
        </div>
      </div>
</div>
  </div>
</nav>);

  }
}

export default NavBar;

/*import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              className="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              MERN
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;*/