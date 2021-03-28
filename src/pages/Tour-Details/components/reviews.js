import React from 'react'

export default function Reviews( {reviews} ) {
    return (
        <ul className="comment-list mb-0">
            {reviews && reviews.length ? reviews.map( (data, idx) => (
                <li key={idx}>
                    <div className="single-comment-wrap">
                        <div className="thumb">
                        <img width="65" height="65" src={data.image} alt="img" />
                        </div>
                        <div className="content">
                        <h4 className="title">{ data.name }</h4>
                        <span className="date"> {data.date} </span>
                        <div className="tp-review-meta">
                        <i className={`${ data.rating && data.rating > 0 ? "ic-yellow" : ""} fa fa-star`} />
                            <i className={`${ data.rating && data.rating > 1 ? "ic-yellow" : ""} fa fa-star`} />
                            <i className={`${ data.rating && data.rating > 2 ? "ic-yellow" : ""} fa fa-star`} />
                            <i className={`${ data.rating && data.rating > 3 ? "ic-yellow" : ""} fa fa-star`} />
                            <i className={`${ data.rating && data.rating > 4 ? "ic-yellow" : ""} fa fa-star`} />
                        </div>
                        <p>{data.text}</p>
                        </div>
                    </div>
                </li>
            ) ) : "" }
        </ul>
        )
}
