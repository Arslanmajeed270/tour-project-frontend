import React from 'react'

const Reviews = ({active}) => {
    return (
    <div className={`tab-pane fade ${ active === 5 ? "show active" : "" }`} id="tabs_6">
        <div className="user-tour-details">
            <h3 className="user-details-title">Reviews</h3>
            <span className="user-tour-details-title">Reviews About You</span>
            <span>| Reviews By You</span>
            <div className="comments-area tour-details-review-area">
                <ul className="comment-list mb-0">
                    <li>
                        <div className="single-comment-wrap">
                            <div className="thumb">
                                <img src={require("../../../assets/img/client/2.png")} alt="img" />
                            </div>
                            <div className="content">
                                <h4 className="title">Tyler Bailey</h4>
                                <span className="date">13 August 2019</span>
                                <div className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
			            
    )
}

export default Reviews