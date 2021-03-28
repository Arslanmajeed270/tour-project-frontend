import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TourList extends Component {

  toursRendererHandler = () => {
    const { paginationHandler } = this.props;
    const { tours, totalPages, offset } = this.props;
      return (
        <div className="row justify-content-center">
          { tours && tours.length ? 
          tours.map( (data, idx) => (
          <div key={idx}  className="col-lg-4 col-sm-6">
          <div className="single-destinations-list style-two">
            <div className="thumb">
              <img src={data.image} height="258" width="387"  alt="list" />
            </div>
            <div className="details">
              <p className="location"><img src={require("../../../assets/img/icons/1.png")} alt="map" />{data.location}</p>
              <h4 className="title"><Link to={`/tour-details-${data.id}`}>{data.title}</Link></h4>
              <p className="content">{data.description}</p>
              <div className="tp-price-meta">
                <h2>{data.price} <small>$</small></h2>
              </div>
            </div>
          </div>
        </div>
        
          ))
          :"" }
        <div className="col-lg-12 text-center">
          <div className="tp-pagination text-center d-inline-block mt-4">
            <ul>
              { offset > 1 &&
                <li><span className="prev page-numbers" onClick={() => paginationHandler(offset - 1) } ><i className="la la-long-arrow-left" /></span></li>
              }
              { offset - 1 > 1 &&
                <li><span className="page-numbers" onClick={() => paginationHandler(offset - 1) }> {offset - 1} </span></li>
              }
              <li><span className="page-numbers current" >{offset}</span></li>
              { offset + 1 <= totalPages && 
                <li><span className="page-numbers" to="#" onClick={() => paginationHandler(offset + 1) }>{offset+1}</span></li>
              }
              { offset + 2 <= totalPages && 
              <li><span className="page-numbers" to="#" onClick={() => paginationHandler(offset + 2) }>{offset+2}</span></li>
              }
              { offset + 1 <= totalPages &&
                <li><span className="next page-numbers" to="#" onClick={() => paginationHandler(offset + 1) }><i className="la la-long-arrow-right" /></span></li>
               }
            </ul>                          
          </div>
        </div>
      </div>
      );
  }

    render() {
      const { cities, location, onChangeHandler, onSubmitHandler  } = this.props;
    return	(
    <div className="tour-list-area pd-top-120 viaje-go-top">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-8 order-lg-12">

                    {/* ****  properties data Start **** */}
                    {this.toursRendererHandler()}
                    {/* ****  properties data End **** */}
                  </div>
                  <div className="col-xl-3 col-lg-4 order-lg-1">
                    <div className="sidebar-area sidebar-area-inner-page">
                      <div className="widget tour-list-widget">
                        <div className="widget-tour-list-meta">
                        <div className="single-widget-search-input-title"><i className="fa fa-map-marker" /> Location</div>
                          <div className="single-widget-search-input">
                            <input 
                            type="text" 
                            placeholder="Location"
                            name="location"
                            value={location}
                            onChange={onChangeHandler}
                            />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-dot-circle-o" /> Where From?</div>
                          <div className="single-widget-search-input">
                            <select 
                            className="select w-100 custom-select"
                            name="from"
                            >
                            <option value="" >Where From?</option>
                            { cities && cities.length ? cities.map( (data, idx) => (
                              <option key={idx} value={data.id} >{data.name}</option>
                            )) 
                            :"" }
                            </select>
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-plus-circle" /> Travel Type</div>
                          <div className="single-widget-search-input">
                            <select 
                            className="select w-100 custom-select"
                            name="travelType"
                            >
                              <option value={''}>Tour List Destination</option>
                              <option value={"Event Travel"}>Event Travel</option>
                              <option value={"Weekend Break"}>Weekend Break</option>
                              <option value={"Package Holiday"}>Package Holiday</option>
                              <option value={"Business Travel"}>Business Travel</option>
                            </select>
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Departing</div>
                          <div className="single-widget-search-input">
                            <input 
                            type="text" 
                            className="departing-date custom-select" 
                            placeholder="Departing"
                            name="departure"
                            />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Returning</div>
                          <div className="single-widget-search-input">
                            <input type="text" 
                            className="returning-date custom-select" 
                            placeholder="Returning" 
                            name="returnDate"
                            />
                          </div>
                          <div className="col-lg-2 col-md-4 order-12">
                            <button className="btn btn-yellow" onClick={onSubmitHandler} ><i className="ti-search" /> Search</button>
                          </div>
                        </div>
                      </div>
                      <div className="widget_ads">
                        <Link to="#"><img src={require("../../../assets/img/others/01.png")} alt="img" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
        }
}

export default TourList