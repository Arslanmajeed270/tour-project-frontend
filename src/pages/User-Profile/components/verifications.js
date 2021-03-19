import React from 'react'

const Verifications = ({active}) => {
    return (
    <div className={`tab-pane fade ${ active === 2 ? "show active" : "" }`} id="tabs_2">
        <div className="user-verification">
          <div className="row">
            <div className="col-lg-7">
                <h3 className="user-details-title">Verification</h3>
                <div className="notice"><i className="fa fa-exclamation-triangle" /> Your email hasn't been verified.</div>
                <span>imshuvo97@gmail.com</span>
            </div>
          </div>
        </div>
    </div>
      
    )
}
export default Verifications;