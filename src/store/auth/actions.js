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
import { Success } from '../../components/common/toastify';


 
const BACKEND_SERVER_URL = process.env.REACT_APP_API_URL_DEV;

// Set logged in user (Verified)
export const setCurrentUser = decoded => {
    if( !localStorage.jwtToken ){
        localStorage.setItem('jwtToken', JSON.stringify( decoded ))
    }
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

// Log user out (Verified)
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(clearCurrentUser());
};

// Register
export const register = (reqPacket) => dispatch => {
    dispatch(setPageLoading());
    axios
    .post(
        BACKEND_SERVER_URL+'/register',
        reqPacket
    )
    .then(res => {
        const { status } = res.data;
        if( status === "success" ){
            Success("Congratulations! Your account successfully registered.");
            dispatch(clearErrors())
        }else{
            dispatch(setErrors({
                message: "SomeThing Went Wrong! Please try again."
            }))
        }        
    })
    .catch(err => dispatch(setErrors(err)))
    .finally(() => dispatch(clearPageLoading()))
};

// Login
export const login = (reqPacket, history) => dispatch => {
    dispatch(setPageLoading());
    axios
    .post(
        BACKEND_SERVER_URL+'/login',
        reqPacket
    )
    .then(res => {
        const { status, data } = res.data;
        if( status === "success" ){
            dispatch(setCurrentUser(data.user))
            dispatch(clearErrors())
            history.push(`/user-profile`)
            Success("Successfully logged in!.");
        }else{
            dispatch(setErrors({
                message: "SomeThing Went Wrong! Please try again."
            }))
        }        
    })
    .catch(err => dispatch(setErrors(err)))
    .finally(() => dispatch(clearPageLoading()))
};


// updateUserInfo
export const updateUserInfo = (reqPacket) => dispatch => {
    dispatch(setPageLoading());
    axios
    .post(
        BACKEND_SERVER_URL+'/updateUserInfo',
        reqPacket
    )
    .then(res => {
        const { status, data } = res.data;
        if( status === "success" ){
            localStorage.setItem('jwtToken', JSON.stringify( data.user ))
            dispatch(setCurrentUser(data.user))
            dispatch(clearErrors())
            Success("User info successfully updated!.");
        }else{
            dispatch(setErrors({
                message: "SomeThing Went Wrong! Please try again."
            }))
        }        
    })
    .catch(err => dispatch(setErrors(err)))
    .finally(() => dispatch(clearPageLoading()))
};

// verifyUser 
export const verifyUser  = (reqPacket) => dispatch => {
    dispatch(setPageLoading());
    axios
    .post(
        BACKEND_SERVER_URL+'/verifyUser',
        reqPacket
    )
    .then(res => {
        const { status, data } = res.data;
        if( status === "success" ){
            localStorage.setItem('jwtToken', JSON.stringify( data.user ))
            dispatch(setCurrentUser(data.user))
            dispatch(clearErrors())
            Success("Email successfully verified!.");
        }else{
            dispatch(setErrors({
                message: "SomeThing Went Wrong! Please try again."
            }))
        }        
    })
    .catch(err => dispatch(setErrors(err)))
    .finally(() => dispatch(clearPageLoading()))
};

// update password 
export const updatePassword   = (reqPacket) => dispatch => {
    dispatch(setPageLoading());
    axios
    .post(
        BACKEND_SERVER_URL+'/updatePassword',
        reqPacket
    )
    .then(res => {
        const { status } = res.data;
        if( status === "success" ){
            dispatch(clearErrors())
            Success("password successfully updated!.");
        }else{
            dispatch(setErrors({
                message: "SomeThing Went Wrong! Please try again."
            }))
        }        
    })
    .catch(err => dispatch(setErrors(err)))
    .finally(() => dispatch(clearPageLoading()))
};