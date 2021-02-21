import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {

    render() {

    return	<div className="error-page-area text-center" style={{backgroundImage: 'url('+require('../../../assets/img/bg/6.png')+')'}}>
                <div className="container">
                  <div className="logo-wrapper">
                    <Link to="/">
                      <img src={require("../../../assets/img/logo.png")} alt="logo" />
                    </Link>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 error-page-wrap">
                      <div className="error-page-info">
                        <h1>404</h1>
                        <div className="error-page-info-details">
                          <h2>Page not found</h2>
                          <p>We're sorry, the page you requested could not be found. pleases go back tho the homepage or contact us at Viaje@gmail.com</p>
                          <Link className="btn btn-yellow" to="/">Back To Home</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


        }
}

export default Error