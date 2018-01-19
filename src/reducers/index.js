import { LOADING, SUCCESS, ERROR, COUNTRY_CHANGED, CATEGORY_CHANGED } from '../constants/constants';

const init = {
	data: [],
	status: 'initial',
	country: 'in',
	category: '',
};

export default (state = init, action) => {
	switch(action.type) {
		case LOADING:
			return {...state,status:"loading"}
		case SUCCESS:
			return {...state,status:"success", data: action.items}
		case ERROR :
			return {...state,status:"error"}
		case COUNTRY_CHANGED :
			return {...state,country:action.countryName}
		case CATEGORY_CHANGED :
			return {...state,category:action.categoryName}
		default:
					return state;
	}
}