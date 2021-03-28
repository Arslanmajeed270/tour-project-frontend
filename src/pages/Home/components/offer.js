import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
class Offer extends Component {

	offerRenderer = () => {
		const { discountedTours } = this.props;
		const offerContent = (
			<div className="destinations-list-slider">
				{discountedTours.length ? discountedTours.map( (data, idx) => ( 
			<div key={idx}  className="d-list-slider-item">
			<div className="single-destinations-list text-center">
			  <div className="thumb">
				{ data.specialOffer ? 
				<span className="d-list-tag">Special Offer</span>
				: ""
				} 
				<img width="295" height="195" src={ data.image ? `${data.image}` : '/assets/img/api_images/tour1.jpeg'} alt="list" />
				<div className="d-list-btn-wrap">
				  <div className="d-list-btn viaje-go-top">
					<Link className="btn btn-yellow" to="/contact-us">Book Now <i className="fa fa-paper-plane" /></Link>
				  </div>
				</div>
			  </div>
			  <div className="details">
				<h4 className="title">{ data.title ? data.title : ''}</h4>
				<p className="content">{ data.description ? data.description : ''}</p>
				<ul className="tp-list-meta border-bt-dot">
				  <li><i className="fa fa-calendar-o" /> {  data.departure ? moment(Date(data.departure)).format('DD MMM') : ''}</li>
				  <li><i className="fa fa-clock-o" /> { data.duration ? data.duration : 0} days</li>
				  <li><i className="fa fa-star" /> { data.rating ? data.rating : 0}</li>
				</ul>
				<div className="tp-price-meta tp-price-meta-cl">
				  <p>Price</p>
				  <h2>{data.discountPrice} <small>$</small></h2>
				  <del> { data.price ? data.price : 0}<span>$</span></del>
				</div>
			  </div>
			</div>
		  </div>
		  ))
		  :""}

			</div>
			);
			return offerContent;
	}



    render() {
    return (
	<div className="offer-area pd-top-70">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-8">
			        <div className="section-title text-center">
			          <h2 className="title">Special offers &amp; Discounts</h2>
			          <p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="destinations-list-slider-bg">
			    <div className="container">
			      <div className="row">
			        <div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
					 
					 {this.offerRenderer()}
					 
				    </div>
			        <div className="col-lg-2 align-self-center order-lg-11">
			          <div className="container">
			            <div className="destinations-slider-controls">
			              <div className="slider-nav tp-control-nav" />
			              {/*slider-nav*/}
			              <div className="tp-slider-extra slider-extra">
			                <div className="text">
			                  <span className="first">01 </span>
			                  <span className="last" />
			                </div>
			                {/*text*/}
			                <div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
			                  <span className="slider__label sr-only" />
			                </div>
			              </div>
			              {/*slider-extra*/}
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
	)   
	}
}

export default Offer