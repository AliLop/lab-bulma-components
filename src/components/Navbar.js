import 'bulma/css/bulma.css';
import React from 'react';
import CoolButton from './CoolButton';

function Navbar() {

   return(
 
        <nav className="navbar is-transparent is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                    Home
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                    Docs
                    </a>
                    <div className="navbar-dropdown is-boxed">
                    <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                        Overview
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                        Modifiers
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                        Columns
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                        Layout
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                        Form
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                        Elements
                    </a>
                    <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                        Components
                    </a>
                    <hr className="navbar-divider"/>
                    <div className="navbar-item">
                        Version 0.9.1
                    </div>
                    </div>
                </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                  <CoolButton myClass="is-success">Login</CoolButton>
                  <CoolButton myClass="is-danger is-rounded my-class">Signup</CoolButton>
                </div>
                </div>
            </div>
        </nav>

    ) 
}
export default Navbar;