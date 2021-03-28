import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';


const Reviews = ({active}) => {
    const user = useSelector(state => state.auth.user)
    return (
    <div className={`tab-pane fade ${ active === 5 ? "show active" : "" }`} id="tabs_6">
        <div className="user-tour-details">
            <h3 className="user-details-title">Reviews</h3>
            <span className="user-tour-details-title">Reviews About You</span>
            <span>| Reviews By You</span>
            <div className="comments-area tour-details-review-area">
                <ul className="comment-list mb-0">
                    { user && user.reviews && user.reviews.length ?
                    user.reviews.map( (data, index) => (
                        <li key={index} >
                            <div className="single-comment-wrap">
                                <div className="thumb">
                                    <img src={ data.tourImage ? data.tourImage : require("../../../assets/img/client/2.png")} alt="img" />
                                </div>
                                <div className="content">
                                    <h4 className="title"> {data.tourTitle} </h4>
                                    <span className="date"> {  data.createdAt ? moment(Date(data.createdAt)).format('DD MMMM YYYY') : ''} </span>
                                    <div className="tp-review-meta">
                                    <i className={`${ data.rating && data.rating > 0 ? "ic-yellow" : ""} fa fa-star`} />
                                    <i className={`${ data.rating && data.rating > 1 ? "ic-yellow" : ""} fa fa-star`} />
                                    <i className={`${ data.rating && data.rating > 2 ? "ic-yellow" : ""} fa fa-star`} />
                                    <i className={`${ data.rating && data.rating > 3 ? "ic-yellow" : ""} fa fa-star`} />
                                    <i className={`${ data.rating && data.rating > 4 ? "ic-yellow" : ""} fa fa-star`} />
                                    </div>
                                    <p> {data.text} </p>
                                </div>
                            </div>
                        </li>
                
                    ) )
                     :"" }
                   </ul>
            </div>
        </div>
    </div>
			            
    )
}

export default Reviews