import React, { Component } from 'react';
import $ from 'jquery';

class Search extends Component {

	state = {
		location: "",
	}

	onChangeHandler = (e) => {
		const { name, value } = e.target;
		this.setState({
		  [name]: value
		});
	  }
	  onSubmitHandler = () => {
		  const { location } = this.state;
			const locationFrom = $('select[name="from"]').siblings('.nice-select').find('span').html();
			const departure = $('input[name="departure"]').val();
			const returnDate = $('input[name="returnDate"]').val();
			const travelType = $('select[name="travelType"]').siblings('.nice-select').find('span').html();
			let URL = `/tour-list`;
			if ( location !== "" || locationFrom !== "Where From?" || 
			departure !== "" || returnDate !== "" || travelType !== "Travel Type" ){
				URL += location !== "" ? `?location=${location}` : ``;
				URL +=  locationFrom !== "Where From?" ?  URL !== `/tour-list` ? `&locationFrom=${locationFrom}` : `?locationFrom=${locationFrom}` : ``;
				URL +=  departure !== "" ?  URL !== `/tour-list` ? `&departure=${departure}` : `?departure=${departure}` : ``;
				URL +=  returnDate !== "" ?  URL !== `/tour-list` ? `&returnDate=${returnDate}` : `?returnDate=${returnDate}` : ``;
				URL +=  travelType !== "Travel Type" ?  URL !== `/tour-list` ? `&travelType=${travelType}` : `?travelType=${travelType}` : ``;
			}
			this.props.history.push(URL);
		}

    render() {
		const { cities } = this.props;
		const { location } = this.state;
    return  (
	<div className="search-area tp-main-search-area viaje-go-top">
		  <div className="container">
		    <div className="tp-main-search">
		      <div className="row">
		        <div className="col-lg-3 col-md-4">
		          <div className="tp-search-single-wrap">
		            <input className="w-100" 
						type="text" 
						placeholder="Location"
						name="location"
						value={location}
						onChange={this.onChangeHandler}
					/>
		            <i className="ti-location-pin" />
		          </div>
		        </div>
		        <div className="col-lg-2 col-md-4">
		          <div className="tp-search-single-wrap float-left w-100">

					<select 
						className="select w-100"
						name="from"
					>
		              <option value="" >Where From?</option>
					  { cities && cities.length ? cities.map( (data, idx) => (
						  <option key={idx} value={data.id} >{data.name}</option>
					  )) 
					  :"" }
		            </select>
					<i className="fa fa-dot-circle-o" />
		          </div>
		        </div>
		        <div className="col-lg-2 col-md-4 order-lg-9">
		          <div className="tp-search-single-wrap float-left w-100">
		            <select 
						className="select w-100"
						name="travelType"
					>
		              <option value={""}>Travel Type</option>
		              <option value={"Event Travel"}>Event Travel</option>
		              <option value={"Weekend Break"}>Weekend Break</option>
		              <option value={"Package Holiday"}>Package Holiday</option>
		              <option value={"Business Travel"}>Business Travel</option>
		            </select>
		            <i className="fa fa-plus-circle" />
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-8 order-lg-6">
		          <div className="tp-search-single-wrap float-left">
		            <div className="tp-search-date tp-departing-date-wrap w-50 float-left">
		              <input type="text" 
						className="departing-date" 
						placeholder="Departing" 
						name="departure"
					  />
		              <i className="fa fa-calendar-minus-o" />
		            </div>
		            <div className="tp-search-date tp-returning-date-wrap w-50 float-left">
		              <input type="text" 
						className="returning-date" 
						placeholder="Returning" 
						name="returnDate"
					  />
		              <img src={require("../../../assets/img/icons/2.png")} alt="icons" />
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-2 col-md-4 order-12">
		          <button className="btn btn-yellow" onClick={this.onSubmitHandler} ><i className="ti-search" /> Search</button>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>)

        }
}

export default Search;