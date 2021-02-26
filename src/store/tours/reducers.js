import { 
	SET_TOURS_DATA,
	SET_SINGLE_TOURS
 } from './types';

const initialState = {
	toursData: {},
	singleTour: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_TOURS_DATA:
			return {
				...state,
				toursData: action.payload
			};
		case SET_SINGLE_TOURS:
			return {
				...state,
				singleTour: action.payload
			};
		default:
			return state;
	}
}