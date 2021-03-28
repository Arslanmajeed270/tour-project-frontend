import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePassword } from '../../../store/auth/actions'

const Settings = ({active}) => {
    const dispatch = useDispatch();
    const [ oldPassword, setOldPassword ] = useState( "" );
    const [ newPassword, setNewPassword ] = useState( "" );
    const [ newPassword2, setNewPassword2 ] = useState( "" );
    const [ isError, setIsError ] = useState( false );
    
    const submitHandler = (e) => {
        e.preventDefault();
        if( newPassword !== newPassword2 )
        {setIsError(true);}
        else{
            setIsError(false);
            dispatch(updatePassword({
                oldPassword,
                newPassword
            }));
        }
    }

    return (
    <div  className={`tab-pane fade ${ active === 3 ? "show active" : "" }`} id="tabs_3">
        <div className="user-settings">
            <h3 className="user-details-title">Settings</h3>
            <form onSubmit={submitHandler} >
                <div className="row">
                    <div className="col-lg-7">
                        <label className="single-input-wrap style-two">
                            <span className="single-input-title mb-3">Change your password</span>
                            <input 
                            type="password" 
                            placeholder="Old password" 
                            required
                            name="oldPassword"
                            value={oldPassword}
                            onChange={(e)=> setOldPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="col-lg-7">
                        <label className="single-input-wrap style-two">
                            <input 
                            type="password" 
                            style={{
                                border: isError ? "1px solid red" : "1px solid #F8F8F8"
                            }}
                            placeholder="New password" 
                            name="newPassword"
                            value={newPassword}
                            onChange={(e)=> setNewPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="col-lg-7">
                        <label className="single-input-wrap style-two">
                            <input 
                            type="password" 
                            placeholder="New password" 
                            required
                            name="newPassword2"
                            style={{
                                border: isError ? "1px solid red" : "1px solid #F8F8F8"
                            }}
                            value={newPassword2}
                            onChange={(e)=> setNewPassword2(e.target.value)}
                            />
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

export default Settings;