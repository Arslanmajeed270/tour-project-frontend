import axios from 'axios';

import {
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER,
} from './types';

import {
    setPageLoading,
    clearPageLoading,
} from '../page/actions';

import {
    setErrors,
    clearErrors
} from '../errors/actions';


 
const BACKEND_SERVER_URL = process.env.REACT_APP_API_URL;

// Set logged in user (Verified)
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const clearCurrentUser = () => {
    return {
		type: CLEAR_CURRENT_USER
	};
};


// Login - Get User Token (Verified)
export const loginUser = (userData, history) => dispatch => {
    dispatch(setPageLoading());

    axios
    .post(
        BACKEND_SERVER_URL+'/authenticateAdminUser', 
        userData
    )
    .then(res => {
        const { status, data } = res.data;
        if( status === "success" ){
            localStorage.setItem('jwtToken',JSON.stringify( data.user)) ;
            dispatch(setCurrentUser(data.user))
            dispatch(clearErrors())
            history.push(`/`)
        }else{
            dispatch(setErrors({
                message: "SomeThing Went Wrong! Please try again."
            }))
        }
    })
    .catch(err => dispatch(setErrors(err)))      
    .finally(() => dispatch(clearPageLoading()))
};

// Log user out (Verified)
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(clearCurrentUser());
};