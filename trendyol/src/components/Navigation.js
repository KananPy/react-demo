import React, { Component } from 'react'
import { NavList } from './NavList'
import { Button } from './Button/Button'

export class Navigation extends Component {
  render() {
    return (
        <div className='header-top'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavList/>

            <Button>Sign in</Button>
        </div>
        </nav>
        </div>
    )
  }
}
