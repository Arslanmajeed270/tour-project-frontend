import {
	CLEAR_ERRORS,
	SET_ERRORS,
} from './types';   

export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};

export const setErrors = (err) => {
	return {
		type: SET_ERRORS, 
		payload: err && err.response && err.response.data ? err.response.data : {}
	};
};