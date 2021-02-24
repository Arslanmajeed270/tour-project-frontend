import axios from 'axios';

import {
    SET_HOME_PAGE_DATA,
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

// HomepageDate - Get homePageDate from backend
export const getHomePageData = () => dispatch => {
    dispatch(setPageLoading());

    axios
    .get(
        BACKEND_SERVER_URL+'/authenticateAdminUser'
    )
    .then(res => {
        const { status, data } = res.data;
    
        if( status === "success" ){
            dispatch({
                type: SET_HOME_PAGE_DATA,
                payload: data
            });
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