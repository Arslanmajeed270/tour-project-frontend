import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {


    componentDidMount() {
		const script = document.createElement("script");
        script.async = true;
        script.src =  '../../assets/js/main.js';
        document.body.appendChild(script);
    }

    componentWillUnmount(){
		const allScripts = document.getElementsByTagName("script");
		for (let i=allScripts.length; i>=0; i--){
			if (
				allScripts[i] && allScripts[i].getAttribute("src") === "../../assets/js/main.js" ){
					allScripts[i].parentNode.removeChild(allScripts[i])
			}    
		}
    }


    render() {


        return (
  				<footer className="footer-area" style={{backgroundImage: 'url('+require('../../assets/img/bg/2.png')+')'}}>
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-4 col-md-6">
				        <div className="footer-widget widget">
				          <div className="about_us_widget">
				            <Link to="/" className="footer-logo"> 
				              <img src={require("../../assets/img/logo.png")} alt="footer logo" />
				            </Link>
				            <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
				            <ul className="social-icon">
				              <li>
				                <Link className="facebook" to="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook  " /></Link>
				              </li>
				              <li>
				                <Link className="twitter" to="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  " /></Link>
				              </li>
				              <li>
				                <Link className="pinterest" to="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram" /></Link>
				              </li>
				            </ul>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget ">
				          <div className="widget-contact">
				            <h4 className="widget-title">Contact us</h4>
				            <p>
				              <i className="fa fa-map-marker" /> 
				              <span>Manama Tower, Badda Link Road, Badda Dhaka, Bangladesh</span>
				            </p>
				            <p className="location"> 
				              <i className="fa fa-envelope-o" />
				              <span>travelpoint@gmail.com</span>
				            </p>
				            <p className="telephone">
				              <i className="fa fa-phone base-color" /> 
				              <span>
				                +088 012121240
				              </span>
				            </p>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-2 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Quick Link</h4>
				          <ul className="widget_nav_menu  viaje-go-top">
				            <li><Link to="/home-v2">Home</Link></li>
				            <li><Link to="/about-us">About Us</Link></li>
				            <li><Link to="/destination-list">Destination</Link></li>
				            <li><Link to="/tour-details">Tours</Link></li>
				            <li><Link to="/blog">Blog</Link></li>
				            <li><Link to="/contact-us">Contact</Link></li>
				          </ul>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Instagram Gallery</h4>
				          <ul className="widget-instagram-feed">
				            <li><Link to="#"><img src={require("../../assets/img/instagram/1.png")} alt="img" /></Link></li>
				            <li><Link to="#"><img src={require("../../assets/img/instagram/2.png")} alt="img" /></Link></li>
				            <li><Link to="#"><img src={require("../../assets/img/instagram/3.png")} alt="img" /></Link></li>
				            <li><Link to="#"><img src={require("../../assets/img/instagram/4.png")} alt="img" /></Link></li>
				            <li><Link to="#"><img src={require("../../assets/img/instagram/5.png")} alt="img" /></Link></li>
				            <li><Link to="#"><img src={require("../../assets/img/instagram/6.png")} alt="img" /></Link></li>
				          </ul>
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="copyright-inner">
				    <div className="copyright-text">
				      © Viaje 2019 All rights reserved. Powered with by <Link to="https://codingeek.net/" target="_blank"><i className="fa fa-heart" /><span>Codingeek.</span></Link>
				    </div>
				  </div>
				</footer>


        )
    }
}


export default Footer_v1