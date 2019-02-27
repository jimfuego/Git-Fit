import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavbarLanding extends Component {
  render() {
    return (

<nav class="navbar navbar-expand-lg navbar-black bg-black text-center">
  <Link class="navbar-brand " to="/">GIT-FIT</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>

    );
  }
}
export default NavbarLanding;