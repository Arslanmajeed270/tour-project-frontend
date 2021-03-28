import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { userBookingDetail } from '../../../store/tours/actions'

const Booking = ({active}) => {
    const dispatch = useDispatch();
    const bookedTours = useSelector(state => state.tours.bookedTours)
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        dispatch(userBookingDetail(user.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(`bookedTours: `, bookedTours);
    return (
    <div className={`tab-pane fade ${ active === 4 ? "show active" : "" }`} id="tabs_4">
        <div className="user-recent-view">
            <h3 className="user-details-title">Bookings</h3>
            <div className="row">
                { bookedTours && bookedTours.length ? 
                bookedTours.map( (data, idx) => (
                    <div className="col-sm-6" key={idx} >
                        <div className="single-destinations-list style-two">
                            <div className="thumb">
                                <img src={ data.images && data.images.length ? data.images[0] :  require("../../../assets/img/destination-list/4.png")} alt="list" />
                            </div>
                            <div className="details">
                                <p className="location"><img src={require("../../../assets/img/icons/1.png")} alt="map" /> {data.location} </p>
                                <h4 className="title"><Link to={`/tour-details-${data.id}`}> {data.title} </Link></h4>
                                <p className="content"> { data.description } </p>
                                <div className="tp-price-meta">
                                    <h2> {data.price} <small>$</small></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                
                ) ) :"" }
            </div>
        </div>
    </div>
    )
}

export default Booking;