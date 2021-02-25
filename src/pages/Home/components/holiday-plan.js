import React, { Component } from 'react';

class HolidayFun extends Component {

	toursRenderer = () => {
		const { tours } = this.props;
		return (
			<div className="row">
				  { tours.length ? tours.map( (data, idx) => (
				<div key={idx} className="col-lg-3 col-sm-6">
			  <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
				<div className="thumb">
				  <img width="387" height="258"  src={data.image} alt="list" />
				</div>
				<div className="details">
				  <p className="location"><img src={require("../../../assets/img/icons/1.png")} alt="map" />{data.location}</p>
				  <h4 className="title">{data.title}</h4>
				  <p className="content">{data.description}</p>
				  <div className="tp-price-meta">
					<h2> {data.price} <small>$</small></h2>
				  </div>
				</div>
			  </div>
			</div>
			)) 
			:"" }
		  </div>
		);
	}

    render() {

    return  <div className="holiday-plan-area tp-holiday-plan-area mg-top-96" style={{backgroundImage: 'url('+require('../../../assets/img/bg/8.png')+')'}}>
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-9">
			        <div className="section-title text-center">
			          <h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Perfect Holiday Plan</h2>
			          <p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">No vis fastidii accumsan, ignota postulant ea mea. Vis et prima integre, ei vis ridens moderatius reformidans cu vim doctus accumsan ignota.</p>
			        </div>
			      </div>
			    </div>


				{this.toursRenderer()}

			  </div>
			</div>

        }
}

export default HolidayFun