import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* <a className="navbar-brand" href="#"><img src="https://www.coramhc.com/images/Logos/Coram_Logo_with_Endorser_reg_rgb_redgry.png" className="img-responsive" alt="Responsive" /></a> */}
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">Create New Patient </a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
