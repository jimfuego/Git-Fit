import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


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
<nav class="navbar navbar-expand-lg navbar-black bg-black">
  <Link class="navbar-brand" to="#">GIT-FIT</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to ="#">Link</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="#">Action</Link>
          <Link class="dropdown-item" to="#">Another action</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="#">Something else here</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link disabled" to="#">Disabled</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
      </ul>

    </form>
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