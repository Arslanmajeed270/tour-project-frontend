import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <div className="mobile-logo">
              <Link to="/">
                <img
                  src={require("../../assets/img/sticky-logo.png")}
                  alt={"logo"}
                />
              </Link>
            </div>
            <button
              className="navbar-toggler float-right"
              type="button"
              data-toggle="collapse"
              data-target="#tp_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </span>
            </button>
            <div className="nav-right-content">
              <ul className="pl-0">
                <li className="top-bar-btn-booking">
                  <Link className="btn btn-yellow" to="/tour-details">
                    Book Now <i className="fa fa-paper-plane" />
                  </Link>
                </li> 
                <li className="search">
                  <i className="ti-search" />
                </li>
                <li className="notification">
                  <Link className="signUp-btn" to="#">
                    <i className="fa fa-user-o" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="tp_main_menu">
            <div className="logo-wrapper desktop-logo">
              <Link to="/" className="main-logo">
                <img src={require("../../assets/img/logo.png")} alt="logo" />
              </Link>
              <Link to="/" className="sticky-logo">
                <img
                  src={require("../../assets/img/sticky-logo.png")}
                  alt="logo"
                />
              </Link>
            </div>
            <ul className="navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">Tour</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/tour-list">Tours List</Link>
                  </li>
                  <li>
                    <Link to="/tour-details">Tours Details</Link>
                  </li>
                </ul>
              </li>
              
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/user-profile">User Profile</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-content">
            <ul>
              <li>
                <Link className="btn btn-yellow" to="/tour-details">
                  Book Now <i className="fa fa-paper-plane" />
                </Link>
              </li>
              {/* <li className="search">
                <i className="ti-search" />
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
