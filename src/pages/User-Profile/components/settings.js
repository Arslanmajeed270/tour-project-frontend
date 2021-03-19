import React from 'react'

const Settings = ({active}) => {
    return (
    <div  className={`tab-pane fade ${ active === 3 ? "show active" : "" }`} id="tabs_3">
        <div className="user-settings">
            <h3 className="user-details-title">Settings</h3>
            <div className="row">
                <div className="col-lg-7">
                    <label className="single-input-wrap style-two">
                        <span className="single-input-title mb-3">Change your password</span>
                        <input type="text" placeholder="Old password" />
                    </label>
                </div>
                <div className="col-lg-7">
                    <label className="single-input-wrap style-two">
                        <input type="text" placeholder="New password" />
                    </label>
                </div>
                <div className="col-lg-7">
                    <label className="single-input-wrap style-two">
                        <input type="text" placeholder="New password" />
                    </label>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Settings;