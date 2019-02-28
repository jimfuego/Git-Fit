import React, { Component } from "react";
import { Link } from 'react-router-dom'
//import Background from './gym.jpg';
import '../../index.css';
import NavbarLanding from "../layout/NavbarLanding";



//console.log(gym); // /logo.84287d09.png

/*function Header() {
  // Import result is the URL of your image
  return <img src={gym} alt="gym" />;
} */
/*var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};


class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}*/

class Landing extends Component {
  /*render() {
    return (
      //<section style={ sectionStyle}>
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <Link to="/register"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
            <Link to="/login"
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
             </Link>
          </div>
        </div>
      </div>
     // </section>
    );*/
    render() {
      return (
              <div>
              <NavbarLanding/>


          <div className="bg-overlay row justify-content-center">


          <center>


          <div className="container">

            <div className="row text-center  text-white top-buffer" >

              <h1 className="h1class">
              </h1>
              <h1 className="h1-class" align="center">Discover that summer body you've been dreaming of<br/>
            </h1>
              <br/><br/>
              </div>
          <div className="button-toolbar">
          <div className="row">

            <div className="col-xl-6">
                <Link className="btn btn-primary btn-lg col-lg-8"  to="/register">Register</Link>
            </div>

          <div className="col-xl-6">
                <Link className="btn btn-primary btn-lg col-lg-8" to="/login">Login</Link>
          </div>

          </div>

        </div>

      </div>
      </center>
    </div>
     </div>

        );
    
  }
}
export default Landing;
