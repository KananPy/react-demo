import React, { Component } from "react";

export class NavList extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link" href="#">
            Pricing
          </a>
          <a className="nav-link disabled">Disabled</a>
        </div>
      </div>
    );
  }
}
