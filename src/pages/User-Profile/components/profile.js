import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInfo } from '../../../store/auth/actions'

const Profile = ({ active }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)
    const [ profileImage, setProfileImage ] = useState( null );
    const [ name, setName ] = useState(user.name? user.name : "");
    const [ phoneNum, setPhoneNum ] = useState( user.phoneNum? user.phoneNum: "" );
    const [ country, setCountry ] = useState( user.country? user.country: "" );
    const [ city, setCity ] = useState( user.city? user.city: "" );
    const [ street, setStreet ] = useState( user.street? user.street: "" );
    const [ imgSrc, setImageSrc ] = useState(user.profileImage ? user.profileImage : "");

    if( typeof profile ){

    }

    const fileChangeHandler = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
      
         reader.onloadend = function (e) {
            setImageSrc(reader.result);
          };
        }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profileImage', profileImage);
        formData.append('name', name);
        formData.append('phoneNum', phoneNum);
        formData.append('country', country);
        formData.append('city', city);
        formData.append('street', street);
        dispatch(updateUserInfo(formData));
    }
    return (
    <div className={`tab-pane fade ${ active === 1 ? "show active" : "" }`} id="tabs_1">
        <form onSubmit={formSubmitHandler}>
            <div className="user-details">
                <h3 className="user-details-title">Profile</h3>
                <div className="tp-img-upload">
                    <div className="tp-avatar-preview">
                        <div id="tp_imagePreview" style={{backgroundImage: imgSrc !== "" ? imgSrc : 'url('+require('../../../assets/img/team/1.png')+')'}}>
                        </div>
                    </div>
                    <div className="tp-avatar-edit">
                        <input 
                        type="file" id="tp_imageUpload" 
                        accept=".png, .jpg, .jpeg"
                        name="profileImage"
                        onChange={(e) => {
                            setProfileImage(e.target.files[0])
                            fileChangeHandler(e.target.files[0]);
                        }}
                        />
                        <label className="btn btn-transparent" htmlFor="tp_imageUpload"><i className="fa fa-picture-o" />Change Photo</label>
                        <h4 className="name">Afsar Hossen</h4>
                    </div>
                </div>
                <form className="tp-form-wrap">
                    <div className="row">
                        <div className="col-md-12">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Name</span>
                                <input 
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="col-md-12">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Phone Number</span>
                                <input 
                                type="text"
                                placeholder="Enter phone number"
                                name="phoneNum"
                                value={phoneNum}
                                onChange={(e) => setPhoneNum(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Country</span>
                                <input 
                                type="text"  
                                placeholder="Country"
                                name="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">City</span>
                                <input 
                                type="text"  
                                placeholder="Country"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Street</span>
                                <input 
                                type="text" 
                                name="street"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="col-12">
                            <input className="btn btn-yellow mt-3 text-center" type="submit" />
                        </div>
                    </div>
            </form>
        </div>
        </form>    
    </div>
    )
}

export default Profile