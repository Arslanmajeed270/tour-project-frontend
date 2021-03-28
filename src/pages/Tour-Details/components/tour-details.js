/* eslint-disable jsx-a11y/iframe-has-title */
import moment from 'moment';
import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItineraryCarousel from './carousel'
import Reviews from './reviews'
class TourDetails extends Component {
  state = {
    name:"",
    email:"",
    phone:"",
    cnic:"",
    cnicImage: null,
    message:"",
  }

  inputChangeHandler = ( e ) => {
    const { name, value } = e.target;
    if( name === 'cnicImage' ){
      this.setState({
        cnicImage: e.target.files[0]
      })
    }
    else{
      this.setState({
        [name]: value
      });
    }
  }

  submitFormHandler = (e) => {
    e.preventDefault();
    const { name, email, phone, cnic, cnicImage, message } = this.state;
    const { onBookTour } = this.props;
    const formData = new FormData();
    formData.append( 'name',name );
    formData.append( 'email',email );
    formData.append( 'phone',phone );
    formData.append( 'cnic',cnic );
    formData.append( 'cnicImage',cnicImage );
    formData.append( 'message',message );
    onBookTour(formData)
  }

    render() {
      const { singleTour } = this.props;
      const {  name, email, phone, cnic, message } = this.state;
    return	(
    <div className="tour-details-area mg-top--70">
              <div className="tour-details-gallery">
                <div className="container-bg bg-dark-blue">
                  <div className="container">
                    <div className="gallery-filter-area row">
                      <div className="gallery-sizer col-1" />
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                        <div className="tp-gallery-item-img">
                          <div className="thumbnails">
                            <img width="477.7" height="303" src={singleTour.images && singleTour.images.length ? singleTour.images[0] : '/assets/img/api_images/tour2.jpg'} alt="tour-details" />
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-3 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <Link to="#" data-effect="mfp-zoom-in">
                            <img width="274.5" height="303" src={singleTour.images && singleTour.images.length > 1 ? singleTour.images[1] : "/assets/img/api_images/tour2.jpg"} alt="tour-details/2" />
                          </Link>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <Link to="#" data-effect="mfp-zoom-in">
                            <img width="173" height="136.72" src={singleTour.images && singleTour.images.length > 2 ? singleTour.images[2] : '/assets/img/api_images/tour2.jpg'} alt="tour-details/3.png" />
                          </Link>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <Link to="#" data-effect="mfp-zoom-in">
                            <img width="173" height="136.72" src={singleTour.images && singleTour.images.length > 3 ? singleTour.images[3] : '/assets/img/api_images/tour2.jpg'} alt="tour-details/4.png" />
                          </Link>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <Link to="#" data-effect="mfp-zoom-in">
                            <img width="173" height="136.72" src={singleTour.images && singleTour.images.length > 4 ? singleTour.images[4] : '/assets/img/api_images/tour2.jpg'} alt="tour-details/5.png" />
                          </Link>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <Link to="#" data-effect="mfp-zoom-in">
                            <img width="173" height="136.72" src={singleTour.images && singleTour.images.length > 5 ? singleTour.images[5] : '/assets/img/api_images/tour2.jpg'} alt="tour-details/6.png" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-4">
                        <div className="details">
                          <p className="location mb-0"><i className="fa fa-map-marker" />{ singleTour.location ? singleTour.location : "" }</p>
                          <h4 className="title">{ singleTour.title ? singleTour.title : "" }</h4>
                          <div className="tp-review-meta">
                            <i className={`${ singleTour.rating && singleTour.rating > 0 ? "ic-yellow" : ""} fa fa-star`} />
                            <i className={`${ singleTour.rating && singleTour.rating > 1 ? "ic-yellow" : ""} fa fa-star`} />
                            <i className={`${ singleTour.rating && singleTour.rating > 2 ? "ic-yellow" : ""} fa fa-star`} />
                            <i className={`${ singleTour.rating && singleTour.rating > 3 ? "ic-yellow" : ""} fa fa-star`} />
                            <i className={`${ singleTour.rating && singleTour.rating > 4 ? "ic-yellow" : ""} fa fa-star`} />
                            <span>{ singleTour.rating ? singleTour.rating : ""}</span>
                          </div>
                          <div className="all-tags">
                            { singleTour.tags && singleTour.tags.length ? 
                            singleTour.tags.map( (data,idx) =>(
                              <Link key={idx} to="#">{data}</Link>
                            ))
                            :"" }
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8">
                        <div className="book-list-warp">
                          <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                          <div className="tp-price-meta">
                            <p>Price</p>
                            <h2>{singleTour.price ? singleTour.price : ""} <small>$</small></h2>
                          </div>
                        </div>
                        <ul className="tp-list-meta border-tp-solid">
                          <li className="ml-0"><i className="fa fa-calendar-o" /> { singleTour.departure ? moment(Date(singleTour.departure)).format('DD MMM') : ""}</li>
                          <li><i className="fa fa-clock-o" /> { singleTour.duration ? singleTour.duration : "" } Days</li>
                          <li><i className="fa fa-users" />{singleTour.allowedPersons ? singleTour.allowedPersons : ""} Person</li>
                          <li><i className="fa fa-star" />{singleTour.rating ? singleTour.rating : ""} </li>
                        </ul>
                      </div>   
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour-details-wrap">
                      <h4 className="single-page-small-title">Description</h4>
                      <p> {singleTour.description ? singleTour.description : ""}</p>
                      <div className="package-included-area">
                        <h4 className="single-page-small-title">Included</h4>
                        <div className="row">
                          { singleTour.included && singleTour.included.length ? singleTour.included.map( (data, index) =>(
                              <div className="col-xl-4 col-sm-6">
                              <div className="single-package-included">
                                <img src={ data.image } alt="icons" />
                                <h6> { data.name } </h6>
                                <p> { data.detail } </p>
                              </div>
                              </div>

                          ) ) : ""}
                         </div>
                      </div>
                      <div className="package-included-location">
                        <h4 className="single-page-small-title">Your Itinerary</h4>
                        <div className="row">
                        <ItineraryCarousel plans={singleTour.plan} />
                        </div>
                      </div>
                      <div className="host-area">
                        <div className="single-host-wrap text-center">
                          <div className="thumb">
                            <img src={ singleTour.agency && singleTour.agency.image ? singleTour.agency.image : '/assets/img/client/user.png' } alt="img" />
                          </div>
                          <h4> { singleTour.agency && singleTour.agency.title ? singleTour.agency.title : '' } </h4>
                          <p> { singleTour.agency && singleTour.agency.description ? singleTour.agency.description : '' } </p>
                          <OverlayTrigger
                          trigger="click"
                          key={"top"}
                          placement={"top"}
                          overlay={
                            <Popover id={`popover-positioned-top`}>
                              <Popover.Content>
                                { singleTour.agency && singleTour.agency.contactNumber ? singleTour.agency.contactNumber : '' }
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <button className="btn btn-yellow">Contact Host</button>
                        </OverlayTrigger>
                        </div>
                      </div>
                     <div className="comments-area tour-details-review-area">
                        <h4 className="comments-title">Reviews</h4>
                        <Reviews reviews={singleTour.reviews} />
                        {/* <div className="btn-wrapper text-right mt-3">
                          <Link className="btn-read-more" to="#"><span>More Review<i className="la la-arrow-right" /></span></Link>
                        </div> */}
                      </div>
                      <div className="location-review-area">
                        <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                          <div className="row">
                            <div className="col-lg-6"><h4 className="single-page-small-title">Write A Review</h4></div>
                            <div className="col-lg-6">
                              <div className="tp-review-meta text-lg-right">
                                <span className="mr-3 ml-0">Assigned Rating</span>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            
                            <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Name</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Email</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-12">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Comments</span>
                                <textarea defaultValue={""} />
                              </label>
                            </div>
                            <div className="col-12">
                              <Link className="btn btn-yellow" to="#">Send</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar-area sidebar-area-4">
                      <div className="widget tour-list-widget">
                        <div className="widget-tour-list-meta">
                          <form onSubmit={this.submitFormHandler} >
                            <div className="single-widget-search-input-title"><i className="fa fa-user" /> NAME</div>
                            <div className="single-widget-search-input">
                              <input type="text" 
                              placeholder="Name" 
                              name="name" 
                              value={name} 
                              required
                              onChange={this.inputChangeHandler} />
                            </div>
                            <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> EMAIL</div>
                            <div className="single-widget-search-input">
                              <input type="text" 
                              placeholder="Email" 
                              name="email"  
                              value={email} 
                              required
                              onChange={this.inputChangeHandler} />
                            </div>
                            <div className="single-widget-search-input-title"><i className="fa fa-phone" /> PHONE</div>
                            <div className="single-widget-search-input">
                              <input type="text" 
                              placeholder="Phone" 
                              name="phone" 
                              value={phone} 
                              onChange={this.inputChangeHandler} />
                            </div>
                            <div className="single-widget-search-input-title"><i className="fa fa-phone" /> CNIC</div>
                            <div className="single-widget-search-input">
                              <input type="text" 
                              placeholder="CNIC Number" 
                              name="cnic"
                              value={cnic}
                              required
                              onChange={this.inputChangeHandler} />
                            </div>
                            <div className="single-widget-search-input-title"><i className="fa fa-phone" /> CNIC IMAGE</div>
                            <div className="single-widget-search-input">
                              <input type="file" 
                              placeholder="CNIC Image" 
                              name="cnicImage"
                              required
                              style={{
                                height:"unset",
                                lineHeight: "unset",
                                padding: "0px"
                              }}
                              onChange={this.inputChangeHandler} />
                            </div>
                            <div className="single-widget-search-input-title"><i className="fa fa-keyboard-o" /> MESSAGE</div>
                            <div className="single-widget-search-input">
                              <textarea 
                              placeholder="Type" 
                              defaultValue={""} 
                              name="message"
                              value={message}
                              onChange={this.inputChangeHandler} />
                            </div>
                            <div className="text-lg-center text-left">
                            <button type="submit" className="btn btn-yellow"  >Book Now <i className="fa fa-paper-plane" /></button>
                          </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)

        }
}

export default TourDetails