import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ads extends Component {

    render() {

    return  <div className="ads-area pd-top-90 viaje-go-top">
				  <div className="container">
				    <div className="row justify-content-center">
				      <div className="col-xl-8 col-lg-9">
				        <Link className="ads-thumb" to="/contact-us">
				          <img src={require("../../../assets/img/others/1.png")} alt="ads" />
				        </Link>
				      </div>
				    </div>
				  </div>
				</div>

        }
}

export default Ads