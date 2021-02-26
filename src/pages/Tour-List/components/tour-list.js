import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TourList extends Component {

  state = {

  }

  paginationHandler = (offset) => {
   
    const { onPaginationHandler } = this.props;
    onPaginationHandler(offset);
  }

  toursRendererHandler = () => {
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
                <li><span className="prev page-numbers" onClick={() => this.paginationHandler(offset - 1) } ><i className="la la-long-arrow-left" /></span></li>
              }
              { offset - 1 > 1 &&
                <li><span className="page-numbers" onClick={() => this.paginationHandler(offset - 1) }> {offset - 1} </span></li>
              }
              <li><span className="page-numbers current" >{offset}</span></li>
              { offset + 1 <= totalPages && 
                <li><span className="page-numbers" to="#" onClick={() => this.paginationHandler(offset + 1) }>{offset+1}</span></li>
              }
              { offset + 2 <= totalPages && 
              <li><span className="page-numbers" to="#" onClick={() => this.paginationHandler(offset + 2) }>{offset+2}</span></li>
              }
              { offset + 1 <= totalPages &&
                <li><span className="next page-numbers" to="#" onClick={() => this.paginationHandler(offset + 1) }><i className="la la-long-arrow-right" /></span></li>
               }
            </ul>                          
          </div>
        </div>
      </div>
      );
  }

    render() {

    return	(
    <div className="tour-list-area pd-top-120 viaje-go-top">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-8 order-lg-12">
                    <div className="tp-tour-list-search-area">
                      <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap">
                            <i className="fa fa-calendar-minus-o" />
                            <input type="text" className="departing-date" placeholder="Departing" />
                          </label>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap tour-list-search-icon">
                            <i className="la la-arrow-up" />
                            <input type="text" placeholder="Price Low to High" />
                          </label>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap tour-list-search-icon">
                            <i className="la la-arrow-down" />
                            <input type="text" placeholder="Price High to Low" />
                          </label>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap">
                            <i className="fa fa-paper-plane" />
                            <input type="text" placeholder="Name (A - Z)" />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* ****  properties data Start **** */}
                    {this.toursRendererHandler()}
                    {/* ****  properties data End **** */}
                  </div>
                  <div className="col-xl-3 col-lg-4 order-lg-1">
                    <div className="sidebar-area sidebar-area-inner-page">
                      <div className="widget tour-list-widget">
                        <div className="widget-tour-list-search">
                          <form className="search-form">
                            <div className="form-group">
                              <input type="text" placeholder="Search" />
                            </div>
                            <button className="submit-btn" type="submit"><i className="ti-search" /></button>
                          </form>
                        </div>
                        <div className="widget-tour-list-meta">
                          <div className="single-widget-search-input-title"><i className="fa fa-dot-circle-o" /> Where From?</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Tour List Destination" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-plus-circle" /> Travel Type</div>
                          <div className="single-widget-search-input">
                            <select className="select w-100 custom-select">
                              <option value={1}>Tour List Destination</option>
                              <option value={2}>two</option>
                              <option value={3}>Three</option>
                              <option value={3}>Four</option>
                            </select>
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Departing</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="departing-date custom-select" placeholder="Departing" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Returning</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="returning-date custom-select" placeholder="Returning" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-usd" /> Price Filter</div>
                          <div className="widget-product-sorting">
                            <div className="slider-product-sorting" />
                            <div className="product-range-detail">
                              <label htmlFor="amount">Price: </label>
                              <input type="text" id="amount" readOnly />
                            </div>
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