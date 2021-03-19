import React from 'react'

const Profile = ({ active }) => {

    return (
    <div className={`tab-pane fade ${ active === 1 ? "show active" : "" }`} id="tabs_1">
        <div className="user-details">
            <h3 className="user-details-title">Profile</h3>
            <div className="tp-img-upload">
                <div className="tp-avatar-preview">
                    <div id="tp_imagePreview" style={{backgroundImage: 'url('+require('../../../assets/img/team/1.png')+')'}}>
                    </div>
                </div>
                <div className="tp-avatar-edit">
                    <input type="file" id="tp_imageUpload" accept=".png, .jpg, .jpeg" />
                    <label className="btn btn-transparent" htmlFor="tp_imageUpload"><i className="fa fa-picture-o" />Change Photo</label>
                    <h4 className="name">Afsar Hossen</h4>
                </div>
            </div>
            <form className="tp-form-wrap">
                <div className="row">
                    <div className="col-md-6">
                        <label className="single-input-wrap style-two">
                            <span className="single-input-title">First Name</span>
                            <input type="text" name="first-name" />
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label className="single-input-wrap style-two">
                            <span className="single-input-title">Last Number</span>
                            <input type="text" name="last-name"/>
                        </label>
                    </div>
                    <div className="col-lg-12">
                        <label className="single-input-wrap style-two">
                            <span className="single-input-title">Tell us about yourself.</span>
                            <textarea defaultValue={""} name="message" />
                        </label>
                    </div>
                    <div className="col-md-7">
                        <label className="single-input-wrap style-two">
                            <span className="single-input-title">Country</span>
                            <input type="text"  name="country"/>
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label className="single-input-wrap style-two">
                            <span className="single-input-title">Email Address</span>
                            <input type="text" name="email" />
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label className="single-input-wrap style-two">
                            <span className="single-input-title">Other Phone</span>
                            <input type="text" placeholder={+880} name="phone" />
                        </label>
                    </div>
                    <div className="col-12">
                        <input className="btn btn-yellow mt-3 text-center" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Profile