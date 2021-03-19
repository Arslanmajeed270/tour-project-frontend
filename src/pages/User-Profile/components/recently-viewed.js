import React from 'react'
import { Link } from 'react-router-dom';

const RecentlyViewed = ({active}) => {
    return (
    <div className={`tab-pane fade ${ active === 4 ? "show active" : "" }`} id="tabs_4">
        <div className="user-recent-view">
            <h3 className="user-details-title">Recently Viewed</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="single-destinations-list style-two">
                        <div className="thumb">
                            <img src={require("../../../assets/img/destination-list/4.png")} alt="list" />
                        </div>
                        <div className="details">
                            <p className="location"><img src={require("../../../assets/img/icons/1.png")} alt="map" />Maldives</p>
                            <h4 className="title"><Link to="#">Hurawalhi Island</Link></h4>
                            <p className="content">7Days Tour on 2 person</p>
                            <div className="tp-price-meta">
                                <h2>620 <small>$</small></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="single-destinations-list style-two">
                        <div className="thumb">
                            <img src={require("../../../assets/img/destination-list/5.png")} alt="list" />
                        </div>
                        <div className="details">
                            <p className="location"><img src={require("../../../assets/img/icons/1.png")} alt="map" />Indonesia</p>
                            <h4 className="title"><Link to="#">Bali Province</Link></h4>
                            <p className="content">4days 2 person</p>
                            <div className="tp-price-meta">
                                <h2>780 <small>$</small></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RecentlyViewed;